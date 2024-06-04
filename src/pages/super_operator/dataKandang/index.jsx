import { useEffect } from 'react'
import { Cages_model } from '../../../service/cages_model'
import Dashboard from '../../../components/dashboard'
import DataTables from '../../../components/table'
import { Link } from 'react-router-dom'

const DataCages = () => {

  const { get_all, users } = Cages_model()

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
    { name: 'Nama Kandang', selector: row => row.name },
    { name: 'Blok', selector: row => row.block },
    { name: <span dangerouslySetInnerHTML={{ __html: 'Luas m<sup>2</sup>' }} />, selector: row => row.area },
    { name: 'Isi', selector: row => row.volume },
  ];
  const element = (
    <div className="dashboard">
      <h3 className="mb-4 fw-bolder">
        Kelola Kandang
      </h3>
      <div className="row justify-content-between">
        <div className="col-md-4">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Cari kandang..." />
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

  return <Dashboard content={element} active="dataCages" />
}

export default DataCages