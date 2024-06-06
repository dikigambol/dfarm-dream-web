import { useUser } from "../../../service/users"
import Investor from "../../../components/investor"
import { useState } from "react"
import { useEffect } from "react"

const initialProfile = {
    level_id: "",
    nomor_identitas: "",
    username: "",
    password_default: "",
    user_nama: "",
    user_status: "",
    user_foto: "",
    user_tempatlahir: "",
    user_tgllahir: "",
    user_gender: "",
    user_email: "",
    user_telpon: "",
    user_alamat: "",
    user_npwp: ""
}

const initialSecurity = {
    user_password: "",
    user_password_confirm: ""
}

export default function ProfileInvestor() {

    const [profile, setProfile] = useState(initialProfile)
    const [security, setSecurity] = useState(initialSecurity)
    const [preview, setPreview] = useState('/user-3.jpg')
    const [formShow, setFormShow] = useState({
        profile: true,
        security: false,
    })
    
    const { editUser, getDetailUser, loading } = useUser()

    const handlerInputProfile = (e) => {
        e.preventDefault()
        setProfile((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    
    const handlerInputSecurity = (e) => {
        e.preventDefault()
        setSecurity((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handlePhoto = (e) => {
        const file = e.target.files[0]
        
        setProfile((prev) => ({
            ...prev,
            ['user_foto']: file
        }))

        setPreview(URL.createObjectURL(file))
    }


    const handleProfile = () => {
        editUser(profile)
    }

    const handleSecurity = () => {
        editUser(security)
    }

    useEffect(() => {
        getDetailUser()
    }, [])


    const element = (
        <div className="container-lg">
            <div className="row">
                <h3 className="mb-4 fw-bolder">Setting Account & Profile</h3>
            </div>

            <div className="row justify-content-center row-gap-4">
                <div className="col-md-4 col-lg-3">
                    <ul className="list-group shadow-sm sticky-top rounded-4 bg-white p-2 py-3">
                        <li className="list-group-item border-0 py-2 bg-transparant" role="button" onClick={() => setFormShow({ profile: true, security: false })}>Pengaturan Profil</li>
                        <li className="list-group-item border-0 py-2 bg-transparant" role="button" onClick={() => setFormShow({ profile: false, security: true })}>Keamanan</li>
                    </ul>
                </div>

                <div className="col-md-8 col-lg-7">
                    <div className="card border-0 shadow-sm rounded-4">
                        <div className="row card-body">
                            {formShow.profile ? (
                                <form onSubmit={handleProfile}>
                                    <div className="row py-4">
                                        <div className="col-12 mb-4 d-inline-flex align-items-center gap-4">
                                            <img src={preview} className="avatar-profile" />
                                            <div className="input-file">
                                                <label htmlFor="photo" className="btn btn-primary">Unggah Foto</label>
                                                <input type="file" id="photo" className="d-none" onChange={handlePhoto} required />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="fs-4 my-4 fw-medium">Informasi Umum</div>
                                        </div>
                                        <div className="col-12 mb-4">
                                            <label htmlFor="namalengkap" className="form-label">Nama Lengkap</label>
                                            <input type="text" className="form-control" onChange={handlerInputProfile} name="user_nama" placeholder="Khusni Ridho" required />
                                        </div>

                                        <div className="col-lg-6 mb-4">
                                            <label htmlFor="tempatlahir" className="form-label">Tempat Lahir</label>
                                            <input type="text" className="form-control" onChange={handlerInputProfile} name="user_tempatlahir" placeholder="Malang" required />
                                        </div>

                                        <div className="col-lg-6 mb-4">
                                            <label htmlFor="tanggallahir" className="form-label">Tanggal Lahir</label>
                                            <input type="date" className="form-control" onChange={handlerInputProfile} name="user_tgllahir" required />
                                        </div>

                                        <div className="col-12 mb-4">
                                            <label htmlFor="kelamin" className="form-label">Jenis Kelamin</label>
                                            <select id="kelamin" name="user_gender" onChange={handlerInputProfile} className="form-select form-control" required>
                                                <option value="" hidden>pilih</option>
                                                <option value="P">Pria</option>
                                                <option value="W">Wanita</option>
                                            </select>
                                        </div>

                                        <div className="col-12">
                                            <div className="fs-4 my-4 fw-medium">Informasi Resmi</div>
                                        </div>
                                        <div className="col-12 mb-4">
                                            <label htmlFor="noidentitas" className="form-label">Nomor Identitas</label>
                                            <input type="text" className="form-control" onChange={handlerInputProfile} name="nomor_identitas" placeholder="350xxxxx" required />
                                        </div>

                                        <div className="col-12 mb-4">
                                            <label htmlFor="npwp" className="form-label">NPWP</label>
                                            <input type="number" className="form-control" onChange={handlerInputProfile} name="user_npwp" placeholder="2189xxx" required />
                                        </div>

                                        <div className="col-md-12">
                                            <label htmlFor="alamat" className="form-label">Alamat</label>
                                            <textarea className="form-control" onChange={handlerInputProfile} name="user_alamat" placeholder="Jl.Soekarno-Hatta..." required />
                                        </div>


                                        <div className="col-12">
                                            <div className="fs-4 my-4 fw-medium">Informasi Kontak</div>
                                        </div>
                                        <div className="col-12 mb-4">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" onChange={handlerInputProfile} name="user_email" placeholder="zain@gmail.com" required />
                                        </div>
                                        <div className="col-12 mb-4">
                                            <label htmlFor="telepon" className="form-label">Nomor Telepon</label>
                                            <input type="number" className="form-control" onChange={handlerInputProfile} name="user_telpon" placeholder="081xxx" required />
                                        </div>


                                        <div className="col-md-12 mt-2 d-inline-flex">
                                            <button type="submit" className="btn btn-success ms-auto" disabled={loading}>{loading ? "loading..." : "Simpan"}</button>
                                        </div>
                                    </div>
                                </form>
                            ) : ''}

                            {formShow.security ? (
                                <form onSubmit={handleSecurity}>
                                    <div className="row py-4">
                                        
                                        <div className="col-12 mb-4">
                                            <label htmlFor="sandiLama" className="form-label">Sandi Lama</label>
                                            <input type="password" className="form-control" onChange={handlerInputSecurity} name="sandi_lama" id="sandiLama" required />
                                        </div>
                                        
                                        <div className="col-12 mb-4">
                                            <label htmlFor="sandiBaru" className="form-label">Sandi Baru</label>
                                            <input type="password" className="form-control" onChange={handlerInputSecurity} name="sandi_baru" id="sandiBaru" required />
                                        </div>
                                        
                                        <div className="col-12 mb-4">
                                            <label htmlFor="konfirmasiBaru" className="form-label">Konfirmasi Sandi</label>
                                            <input type="password" className="form-control" onChange={handlerInputSecurity} name="konfirmasi_sandi" id="konfirmasiBaru" required />
                                        </div>

                                        <div className="col-md-12 mt-2 d-inline-flex">
                                            <button type="submit" className="btn btn-success ms-auto" disabled={loading}>{loading ? "loading..." : "Simpan"}</button>
                                        </div>
                                    </div>
                                </form>
                            ) : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return <Investor content={element} active="" />
}






