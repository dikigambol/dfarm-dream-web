import { useEffect } from 'react'
import { Cost_model } from '../../../service/cost_model'
import Dashboard from '../../../components/dashboard'
import DataTables from '../../../components/table'

const DataCost = () => {

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
    { name: 'Fee Name', selector: row => row.fee },
    { name: 'status', selector: row => row.status, cell: row => <div dangerouslySetInnerHTML={{ __html: row.status }} /> },
  ];
  const element = (
    <div className="dashboard">
      <div className="row">
        <h1 className="heading-1 mb-4 fw-bolder">Manage Cost Components</h1>
      </div>

      <div className="row justify-content-between">
        <div className="col-md-4">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Look for cost" />
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

  return <Dashboard content={element} active="dataCost" />

}

export default DataCost