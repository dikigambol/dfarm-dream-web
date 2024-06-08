import { useState } from "react";
import axios from "../API";
import swal from "sweetalert";
import { setTokenInCookie } from "../../utils/setToken";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const login = async (payload) => {
    setLoading(true);
    try {
      const res = await axios.post("v1/auth/login", payload);
      setTokenInCookie(res.data.data.token);
      setLoading(false);
      const userLevel = res.data.data.level;
      if (userLevel === "SUPER OPERATOR") {
        window.location.replace("/dashboard");
      } else if (userLevel === "OPERATOR") {
        window.location.replace("/home");
      } else if (userLevel === "INVESTOR") {
        window.location.replace("/investor");
      } else if (userLevel === "ACCOUNT DEMO") {
        window.location.replace("/");
      }
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

  const requestOTP = async (payload) => {
    setLoading(true);
    try {
      /* belum tersedia */
      const res = await axios.post("v1/auth/request_otp", payload);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const resetPassword = async (payload) => {
    setLoading(true);
    try {
      /* belum tersedia */
      const res = await axios.post("v1/auth/react_password", payload);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    login,
    requestOTP,
    resetPassword,
    loading,
  };
};
