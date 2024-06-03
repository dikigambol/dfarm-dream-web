import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useLogin } from '../../services/auth';
import { getTokenFromCookie } from '../../utils/setToken';
import ReCAPTCHA from "react-google-recaptcha";
import swal from 'sweetalert';

export default function Login() {
    const [isAuth, setIsAuth] = useState(false)
    const [captcha, setCaptcha] = useState("")

    let token = getTokenFromCookie()

    const { login, loading } = useLogin()

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const handleInput = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleRecaptcha = (value) => {
        setCaptcha(value)
    }

    const HandleLogin = (e) => {
        e.preventDefault()
        if (captcha != "") {
            login(form)
        } else {
            swal({
                title: "Captcha belum diisi!",
                text: "menutup jendela...",
                icon: "warning",
                timer: 3000,
                buttons: false,
            })
        }
    }

    useEffect(() => {
        if (token != null) {
            setIsAuth(true)
            window.location.replace('/dashboard-operator')
        }
    }, [token])

    return (
        <Fragment>
            {isAuth ? null :
                <>
                </>
            }
        </Fragment>
    )
}