import { useEffect } from 'react'
import { Cost_model } from '../../../service/cost_model'
import Home from '../../../components/home'
import DataTables from '../../../components/table'

const ManageInvestor = () => {

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
        <h1 className="heading-1 mb-4 fw-bolder">Investors</h1>
      </div>

      <div className="row mb-4">
        <div className="d-inline-flex">
          <button className="tap tap-primary rounded-pill mx-2 fs-6 fw-semibold active">Keuangan</button>
          <button className="tap tap-primary rounded-pill mx-2 fs-6 fw-semibold">SHM</button>
        </div>
      </div>

      <div className="row justify-content-between">
        <div className="col-md-4">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="look for transactions" />
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-3 d-flex justify-content-end">
            <button className="btn btn-primary">Create Cost</button>
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

  return <Home content={element} active="investor" />

}

export default ManageInvestor