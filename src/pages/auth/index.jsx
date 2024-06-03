import React, { Fragment, useEffect, useState } from 'react'
// import { useLogin } from '../../service/auth'
// import { getTokenFromCookie } from '../../utils/setToken'

export default function Auth() {

	const [isAuth, setIsAuth] = useState(false)

	// let token = getTokenFromCookie()

	// const { login, loading } = useLogin()

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

	const HandleLogin = (e) => {
		e.preventDefault()
		// login(form)
	}

	// useEffect(() => {
	//     if (token != null) {
	//         setIsAuth(true)
	//         window.location.replace('/dashboard')
	//     }
	// }, [token])

	return (
		<Fragment>
			{/* {isAuth ? null : */}
				<section className="login" id="login">
					<div className="container-fluid">
						<div className="row ">

							<div className="col-lg-6 d-lg-block d-none login-avatar p-0">
								<img src="login-avatar.png" alt="Login Page" className="img-fluid" />
							</div>

							<div className="col-lg-6 login-form">
								<form onSubmit={HandleLogin}>
									<div className="logo">
										<img src="logo_light.png" alt="Farm Dream" className="img-fluid img-logo" />
										<h1 className="display-5 fw-semibold">Login</h1>
									</div>

									<div className="mb-4">
										<label htmlFor="username" className="form-label">Username</label>
										<input type="text"
											className="form-control"
											id="username"
											name="username"
											value={form.username}
											onChange={handleInput} />
									</div>

									<div className="mb-4">
										<label htmlFor="password" className="form-label">Password</label>
										<input type="password"
											className="form-control"
											id="password"
											name="password"
											value={form.password}
											onChange={handleInput}
										/>
									</div>

									{/* <div className="mb-5 form-check">
								<input type="checkbox" className="form-check-input" id="re_remember" onChange={(e) => setLogin({ ...login, remember: e.target.checked })} />
								<label className="form-check-label" htmlFor="re_remember">Ingat Saya</label>
							</div> */}

									<button type="submit" className="btn btn-primary w-100" >  Masuk</button>
								</form>
							</div>
						</div>
					</div>
				</section>
			{/* } */}
		</Fragment>
	);
}