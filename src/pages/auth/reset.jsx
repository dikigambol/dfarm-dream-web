import { useState } from 'react'
import { useLogin } from '../../service/auth'
import swal from 'sweetalert';

export default function Reset() {

    const { resetPassword, loading } = useLogin()

    const [formReset, setFormReset] = useState({
        password: '',
        newPassword: '',
    })

    const HandleReset = (e) => {
        e.preventDefault()
        // periksa token OTP valit atau tidak
        if (false) {
            swal({
                title: "Url tidak valid!",
                text: "menutup jendela...",
                icon: "warning",
                timer: 3000,
                buttons: false,
            })

            return
        }

        // periksa password dan password konfirmasi tidak sama
        if (formReset.password !== formReset.newPassword) {
            swal({
                title: "Sandi dan konfirmasi sandi berbeda!",
                text: "menutup jendela...",
                icon: "warning",
                timer: 3000,
                buttons: false,
            })

            return
        }

        resetPassword(formReset)
    }

    const handleInputForget = (e) => {
        setFormReset((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="container-fluid bg-light login">
            <div className="row height-full justify-content-center align-items-center">
                <div className="col-lg-6 login-form forget">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <form onSubmit={HandleReset} method="POST">
                                <div className="logo mb-4">
                                    <img src="logo-light.svg" alt="Farm Dream" className="img-fluid img-logo" />
                                    <h2 className="fw-semibold text-success">Buat Sandi</h2>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Sandi Baru</label>
                                    <input type="text"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={formReset.password}
                                        onChange={handleInputForget}
                                        required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="newPassword" className="form-label">Konfirmasi Sandi</label>
                                    <input type="text"
                                        className="form-control"
                                        id="newPassword"
                                        name="newPassword"
                                        value={formReset.newPassword}
                                        onChange={handleInputForget}
                                        required />
                                </div>

                                <button type="submit" className="btn btn-success w-100 mb-5" disabled={loading}>{loading ? "loading..." : "Ubah Sandi"}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}