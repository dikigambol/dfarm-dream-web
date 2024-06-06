import { useState } from "react";
import axios from "../API";
import swal from "sweetalert";
import { headers } from "../../utils/setHeaders";


export const useKandang = () => {
  const [listKandang, setListKandang] = useState([]);
  const [loading, setLoading] = useState(false);

  //view kandang
  const getKandang = async () => {
    setLoading(true);
    try {
      const kandangRes = await axios.get("view/kandang", headers);
      setListKandang(kandangRes.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message || "API request failed");
      setLoading(false);
    }
  };

  //add kandang
  const addKandang = async (data, modal) => {
    setLoading(true);
    modal.current.click();
    try {
      await axios.post("add/kandang", data, headers);
      setLoading(false);
      swal({
        title: "Berhasil di Tambah",
        text: "menutup jendela...",
        icon: "success",
        timer: 3000,
        buttons: false,
      }).then(() => {
        getKandang();
      });
    } catch (error) {
      console.error(error.message || "API request failed");
      setLoading(false);
    }
  };

  //update  kandang
  const editKandang = async (data, modal) => {
    setLoading(true);
    modal.current.click();
    try {
      await axios.put("update/kandang" + data.id, data, headers);
      setLoading(false);
      swal({
        title: "Berhasil di Edit",
        text: "menutup jendela...",
        icon: "success",
        timer: 3000,
        buttons: false,
      }).then(() => {
        getKandang();
      });
    } catch (error) {
      console.log(error.message || "API request failed");
      setLoading(false);
    }
  };

  //delete kandang
  const deleteKandang = async (id) => {
    swal({
      title: "Yakin menghapus ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (okey) => {
      if (okey) {
        setLoading(true);
        try {
          await axios.delete("delete/kandang/" + id, headers);
          setLoading(false);
          swal({
            title: "Berhasil Hapus ",
            text: "menutup jendela...",
            icon: "success",
            timer: 3000,
            buttons: false,
          }).then(function () {
            getKomponenBiaya();
          });
        } catch (error) {
          console.log(error.message || "API request failed");
          setLoading(false);
        }
      }
    });
  };


  return {
    getKandang,
    addKandang,
    deleteKandang,
    editKandang,
    listKandang,
    loading,
  };
};