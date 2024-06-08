/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { Fragment, useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Dashboard from '../../../components/dashboard'
import { Link, useParams, useLocation } from 'react-router-dom';
import { useUser } from '../../../service/users'
import { validateFile } from '../../../utils/validasiFile'
import swal from 'sweetalert';


const initialState = {
    user_id: "",
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

const FormUsers = () => {

    const { userId } = useParams();

    const { addUser, editUser, getDetailUser, loading, deleteUser } = useUser()
    const [form, setForm] = useState(initialState)

    const handlerInput = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            const resFile = validateFile(files[0])

            
            if (!resFile) {
                swal({
                    title: "gagal upload",
                    text: "maksimal ukuran file 2 MB",
                    icon: "warning",
                    timer: 3000,
                    buttons: false,
                })
                e.target.value = '';
                setForm({
                    ...form,
                    user_foto: '',
                });
            } else {
                setForm({
                    ...form,
                    user_foto: files[0],
                });
            }
        }
        // const newValue = type === 'file' ? files[0] : value;
        // setForm({
        //     ...form,
        //     [name]: newValue,
        // });
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const newForm = {
            ...form,
        }
        const formData = new FormData();
        for (const key in newForm) {
            formData.append(key, newForm[key]);
        }
        if (form.id == '') {
            addUser(formData)
        } else {
            editUser(formData)
        }
    }

    useEffect(() => {
        if (userId != "add") {
            getDetailUser(userId, "form-users")
        }
    }, [getDetailUser, userId])


    const element = (
        <div className="dashboard">
            <h3 className="mb-4 fw-bolder">
                Form Pengguna
            </h3>
            <div className="col-lg-12 ">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="photo" className="form-label"><Icon icon="mdi:account-box" className="display-7" />&nbsp;&nbsp;Foto  Profil</label>
                                <input type='file' id="foto" className='form-control' value={form.user_foto} onChange={handlerInput} name="user_foto" accept='image/jpg, image/jpeg, image/png' required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="noidentitas" className="form-label"><Icon icon="mdi:account-card-details" className="display-7" />&nbsp;&nbsp;Status</label>
                                <select className='form-control' name="user_status" value={form.user_status} onChange={handlerInput}>
                                    <option value="" hidden>Status</option>
                                    <option value="1">Aktif</option>
                                    <option value="2">Non Aktif</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="noidentitas" className="form-label"><Icon icon="mdi:account-card-details" className="display-7" />&nbsp;&nbsp;Nomor Identitas</label>
                                <input type='text' className='form-control' value={form.nomor_identitas} onChange={handlerInput} name='nomor_identitas' placeholder='350xxxxx' required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="namalengkap" className="form-label"><Icon icon="mdi:sort-alphabetical" className="display-7" />&nbsp;&nbsp;Nama Lengkap</label>
                                <input type='text' className='form-control' value={form.user_nama} onChange={handlerInput} name='user_nama' placeholder='Zain Bagus...' required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="tempatlahir" className="form-label"><Icon icon="mdi:google-maps" className="display-7" />&nbsp;&nbsp;Tempat Lahir</label>
                                <input type='text' className='form-control' value={form.user_tempatlahir} onChange={handlerInput} name='user_tempatlahir' placeholder='Malang' required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="tanggallahir" className="form-label"><Icon icon="mdi:calendar" className="display-7" />&nbsp;&nbsp;Tanggal Lahir</label>
                                <input type='date' className='form-control' value={form.user_tgllahir} onChange={handlerInput} name='user_tgllahir' required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="kelamin" className="form-label"><Icon icon="mdi:gender-male-female" className="display-7" />&nbsp;&nbsp;Jenis Kelamin</label>
                                <select id="kelamin" name="user_gender" value={form.user_gender} onChange={handlerInput} className="form-select form-control" required>
                                    <option value="" hidden>pilih</option>
                                    <option value="P">Pria</option>
                                    <option value="W">Wanita</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label"><Icon icon="mdi:email" className="display-7" />&nbsp;&nbsp;Email</label>
                                <input type='email' className='form-control' value={form.user_email} onChange={handlerInput} name='user_email' placeholder='zain@gmail.com' required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="telepon" className="form-label"><Icon icon="mdi:whatsapp" className="display-7" />&nbsp;&nbsp;Nomor Telepon</label>
                                <input type='number' className='form-control' value={form.user_telpon} onChange={handlerInput} name='user_telpon' placeholder='081xxx' required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="npwp" className="form-label"><Icon icon="mdi:bank" className="display-7" />&nbsp;&nbsp;NPWP</label>
                                <input type='number' className='form-control' value={form.user_npwp} onChange={handlerInput} name='user_npwp' placeholder='2189xxx' required />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <label htmlFor="alamat" className="form-label"><Icon icon="mdi:google-maps" className="display-7" />&nbsp;&nbsp;Alamat</label>
                                <textarea className='form-control' value={form.user_alamat} onChange={handlerInput} name='user_alamat' placeholder='Jl.Soekarno-Hatta...' required />
                            </div>
                        </div>
                        <div className="col-md-12 mt-4">
                            <p align="right">
                                <button type='submit' className='btn btn-success' disabled={loading}>{loading ? "loading..." : "Simpan"}</button>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

    return <Dashboard content={element} active="dataUser" />
}

export default FormUsers;