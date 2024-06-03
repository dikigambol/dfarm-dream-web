import { useEffect } from 'react'
import { Cages_model } from '../../../service/cages_model'
import Dashboard from '../../../components/dashboard'
import DataTables from '../../../components/table'

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
    { name: 'Cage Name', selector: row => row.name },
    { name: 'Block', selector: row => row.block },
    { name: <span dangerouslySetInnerHTML={{__html: 'Area M <sup>2</sup>'}} />, selector: row => row.area },
    { name: 'Volume', selector: row => row.volume },
  ];
  const element = (
    <div className="dashboard">
      <div className="row">
        <h1 className="heading-1 mb-4 fw-bolder">Manage Cages</h1>
      </div>

      <div className="row justify-content-between">
        <div className="col-md-4">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Find cages" />
          </div>
        </div>

        <div className="col-md-2">
          <div className="mb-3 d-flex justify-content-end">
            <button className="btn btn-primary">Create&nbsp;Cage</button>
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

  return <Dashboard content={element} active="dataCages" />
}

export default DataCages