import { useState } from "react";
import axios from "../API";
import swal from "sweetalert";
import {
  deleteAllCookies,
  getTokenFromCookie,
  setTokenInCookie,
} from "../../utils/setToken";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(undefined);

  const login = async (payload) => {
    setLoading(true);
    try {
      const res = await axios.post("login", payload);
      setTokenInCookie(res.data.token);
      setLoading(false);
      window.location.replace("/dashboard-operator");
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

  const verifyAuth = async () => {
    try {
      let token = getTokenFromCookie();
      const res = await axios.post("verify-token", { authToken: token });
      if (res.data.status == "valid signature") {
        setIsAuth(true);
      } else {
        setIsAuth(false);
        window.location.replace("/");
        deleteAllCookies();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    login,
    verifyAuth,
    loading,
    isAuth,
  };
};
