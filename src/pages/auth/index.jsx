// eslint-disable-next-line no-unused-vars
import React, { Fragment, useEffect, useState } from 'react'
import { useLogin } from '../../service/auth'
import { getTokenFromCookie } from '../../utils/setToken'
import ReCAPTCHA from "react-google-recaptcha";
import swal from 'sweetalert';

export default function Auth() {

	const { login, requestOTP, loading } = useLogin()
	const [forget, setForget] = useState(false)
	const [isAuth, setIsAuth] = useState(false)
	const [captcha, setCaptcha] = useState("")

	const [formLogin, setFormLogin] = useState({
		username: "",
		password: ""
	})

	const [formForget, setFormForget] = useState({
		email: ""
	})

	let token = getTokenFromCookie()

	const handleInputLogin = (e) => {
		setFormLogin((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}))
	}

	const handleInputForget = (e) => {
		setFormForget((prev) => ({
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
			login(formLogin)
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

	const HandleForget = (e) => {
		e.preventDefault()
		if (captcha != "") {
			requestOTP(formLogin)
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


	return (
		<Fragment>
			{isAuth ? null :
				<section className="login" id="login">
					<div className="container-fluid">
						<div className="row ">
							<div className="col-lg-6 d-lg-block d-none login-avatar p-0">
								<img src="login-avatar.png" alt="Login Page" className="avatar" />
							</div>
							<div className="col-lg-6 login-form">
								{!forget ? (
									<form onSubmit={HandleLogin} method="POST">
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
												value={formLogin.username}
												onChange={handleInputLogin}
												required />
										</div>
										<div className="mb-4">
											<label htmlFor="password" className="form-label">Kata Sandi</label>
											<input type="password"
												className="form-control"
												id="password"
												name="password"
												value={formLogin.password}
												onChange={handleInputLogin}
												required />
										</div>
										<div className='mb-4'>
											<ReCAPTCHA
												sitekey="6LedNvApAAAAAJCoigaxNFLxTGCTJ1GrXZsy6_a8"
												onChange={handleRecaptcha}
											/>
										</div>
										<button type="submit" className="btn btn-primary w-100 mb-3" disabled={loading}>{loading ? "loading..." : "Masuk"}</button>
										<div className="mb-4 form-check">
											<input type="checkbox" className="form-check-input" id="re_remember" />
											<label className="form-check-label" htmlFor="re_remember">Ingat saya</label>
											<button type="button" className="float-end btn px-0 fw-normal forget-sandi text-success" role="button" onClick={() => setForget(!forget)}>Lupa kata sandi?</button>
										</div>
									</form>
								) : (
									<form onSubmit={HandleForget} method="POST">
										<div className="logo mb-4">
											<img src="logo_light.png" alt="Farm Dream" className="img-fluid img-logo" />
											<h2 className="fw-semibold">Lupa Kata Sandi</h2>
										</div>
										<div className="mb-4">
											<label htmlFor="email" className="form-label">Alamat Email</label>
											<input type="text"
												className="form-control"
												id="email"
												name="email"
												value={formForget.email}
												onChange={handleInputForget}
												required />
										</div>
										<div className='mb-4'>
											<ReCAPTCHA
												sitekey="6LedNvApAAAAAJCoigaxNFLxTGCTJ1GrXZsy6_a8"
												onChange={handleRecaptcha}
											/>
										</div>
										<button type="submit" className="btn btn-primary w-100 mb-2" disabled={loading}>{loading ? "loading..." : "Atur ualng sandi"}</button>
										<div className="mb-4 form-check">
											<button type="button" className="float-end btn px-0 fw-normal text-success" role="button" onClick={() => setForget(!forget)}>Ingat kata sandi?</button>
										</div>
									</form>
								)}
							</div>
						</div>
					</div>
				</section>
			}
		</Fragment>
	);
}