/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Users_model } from '../../../service/users_model'
import Dashboard from '../../../components/dashboard'
import DataTables from '../../../components/table'

const DataUser = () => {

  const { get_all, users } = Users_model()
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
    { name: 'No', selector: row => row.no, width: "90px" },
    { name: 'Nama', selector: row => row.name },
    { name: 'Role', selector: row => row.role },
    { name: 'Username', selector: row => row.username },
    { name: 'Default Pass', selector: row => row.pass },
    { name: 'Status', selector: row => row.status, cell: row => <div dangerouslySetInnerHTML={{ __html: row.status }} /> },
  ];
  const element = (
    <div className="dashboard">
      <h3 className="mb-4 fw-bolder">
				Kelola Pengguna
			</h3>
      <div className="row justify-content-between">
        <div className="col-md-4">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Cari pengguna..." />
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-3 d-flex justify-content-end">
            <Link to="/form-users/add" className="btn btn-primary">Tambah User</Link>
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
						edit: {status: true, callback: editData},
						delete: {status: true, callback: deleteData},
					}}
				/>
			</div>

    </div>


  )

  return <Dashboard content={element} active="dataUser" />
}

export default DataUser