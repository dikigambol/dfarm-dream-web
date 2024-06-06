import { useState } from "react";
import axios from "../API";
import swal from "sweetalert";
import { headers } from "../../utils/setHeaders";


export const useKomponenBiaya = () => {
  const [listKomponenBiaya, setListKomponenBiaya] = useState([]);
  const [loading, setLoading] = useState(false);

  //view komponen biaya
  const getKomponenBiaya = async () => {
    setLoading(true);
    try {
      const komponenBiayaRes = await axios.get("view/biaya", headers);
      setListKomponenBiaya(kandangRes.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message || "API request failed");
      setLoading(false);
    }
  };

  //add komponen biaya
  const addKomponenBiaya = async (data, modal) => {
    setLoading(true);
    modal.current.click();
    try {
      await axios.post("add/biaya", data, headers);
      setLoading(false);
      swal({
        title: "Berhasil di Tambah",
        text: "menutup jendela...",
        icon: "success",
        timer: 3000,
        buttons: false,
      }).then(() => {
        getKomponenBiaya();
      });
    } catch (error) {
      console.error(error.message || "API request failed");
      setLoading(false);
    }
  };

  //update  komponen biaya
  const editKomponenBiaya = async (data, modal) => {
    setLoading(true);
    modal.current.click();
    try {
      await axios.put("update/biaya" + data.id, data, headers);
      setLoading(false);
      swal({
        title: "Berhasil di Edit",
        text: "menutup jendela...",
        icon: "success",
        timer: 3000,
        buttons: false,
      }).then(() => {
        getKomponenBiaya();
      });
    } catch (error) {
      console.log(error.message || "API request failed");
      setLoading(false);
    }
  };

  //delete komponen biaya
  const deleteKomponenBiaya = async (id) => {
    swal({
      title: "Yakin menghapus ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (okey) => {
      if (okey) {
        setLoading(true);
        try {
          await axios.delete("delete/biaya/" + id, headers);
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
    getKomponenBiaya,
    addKomponenBiaya,
    deleteKomponenBiaya,
    editKomponenBiaya,
    listKomponenBiaya,
    loading,
  };
};