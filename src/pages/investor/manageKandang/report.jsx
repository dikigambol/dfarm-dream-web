import { useEffect } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Cost_model } from '../../../service/cost_model'
import Investor from '../../../components/investor'
import DataTables from '../../../components/table'
import { Link } from 'react-router-dom'


const Reports = () => {

    const { get_all, users } = Cost_model()

    useEffect(() => {
        get_all()
    }, [])

    const columns = [
        { name: 'Transaction', selector: row => row.fee },
        { name: 'Tanggal', selector: row => row.date },
        { name: 'Status', selector: row => row.status, cell: row => <div dangerouslySetInnerHTML={{ __html: row.status }} /> },
        { name: 'Amount', selector: row => row.amount },
    ];
    const element = (
        <div className="dashboard">
            <div className="row mb-5">
                <div className="col-lg-7">
                    <div className="card border-0 bg-transparant">
                        <div className="card-body text-light bg-color-primary lh-1 px-4 rounded-4">
                            <span className="d-block my-2 fs-6">Kandang</span>
                            <span className="d-block my-2 fs-4 fw-semibold">Nama Kandang</span>
                        </div>

                        <div className="card-body">
                            <span className="fs-6 fw-semibold color-primary d-block">Detail Kandang</span>

                            <ul className="list-group list-group-horizontal mb-2 mb-md-0">
                                <li className="list-group-item border-0 bg-transparant title">Anak Kandang</li>
                                <li className="list-group-item border-0 bg-transparant separat">:</li>
                                <li className="list-group-item border-0 bg-transparant content">Khusni Ridho</li>
                            </ul>

                            <ul className="list-group list-group-horizontal mb-2 mb-md-0">
                                <li className="list-group-item border-0 bg-transparant title">Kode</li>
                                <li className="list-group-item border-0 bg-transparant separat">:</li>
                                <li className="list-group-item border-0 bg-transparant content">KD002</li>
                            </ul>

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
                        </div>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="card border-0 mb-3">
                        <div className="card-body lh-1 px-4 rounded-4 shadow-sm d-flex">
                            <div className="icon">
                                <Icon icon="healthicons:animal-chicken" className="display-6" />
                            </div>
                            <div className="content">
                                <span className="d-block my-2 fs-6">Populasi Ayam</span>
                                <span className="d-block my-2 fs-5 fw-semibold">800</span>
                            </div>
                        </div>
                    </div>

                    <div className="card border-0 mb-3">
                        <div className="card-body lh-1 px-4 rounded-4 shadow-sm d-flex">
                            <div className="icon text-warning">
                                <Icon icon="heroicons-solid:light-bulb" className="display-6" />
                            </div>
                            <div className="content">
                                <span className="d-block my-2 fs-6">DOC</span>
                                <span className="d-block my-2 fs-5 fw-semibold">400</span>
                            </div>
                        </div>
                    </div>

                    <div className="card border-0 mb-3">
                        <div className="card-body lh-1 px-4 rounded-4 shadow-sm d-flex">
                            <div className="icon text-danger">
                                <Icon icon="material-symbols:light-off" className="display-6" />
                            </div>
                            <div className="content">
                                <span className="d-block my-2 fs-6">Afkir</span>
                                <span className="d-block my-2 fs-5 fw-semibold">100</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="d-inline-flex overflow-auto p-0 pb-3 gx-5 custom-scroll">
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold active">Keuangan</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">SHM</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                    <button className="tap tap-primary rounded-pill me-2 fs-6 fw-semibold">Lainnya</button>
                </div>
            </div>

            <div className="row align-items-center mb-4">
                <div className="col-md-4">
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
                <div className="col-md-4 ">
                    <div className=" d-block badge badge-fail text-start d-flex justify-content-between">
                        <div className="content">
                            <small className="text-dark d-block py-2 fs-6">Total expenses</small>
                            <small className="text-danger d-block py-2 fs-4 fw-semibold">2.740.203.857</small>
                        </div>
                        <div className="icon bg-transparant text-danger bg-dark m-0">
                            <Icon icon="flowbite:chart-line-down-outline" className="display-6" />
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4 ">
                    <div className=" d-block badge badge-success text-start d-flex justify-content-between">
                        <div className="content">
                            <small className="text-dark d-block py-2 fs-6">Total Income</small>
                            <small className="text-success d-block py-2 fs-4 fw-semibold">3.895.634.506</small>
                        </div>
                        <div className="icon bg-transparant text-success bg-dark m-0">
                            <Icon icon="flowbite:chart-line-up-outline" className="display-6" />
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

    return <Investor content={element} active="report" />
}

export default Reports