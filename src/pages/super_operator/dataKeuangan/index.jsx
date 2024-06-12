import { useEffect, useRef, useState } from 'react'
import { Cost_model } from '../../../service/cost_model'
import Dashboard from '../../../components/dashboard'
import DataTables from '../../../components/table'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useKomponenBiaya } from '../../../service/komponenBiaya'
import swal from 'sweetalert'

const initialState = {
  komponen_id: "",
  nama_biaya: "",
  status_baiaya: "",
  keterangan: ""
}

const DataCost = () => {

  const { get_all, users } = Cost_model()
  const { getKomponenBiaya, addKomponenBiaya, editKomponenBiaya, deleteKomponenBiaya, listKomponenBiaya, loading } = useKomponenBiaya()
  const [form, setForm] = useState(initialState);
  const modal = useRef(null)


  function handlerInput(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handlerEdit = (data) => {
    setForm((prev) => ({
      ...prev,
      komponen_id: data.komponen_id,
      nama_biaya: data.nama_biaya,
      status_biaya: data.status_baiaya,
      keterangan: data.keterangan
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (form.id == '') {
      addKomponenBiaya(form, modal);
    } else {
      editKomponenBiaya(form, modal);
    }
  }
  

  const editData = (id) => {
    editKomponenBiaya(id);
  }

  const deleteData = (id) => {
    deleteKomponenBiaya(id);
  }

  useEffect(() => {
    get_all()
  }, [])

  const columns = [
    { name: 'No', selector: row => row.no, width: "80px" },
    { name: 'Komponen Biaya', selector: row => row.fee },
    { name: 'Status', selector: row => row.status, cell: row => <div dangerouslySetInnerHTML={{ __html: row.status }} /> },
  ];
  const element = (
    <div className="dashboard">
      <h3 className="mb-4 fw-bolder">
        Kelola Komponen Biaya
      </h3>
      <div className="row justify-content-between">
        <div className="col-md-4">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Cari biaya..." />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3 d-flex justify-content-end">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Tambah</button>
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

      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Komponen Biaya</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={modal}/>
              </div>
              <div className="modal-body">
                <div className='row'>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="noidentitas" className="form-label"><Icon icon="mdi:alphabetical" className="display-7" />&nbsp;&nbsp;Nama Komponen Biaya</label>
                      <input type='text' className='form-control' name='nama_biaya' value={form.nama_biaya} onChange={handlerInput} placeholder='Ayam Afkir' required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="status" className="form-label"><Icon icon="mdi:account-card-details" className="display-7" />&nbsp;&nbsp;Status</label>
                      <select className='form-control' name="status" value={form.status_baiaya} onChange={handlerInput}>
                        <option value="" hidden>Status</option >
                        <option value="1">Aktif</option>
                        <option value="2">Non Aktif</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="keterangan" className="form-label"><Icon icon="mdi:wall" className="display-7" />&nbsp;&nbsp;Keterangan</label>
                      <textarea className='form-control' name="keterangan" value={form.keterangan} onChange={handlerInput} placeholder='keterangan'></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

  return <Dashboard content={element} active="dataCost" />

}

export default DataCost