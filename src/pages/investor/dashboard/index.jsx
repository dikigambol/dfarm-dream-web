import { Icon } from '@iconify/react/dist/iconify.js'
import ChartBar from '../../../components/chart'
import Investor from '../../../components/investor'

const Homes = () => {
	const dataDummy = {
		label: ['April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September'],
		dataset: [
			{ nama: 'Pengeluaran', amount: [10, 12, 13, 14, 15, 18], color: '#ffcc4a' },
			{ nama: 'Pemasukan', amount: [13, 15, 15, 16, 17, 20], color: '#3D8160' },
		]
	}
	const element = (
		<div className="dashboard">
			<h3 className="mb-4 fw-bolder">
				Informasi Peternakan
			</h3>
			<div className="col-lg-12 card-thumbnail mb-4">
				<div className="row">
					<div className="col-lg-4 pe-lg-0 mb-lg-0 mb-3">
						<div className="d-flex align-items-center">
							<div className="icon">
								<Icon icon="ph:barn-bold" className="fs-4" />
							</div>
							<div className="content">
								<h6 className="sub">Kandang</h6>
								<h3 className="amout">100</h3>
							</div>
						</div>
					</div>
					<div className="col-lg-4 p-lg-0 mb-lg-0 mb-3">
						<div className="d-flex align-items-center">
							<div className="icon">
								<Icon icon="flowbite:chart-line-up-outline" className="fs-4" />
							</div>
							<div className="content">
								<h6 className="sub">Pemasukan</h6>
								<h3 className="amout">100.000.000</h3>
							</div>
						</div>
					</div>
					<div className="col-lg-4 ps-lg-0 mb-lg-0">
						<div className="d-flex align-items-center">
							<div className="icon">
								<Icon icon="flowbite:chart-line-down-outline" className="fs-4 text-danger" />
							</div>
							<div className="content">
								<h6 className="sub">Pengeluaran</h6>
								<h3 className="amout">50.000.000</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h5 className="mb-3 text-bold">
				Grafik Pertumbuhan
			</h5>
			<div className="col-lg-12 card-thumbnail">
				<ChartBar data={dataDummy} />
			</div>
		</div>
	)
	return <Investor content={element} active="investor" />
}

export default Homes;