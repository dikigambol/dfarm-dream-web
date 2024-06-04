import { useEffect } from 'react'
import { Cost_model } from '../../../service/cost_model'
import Dashboard from '../../../components/dashboard'
import DataTables from '../../../components/table'
import { Link } from 'react-router-dom'

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
    { name: 'No', selector: row => row.no, width: "80px" },
    { name: 'Fee Name', selector: row => row.fee },
    { name: 'status', selector: row => row.status, cell: row => <div dangerouslySetInnerHTML={{ __html: row.status }} /> },
  ];
  const element = (
    <div className="dashboard">
      <h3 className="mb-4 fw-bolder">
        Kelola Biaya
      </h3>
      <div className="row justify-content-between">
        <div className="col-md-4">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Cari biaya..." />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3 d-flex justify-content-end">
            <Link to="" className="btn btn-primary">Tambah</Link>
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