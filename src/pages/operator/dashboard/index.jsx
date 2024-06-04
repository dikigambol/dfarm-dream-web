import { useEffect } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Dashboard_model } from '../../../service/dashboard_model'
import Home from '../../../components/home'
import DataTables from '../../../components/table'
import { deleteAllCookies, getTokenFromCookie } from '../../../utils/setToken'
import { useLogin } from '../../../service/auth'

const Homes = () => {

	let token = getTokenFromCookie()
	const { verifyToken, tokenStatus } = useLogin()

	const { get_all, dashboard } = Dashboard_model()

	useEffect(() => {
		async function tokenLoad() {
			await verifyToken(token)
		}
		tokenLoad()
		if (tokenStatus == false) {
			deleteAllCookies()
			window.location.replace('/')
		}
	}, [token, tokenStatus])

	useEffect(() => {
		get_all()
	}, [])

	const columns = [
		{ name: 'No', selector: row => row.no, width: "70px" },
		{ name: 'Tanggal', selector: row => row.date },
		{ name: 'Komponen Biaya', selector: row => row.name },
		{ name: 'Tipe Biaya', selector: row => row.office, cell: row => <div dangerouslySetInnerHTML={{ __html: row.office }} /> },
		{ name: 'Nominal', selector: row => row.salary },
	];

	const element = (
		<div className="dashboard">
			<h3 className="mb-4 fw-bolder">
				Informasi Peternakan
			</h3>
			<div className="col-lg-12 card-thumbnail">
				<div className="row">
					<div className="col-lg-4 pe-lg-0 mb-lg-0 mb-3">
						<div className="d-flex align-items-center">
							<div className="icon">
								<Icon icon="mdi:users" className="display-6" />
							</div>
							<div className="content">
								<h6 className="sub">Investor</h6>
								<h3 className="amout">100</h3>
							</div>
						</div>
					</div>
					<div className="col-lg-4 p-lg-0 mb-lg-0 mb-3">
						<div className="d-flex align-items-center">
							<div className="icon">
								<Icon icon="fe:cage" className="display-6" />
							</div>
							<div className="content">
								<h6 className="sub">Kandang</h6>
								<h3 className="amout">100</h3>
							</div>
						</div>
					</div>
					<div className="col-lg-4 ps-lg-0 mb-lg-0">
						<div className="d-flex align-items-center">
							<div className="icon">
								<Icon icon="healthicons:animal-chicken" className="display-6" />
							</div>
							<div className="content">
								<h6 className="sub">Ayam</h6>
								<h3 className="amout">500</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row mt-4 mb-3">
				<div className="col-lg-6">
					<h3 className="fw-bolder mb-lg-0 mb-3">
						Laporan Keuangan
					</h3>
				</div>
				<div className="col-lg-6">
					<div className="row">
						<div className="col-md-6 m-lg-0 mb-3">
							<div className="mb-0">
								<select id="year" className="form-select form-control" defaultValue="2024">
									<option value="2025">2025</option>
									<option value="2024">2024</option>
									<option value="2023">2023</option>
									<option value="2022">2022</option>
									<option value="2021">2021</option>
								</select>
							</div>
						</div>
						<div className="col-md-6 m-lg-0">
							<div className="mb-0">
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
				</div>
			</div>
			<DataTables
				columns={columns}
				datas={dashboard}
				options={{
					highlightOnHover: true,
					striped: true,
					pagination: true,
				}}
			/>
		</div>
	)

	return <Home content={element} active="home" />
}

export default Homes;