import React, { Fragment, useEffect, useState } from 'react'
import { useLogin } from '../../service/auth'
import { getTokenFromCookie } from '../../utils/setToken'
import ReCAPTCHA from "react-google-recaptcha";

export default function Auth() {

	const { login, loading } = useLogin()
	const [isAuth, setIsAuth] = useState(false)
	const [captcha, setCaptcha] = useState("")

	const [form, setForm] = useState({
		username: "",
		password: ""
	})

	let token = getTokenFromCookie()

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
				title: "Require Recaptcha!",
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
			window.location.replace('/dashboard')
		}
	}, [token])

	return (
		<Fragment>
			{isAuth ? null :
				<section className="login" id="login">
					<div className="container-fluid">
						<div className="row ">
							<div className="col-lg-6 d-lg-block d-none login-avatar p-0">
								<img src="login-avatar.png" alt="Login Page" className="img-fluid" />
							</div>
							<div className="col-lg-6 login-form">
								<form onSubmit={HandleLogin}>
									<div className="logo mb-4">
										<img src="logo_light.png" alt="Farm Dream" className="img-fluid img-logo" />
										<h2 className="fw-semibold">Login</h2>
									</div>
									<div className="mb-4">
										<label htmlFor="username" className="form-label">Username</label>
										<input type="text"
											className="form-control"
											id="username"
											name="username"
											value={form.username}
											onChange={handleInput}
											required />
									</div>
									<div className="mb-4">
										<label htmlFor="password" className="form-label">Password</label>
										<input type="password"
											className="form-control"
											id="password"
											name="password"
											value={form.password}
											onChange={handleInput}
											required />
									</div>
										<ReCAPTCHA
											sitekey="6LedNvApAAAAAJCoigaxNFLxTGCTJ1GrXZsy6_a8"
											onChange={handleRecaptcha}
										/>
									<div className="mb-4 form-check">
										<input type="checkbox" className="form-check-input" id="re_remember" />
										<label className="form-check-label" htmlFor="re_remember">Ingat Saya</label>
									</div>
									<button type="submit" className="btn btn-primary w-100" disabled={loading}>{loading ? "loading..." : "Masuk"}</button>
								</form>
							</div>
						</div>
					</div>
				</section>
			}
		</Fragment>
	);
}