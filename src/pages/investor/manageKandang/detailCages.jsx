import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Cost_model } from '../../../service/cost_model'
import Investor from '../../../components/investor'
import DataTables from '../../../components/table'
import { Link } from 'react-router-dom'


const DetailCages = () => {
    const [collapse, setCollapse] = useState(false)
    const { get_all, users } = Cost_model()

    useEffect(() => {
        get_all()
    }, [])

    const columns = [
        { name: 'Tanggal', selector: row => row.date },
        { name: 'Transaksi', selector: row => row.fee },
        { name: 'Jumlah', selector: row => row.amount },
    ];
    const element = (
        <div className="dashboard">
            <div className="row mb-3 p-0">
                <div className="col-lg-12 mb-3">
                    <div className="card border-0 bg-transparant">
                        <div className="card-body text-light lh-1 px-4 rounded-4 bg-ternak">
                            <p className="d-block my-2 fs-6 mb-3"><Icon icon="mdi:barn" className="text-icon" />&nbsp;&nbsp;kandang</p>
                            <p className="d-block my-2 fs-4 fw-semibold">Kandang Sukses Megantara</p>
                            <p className="d-block my-2 fs-8 mt-3">KD002</p>
                        </div>
                        <div className="col-lg-12 card-thumbnail mt-3">
                            <div className="row">
                                <div className="col-lg-4 pe-lg-0 mb-lg-0 mb-3">
                                    <div className="d-flex align-items-center">
                                        <div className="icon bg-warning">
                                            <Icon icon="openmoji:chicken" className="fs-1" />
                                        </div>
                                        <div className="content">
                                            <h6 className="sub">Populasi</h6>
                                            <h3 className="amout">100</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 p-lg-0 mb-lg-0 mb-3">
                                    <div className="d-flex align-items-center">
                                        <div className="icon bg-success">
                                            <Icon icon="fa6-solid:percent" className="fs-4 text-white" />
                                        </div>
                                        <div className="content">
                                            <h6 className="sub">Ayam Hidup</h6>
                                            <h3 className="amout">50%</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 ps-lg-0 mb-lg-0">
                                    <div className="d-flex align-items-center">
                                        <div className="icon bg-danger">
                                            <Icon icon="fa6-solid:percent" className="fs-4 text-white" />
                                        </div>
                                        <div className="content">
                                            <h6 className="sub">Ayam Mati</h6>
                                            <h3 className="amout">50%</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <button className="btn-info-ternak fw-semibold d-block"
                                data-bs-toggle="collapse" href="#info-ternak" role="button" aria-expanded="false" aria-controls="collapseExample"
                                onClick={() => setCollapse(!collapse)}
                            >
                                informasi kandang
                                <br />
                                <Icon icon={`eva:arrow-${collapse ? 'up' : 'down'}-fill`} style={{ marginTop: "-15px" }} />
                            </button>
                            <div className="collapse mt-3" id="info-ternak">
                                <ul className="list-group list-group-horizontal mb-2 mb-md-0">
                                    <li className="list-group-item border-0 bg-transparant title">Lokasi</li>
                                    <li className="list-group-item border-0 bg-transparant separat">:</li>
                                    <li className="list-group-item border-0 bg-transparant content">Jl. Pejuang No.45, Kulur, Kec. Majalengka, Kabupaten Majalengka, Jawa Barat 45411</li>
                                </ul>
                                <ul className="list-group list-group-horizontal mb-2 mb-md-0">
                                    <li className="list-group-item border-0 bg-transparant title">Luas</li>
                                    <li className="list-group-item border-0 bg-transparant separat">:</li>
                                    <li className="list-group-item border-0 bg-transparant content">500 M <sup>2</sup></li>
                                </ul>
                                <ul className="list-group list-group-horizontal mb-2 mb-md-0">
                                    <li className="list-group-item border-0 bg-transparant title">Anak Kandang</li>
                                    <li className="list-group-item border-0 bg-transparant separat">:</li>
                                    <li className="list-group-item border-0 bg-transparant content">Khusni Ridho</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="d-inline-flex overflow-x-auto pb-3 custom-scroll gap-3">
                    <button className="tap tap-primary rounded-pill fs-6 fw-semibold active"><Icon icon="solar:hand-money-outline" className='text-icon' />&nbsp;&nbsp;Keuangan</button>
                    <button className="tap tap-primary rounded-pill fs-6 fw-semibold"><Icon icon="fluent-emoji-high-contrast:chicken" className='text-icon' />&nbsp;&nbsp;Data Populasi</button>
                    <button className="tap tap-primary rounded-pill fs-6 fw-semibold"><Icon icon="mingcute:document-line" className='text-icon' />&nbsp;&nbsp;SHM</button>
                </div>
            </div>

            <div className="row align-items-center mb-4">
                <div className="col-md-12">
                    <div className="mb-3 d-flex align-items-center">
                        <input type="text" className="form-control" placeholder="Cari biaya..." />
                        <button className="bg-transparant ms-2 fs-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"><Icon icon="ion:filter" /></button>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasRightLabel">Filters</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <form action="">
                                    <div className="mb-4">
                                        <h6 className="mb-3">Date Time</h6>
                                        <div className="mb-3">
                                            <input type="date" className="form-control" placeholder="Start date" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="date" className="form-control" placeholder="End date" />
                                        </div>
                                        <div className="mb-3 d-flex">
                                            <Link to="" className="btn btn-primary ms-auto">Apply</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="d-block badge badge-total text-start d-flex justify-content-between">
                        <div className="content">
                            <small className="text-dark d-block py-2 fs-6">Total</small>
                            <small className="text-success d-block py-2 fs-5 fw-semibold">Rp. 90.000.000</small>
                        </div>
                        <div className="icon bg-transparant text-success bg-dark m-0">
                            <Icon icon="solar:wallet-money-bold-duotone" className="display-6" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <DataTables
                    columns={columns}
                    datas={users}
                    options={{
                        highlightOnHover: true,
                        striped: true,
                        pagination: true,
                    }}
                />
            </div>

        </div>

    )

    return <Investor content={element} active="kandang" />
}

export default DetailCages