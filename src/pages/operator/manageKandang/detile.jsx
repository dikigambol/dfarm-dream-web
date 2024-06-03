import { useEffect } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Cost_model } from '../../../service/cost_model'
import Home from '../../../components/home'
import DataTables from '../../../components/table'


const CageDetails = () => {

  const { get_all, users } = Cost_model()

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
    { name: 'Transaction', selector: row => row.fee },
    { name: 'Tanggal', selector: row => row.date },
    { name: 'Amount', selector: row => row.amount },
    { name: 'Status', selector: row => row.status, cell: row => <div dangerouslySetInnerHTML={{ __html: row.status }} /> },
  ];
  const element = (
    <div className="dashboard">
      <div className="row">
        <h1 className="heading-1 mb-4 fw-bolder">Cage details</h1>
      </div>

      <div className="row mb-4">
        <div className="d-inline-flex">
          <button className="tap tap-primary rounded-pill mx-2 fs-6 fw-semibold active">Keuangan</button>
          <button className="tap tap-primary rounded-pill mx-2 fs-6 fw-semibold">SHM</button>
        </div>
      </div>

      <div className="row justify-content-between">
        <div className="col-md-4">
          <div className="mb-3 d-flex align-items-center">
            <input type="text" className="form-control" placeholder="look for transactions" />
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
                      <input type="text" className="form-control" placeholder="Start date" />
                    </div>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="End date" />
                    </div>
                    <div className="mb-3 d-flex">
                      <button className="btn btn-primary ms-auto">Apply</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-3 d-flex justify-content-end">
            <button className="btn btn-primary">Create Cage</button>
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
            edit: { status: true, callback: editData },
            delete: { status: true, callback: deleteData },
          }}
        />
      </div>

    </div>

  )

  return <Home content={element} active="manageCages" />
}

export default CageDetails