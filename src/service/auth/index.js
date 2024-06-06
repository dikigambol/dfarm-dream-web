import { useState } from "react";
import axios from "../API";
import swal from "sweetalert";
import { setTokenInCookie } from "../../utils/setToken";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [tokenStatus, setTokenStatus] = useState(undefined);

  const login = async (payload) => {
    setLoading(true);
    try {
      const res = await axios.post("v1/auth/login", payload);
      setTokenInCookie(res.data.data.token);
      setLoading(false);
      window.location.replace("/dashboard");
    } catch (error) {
      setLoading(false);
      swal({
        title: "Login Failed",
        text: "menutup jendela...",
        icon: "warning",
        timer: 3000,
        buttons: false,
      });
    }
  };

  const deleteCookie = async (cookie) => {
    try {
      const res = await axios.post("", {cookie });
      if (res.data.status == "Valid") {
        setTokenStatus(true);
      } else {
        setTokenStatus(false);
      }
    } catch (error) {
      console.error(error);
    }
  };


  // const verifyToken = async (token) => {
  //   try {
  //     const res = await axios.post("v1/app/get_token", { authToken: token });
  //     if (res.data.status == "valid signature") {
  //       setTokenStatus(true);
  //     } else {
  //       setTokenStatus(false);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return {
    login,
    deleteCookie,
    loading,
    tokenStatus,
  };
};
