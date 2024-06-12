import { Icon } from '@iconify/react/dist/iconify.js'
import ChartBar from '../../../components/chart'
import Operator from '../../../components/operator'

const Homes = () => {
	const dataDummy = {
		label: ['April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September'],
		dataset: [
			{ nama: 'Investor', amount: [10, 12, 13, 14, 15, 18], color: '#FFCC4A' },
			{ nama: 'Kandang', amount: [13, 15, 15, 16, 17, 20], color: '#3D8160' },
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
								<Icon icon="mdi:users" className="fs-4" />
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
								<Icon icon="ph:barn-bold" className="fs-4" />
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
								<Icon icon="healthicons:animal-chicken" className="fs-4" />
							</div>
							<div className="content">
								<h6 className="sub">Total Ayam</h6>
								<h3 className="amout">500</h3>
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
	return <Operator content={element} active="home" />
}

export default Homes;