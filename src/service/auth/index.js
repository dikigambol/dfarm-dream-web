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
      if (res.data.data.level === "SUPER OPERATOR") {
        window.location.replace("/dashboard");
      } else if (res.data.data.level === "OPERATOR") {
        window.location.replace("/home");
      } else if (res.data.data.level === "INVESTOR") {
        window.location.replace("/investor");
      } else if (res.data.data.level === "ACCOUNT DEMO") {
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


  // const setTokenInCookie = (token) => {
  //   document.cookie = `token=${token}; path=/; secure; HttpOnly;`;
  // };

  // const signIn = async (payload) => {
  //   setLoading(true);
  //   try {
  //     const res = await axios.post("/v1/auth/login", payload);
  //     const token = res.data.data.token;
  //     setTokenInCookie(token);
  //     const decodedToken = jwtDecode(token);
  //     setLoading(false);
  //     if (decodedToken.akses === "superoperator") {
  //       window.location.replace("/dashboard");
  //     } else if (decodedToken.akses === "operator") {
  //       window.location.replace("/home");
  //     } else if (decodedToken.akses === "investor") {
  //       window.location.replace("/investor");
  //     }
  //     return decodedToken;
  //   } catch (error) {
  //     setLoading(false);
  //     console.error("Login error:", error);
  //     swal({
  //       title: "Login Failed",
  //       text: "menutup jendela...",
  //       icon: "warning",
  //       timer: 3000,
  //       buttons: false,
  //     });
  //   }
  // };

  // const getCookie = (name) => {
  //   const value = `; ${document.cookie}`;
  //   const parts = value.split(`; ${name}=`);
  //   if (parts.length === 2) return parts.pop().split(";").shift();
  //   return null;
  // };

  // const logOut = async (payload) => {
  //   setLoading(true);
  //   try {
  //     const res = await axios.post("/logout", payload);
  //     setLoading(false);
  //     if (res.status === 200) {
  //       document.cookie = "token=; Max-Age=0; path=/;";
  //       window.location.replace("/");
  //     } else {
  //       console.error("Logout failed:", res.data.message);
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     console.error("Error during logout:", error);
  //   }
  // };

  return {
    login,
    requestOTP,
    resetPassword,
    loading,
  };
};

