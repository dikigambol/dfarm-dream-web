import { useState } from "react";

const initLogin = {
	username: '',
	password: '',
	remember: '',
}

export default function Auth() {

	const [login, setLogin] = useState(initLogin)

	const handleLogin = (e) => {
		e.preventDefault()

		if (login.username == '') {
			document.getElementById('username').focus();
		} else if (login.password == '') {
			document.getElementById('password').focus();
		} else {
			window.location.href = '/dashboard'
		}
	}

	
	return (
		<section className="login" id="login">
			<div className="container-fluid">
				<div className="row ">
					
                    <div className="col-lg-6 d-lg-block d-none login-avatar p-0">
						<img src="login-avatar.png" alt="Login Page" className="img-fluid" />
					</div>

                    <div className="col-lg-6 login-form">
                        <form onSubmit={handleLogin}>
							<div className="logo">
								<img src="logo_light.png" alt="Farm Dream" className="img-fluid img-logo" />
								<h1 className="display-5 fw-semibold">Login</h1>
							</div>

                            <div className="mb-4">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" onChange={(e) => setLogin({...login, username: e.target.value})} />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" onChange={(e) => setLogin({...login, password: e.target.value})} />
                            </div>

                            <div className="mb-5 form-check">
                                <input type="checkbox" className="form-check-input" id="re_remember" onChange={(e) => setLogin({...login, remember: e.target.checked})}/>
                                <label className="form-check-label" htmlFor="re_remember">Ingat Saya</label>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">Masuk</button>
                        </form>
                    </div>
				</div>
			</div>
		</section>
	);
}