import { useState } from "react";
import axios from "../API";
import swal from "sweetalert";
import { headers, multipartheaders } from "../../utils/setHeaders";

export const useUser = () => {
  const [listUser, setListUser] = useState([]);
  const [detailUser, setDetailUser] = useState({
    user_id: "",
    nomor_identitas: "",
    user_nama: "",
    user_tempatlahir: "",
    user_tgllahir:"",
    user_gender:"",
    user_email:"",
    user_telpon:"",
    user_npwp:"",
    user_alamat:""
  });
  const [loading, setLoading] = useState(false);

  //view user tabel
  const getUser = async () => {
    setLoading(true);
    try {
      const userRes = await axios.get("user", headers);
      setListUser(userRes.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message || "API request failed");
      setLoading(false);
    }
  };

  //view detail user
  const getDetailUser = async (id, type) => {
    setLoading(true);
    try {
      const userDetailRes = await axios.get(
        "detail-user?id=" + id,
        headers
      );
      if (type == "dashboard") {
        setDetailUser({
          id: userDetailRes.data.user_id,
          nomor_identitas: userDetailRes.data.nomor_identitas,
          user_nama: userDetailRes.data.user_nama,
          user_tempatlahir: userDetailRes.data.user_tempatlahir,
        });
      } else {
        setDetailUser(userDetailRes.data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error.message || "API request failed");
      setLoading(false);
    }
  };

  //add user
  const addUser = async (data) => {
    setLoading(true);
    try {
      setLoading(true);
      await axios.post("user/add/user", data, multipartheaders);
      setLoading(false);
      swal({
        title: "Berhasil di Tambah",
        text: "menutup jendela...",
        icon: "success",
        timer: 3000,
        buttons: false,
      }).then(() => {
        window.location.replace("/users");
      });
    } catch (error) {
      setLoading(false);
      swal({
        title: "Gagal menambah data",
        text: "menutup jendela...",
        icon: "danger",
        timer: 3000,
        buttons: false,
      });
    }
  };

  //update user
  const editUser = async (data) => {
    setLoading(true);
    try {
      await axios.put("user", data, multipartheaders);
      setLoading(false);
      swal({
        title: "Berhasil di Edit",
        text: "menutup jendela...",
        icon: "success",
        timer: 3000,
        buttons: false,
      }).then(() => {
        window.location.replace("/users");
      });
    } catch (error) {
      console.log(error.message || "API request failed");
      setLoading(false);
    }
  };

  //delete user
  const deleteUser = async (id) => {
    swal({
      title: "Yakin menghapus ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (okey) => {
      if (okey) {
        setLoading(true);
        try {
          await axios.delete("user?id=" + id, headers);
          setLoading(false);
          swal({
            title: "Berhasil Hapus ",
            text: "menutup jendela...",
            icon: "success",
            timer: 3000,
            buttons: false,
          }).then(function () {
            getUser();
          });
        } catch (error) {
          console.log(error.message || "API request failed");
          setLoading(false);
        }
      }
    });
  };


  return {
    getUser,
    addUser,
    deleteUser,
    editUser,
    getDetailUser,
    listUser,
    detailUser,
    loading,
  };
};