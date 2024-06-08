import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';

export function isSuperOperator() {
  const token = Cookies.get("token");
  if (token) {
    const userdata = jwtDecode(token);
    if (userdata.data.data.level === "SUPER OPERATOR") {
      return true;
    } else {
      window.location.replace("/not-found");
      return false;
    }
  } else {
    window.location.replace("/login");
    return false;
  }
}

export function isOperator() {
  const token = Cookies.get("token");
  if (token) {
    const userdata = jwtDecode(token);
    if (userdata.data.data.level === "OPERATOR") {
      return true;
    } else {
      window.location.replace("/not-found");
      return false;
    }
  } else {
    window.location.replace("/login");
    return false;
  }
}

export function isInvestor() {
  const token = Cookies.get("token");
  if (token) {
    const userdata = jwtDecode(token);
    if (userdata.data.data.level === "INVESTOR") {
      return true;
    } else {
      window.location.replace("/not-found");
      return false;
    }
  } else {
    window.location.replace("/login");
    return false;
  }
}

export function isDemo() {
  const token = Cookies.get("token");
  if (token) {
    const userdata = jwtDecode(token);
    if (userdata.data.data.level === "ACCOUNT DEMO") {
      return true;
    } else {
      window.location.replace("/not-found");
      return false;
    }
  } else {
    window.location.replace("/login");
    return false;
  }
}


