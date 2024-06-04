import { Fragment, useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Dashboard from '../../../components/dashboard'
import { Link, useParams, useLocation } from 'react-router-dom';
import { useUser } from '../../../service/users'
import { validateFile } from '../../../utils/validasiFile'


const initialState = {
    user_id: "",
    nomor_identitas: "",
    user_nama: "",
    user_tempatlahir: "",
    user_tgllahir: "",
    user_gender: "",
    user_email: "",
    user_telpon: "",
    user_npwp: "",
    user_alamat: ""
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
                    photo: '',
                });
            } else {
                setForm({
                    ...form,
                    photo: files[0],
                });
            }
        }
        const newValue = type === 'file' ? files[0] : value;
        setForm({
            ...form,
            [name]: newValue,
        });
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
    }, [userId])


    const element = (
        <Fragment>
            <div className="dashboard">
                <div className="row">
                    <h1 className="heading-1 mb-4 fw-bolder">
                        Add Investor.
                    </h1>
                </div>
                <div className="row justify-content-between">
                    <div className="col-lg-12 ">
                        <form onSubmit={handleSubmit} className="py-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="photo" className="form-label"><Icon icon="mdi:account-box" className="display-7" />Foto  Profil</label>
                                        <input type='file' id="foto" className='form-control' onChange={handlerInput} name="photo" placeholder='350xxxxx' required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="noidentitas" className="form-label"><Icon icon="mdi:account-card-details" className="display-7" /> Nomor Identitas</label>
                                        <input type='text' className='form-control' onChange={handlerInput} name='nomor_identitas' placeholder='350xxxxx' required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="namalengkap" className="form-label"><Icon icon="mdi:sort-alphabetical" className="display-7" />Nama Lengkap</label>
                                        <input type='text' className='form-control' onChange={handlerInput} name='user_nama' placeholder='Zain Bagus...' required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="tempatlahir" className="form-label"><Icon icon="mdi:google-maps" className="display-7" />Tempat Lahir</label>
                                        <input type='text' className='form-control' onChange={handlerInput} name='user_tempatlahir' placeholder='Malang' required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="tanggallahir" className="form-label"><Icon icon="mdi:calendar" className="display-7" />Tanggal Lahir</label>
                                        <input type='date' className='form-control' onChange={handlerInput} name='user_tgllahir' required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="kelamin" className="form-label"><Icon icon="mdi:gender-male-female" className="display-7" />Jenis Kelamin</label>
                                        <select id="kelamin" name="user_gender" onChange={handlerInput} className="form-select form-control" required>
                                            <option value="" hidden>pilih</option>
                                            <option value="P">Pria</option>
                                            <option value="W">Wanita</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label"><Icon icon="mdi:email" className="display-7" />Email</label>
                                        <input type='email' className='form-control' onChange={handlerInput} name='user_email' placeholder='zain@gmail.com' required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="telepon" className="form-label"><Icon icon="mdi:whatsapp" className="display-7" />Nomor Telepon</label>
                                        <input type='number' className='form-control' onChange={handlerInput} name='user_telpon' placeholder='081xxx' required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="npwp" className="form-label"><Icon icon="mdi:bank" className="display-7" />NPWP</label>
                                        <input type='number' className='form-control' onChange={handlerInput} name='user_npwp' placeholder='2189xxx' required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label htmlFor="alamat" className="form-label"><Icon icon="mdi:google-maps" className="display-7" />Alamat</label>
                                        <textarea className='form-control' onChange={handlerInput} name='user_alamat' placeholder='Jl.Soekarno-Hatta...' required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <p align="right">
                                        <div className="mb-0">
                                            <button type='submit' className='btn btn-success' disabled={loading}>{loading ? "loading..." : "Simpan"}</button>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )

    return <Dashboard content={element} active="dashboard" />
}

export default FormUsers;