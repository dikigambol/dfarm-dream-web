import { useEffect } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Dashboard_model } from '../../../service/dashboard_model'
import Dashboard from '../../../components/dashboard'
import DataTables from '../../../components/table'

const Dashboards = () => {

	const { get_all, dashboard } = Dashboard_model()

	const editData = (id) => {
		console.log(id);
	}
	
	const deleteData = (id) => {
		console.log(id);
	}


	useEffect(() => {
		get_all()
	}, [])

	const columns = [
		{ name: 'Tanggal', selector: row => row.date },
		{ name: 'Komponen Biaya', selector: row => row.name },
		{ name: 'Tipe Biaya', selector: row => row.office, cell: row => <div dangerouslySetInnerHTML={{ __html: row.office }} /> },
		{ name: 'Nominal', selector: row => row.salary },
	];

	const element = (
		<div className="dashboard">

			<div className="row">
				<h1 className="heading-1 mb-4 fw-bolder">
					Informasi Peternakan
				</h1>
			</div>

			<div className="row px-2">
				<div className="col-lg-4 pe-lg-0">
					<div className="card p-2 border-0">
						<div className="card-body d-flex align-items-center">
							<div className="icon">
								<Icon icon="mdi:users" className="display-6" />
							</div>
							<div className="content">
								<h6 className="sub">Investor</h6>
								<h1 className="amout">100</h1>
							</div>
						</div>
					</div>
				</div>

				<div className="col-lg-4 p-lg-0">
					<div className="card p-2 border-0">
						<div className="card-body d-flex align-items-center">
							<div className="icon">
								<Icon icon="fe:cage" className="display-6" />
							</div>
							<div className="content">
								<h6 className="sub">Kandang</h6>
								<h1 className="amout">100</h1>
							</div>
						</div>
					</div>
				</div>

				<div className="col-lg-4 ps-lg-0">
					<div className="card p-2 border-0">
						<div className="card-body d-flex align-items-center">
							<div className="icon">
								<Icon icon="healthicons:animal-chicken" className="display-6" />
							</div>
							<div className="content">
								<h6 className="sub">Ayam</h6>
								<h1 className="amout">500</h1>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row justify-content-between">
				<div className="col-lg-5">
					<h1 className="heading-1 pb-lg-5 pt-5 fw-bolder">
						Laporan Keuangan
					</h1>
				</div>
				<div className="col-lg-6 ">
					<form action="" className="py-4">
						<div className="row">
							<div className="col-md-6">
								<div className="mb-3">
									<label htmlFor="year" className="form-label">Tahun</label>
									<select id="year" className="form-select form-control" defaultValue="2024">
										<option value="2025">2025</option>
										<option value="2024">2024</option>
										<option value="2023">2023</option>
										<option value="2022">2022</option>
										<option value="2021">2021</option>
									</select>
								</div>
							</div>

							<div className="col-md-6">
								<div className="mb-3">
									<label htmlFor="cage" className="form-label">Kandang</label>
									<select id="cage" className="form-select form-control" defaultValue="Kandang 1">
										<option value="Kandang 1">Kandang 1</option>
										<option value="Kandang 2">Kandang 2</option>
										<option value="Kandang 3">Kandang 3</option>
										<option value="Kandang 4">Kandang 4</option>
										<option value="Kandang 5">Kandang 5</option>
									</select>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>

			<div className="row">
				<DataTables
					columns={columns}
					datas={dashboard}
					options={{
						highlightOnHover: true,
						striped: true,
						pagination: true,
						edit: {status: true, callback: editData},
						delete: {status: true, callback: deleteData},
					}}
				/>
			</div>
		</div>

	)

	return <Dashboard content={element} active="dashboard"/>
}

export default Dashboards;