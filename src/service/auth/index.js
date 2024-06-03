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
      const res = await axios.post("login", payload);
      setTokenInCookie(res.data.token);
      setLoading(false);
      window.location.replace("/home");
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

  const verifyToken = async (token) => {
    try {
      const res = await axios.post("verify", { authToken: token });
      if (res.data.status == "valid signature") {
        setTokenStatus(true);
      } else {
        setTokenStatus(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    login,
    verifyToken,
    loading,
    tokenStatus,
  };
};
