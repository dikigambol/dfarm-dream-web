import { useEffect, useRef, useState } from 'react'
import { Cages_model } from '../../../service/cages_model'
import Dashboard from '../../../components/dashboard'
import DataTables from '../../../components/table'
import { Link } from 'react-router-dom'
import { useKandang } from '../../../service/kandang'
import { Icon } from '@iconify/react/dist/iconify.js'


const initialState = {
  kandang_id: "",
  kandang_noreg: "",
  kandang_nama: "",
  kandang_blok_kavling: "",
  kandang_luas_tanah: "",
  kandang_luas_bangunan: "",
  kandang_isi: "",
  kandang_alamat:"",
  kandang_keterangan:""
}

const DataCages = () => {

  const { get_all, users } = Cages_model()
  const { getKandang, addKandang, editKandang, deleteKandang, listKandang, loading } = useKandang()
  const [form, setForm] = useState(initialState)
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
      kandang_id: data.kandang_id,
      kandang_noreg: data.kandang_noreg,
      kandang_nama: data.kandang_nama,
      kandang_blok_kavling: data.kandang_blok_kavling,
      kandang_luas_tanah: data.kandang_luas_tanah,
      kandang_luas_bangunan: data.kandang_luas_bangunan,
      kandang_isi: data.kandang_isi,
      kandang_alamat: data.kandang_alamat,
      kandang_keterangan: data.kandang_keterangan
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.id == '') {
      addKandang(form, modal)
    } else {
      editKandang(form, modal)
    }
  }


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
            <button type="button" className="btn btn-primary py-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Tambah</button>
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
                <h5 className="modal-title" id="exampleModalLabel">Kandang</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className='row'>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="noreg" className="form-label"><Icon icon="mdi:barcode-scan" className="display-7" />&nbsp;&nbsp;Nomor Registrai</label>
                      <input type='text' className='form-control' name='kandang_noreg' value={form.kandang_noreg} onChange={handlerInput} placeholder='KDG/123' required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="namakandang" className="form-label"><Icon icon="mdi:alphabetical" className="display-7" />&nbsp;&nbsp;Nama Kandang</label>
                      <input type='text' className='form-control' name='kandang_nama' value={form.kandang_nama}  onChange={handlerInput} placeholder='Sanjaya' required />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="blokkavling" className="form-label"><Icon icon="mdi:pound-box" className="display-7" />&nbsp;&nbsp;Blok Kavling</label>
                      <input type="text" className='form-control' name="kandang_blok_kavling" value={form.kandang_blok_kavling}  onChange={handlerInput} placeholder='A12' required/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="luastanag" className="form-label"><Icon icon="mdi:google-maps" className="display-7" />&nbsp;&nbsp;Luas Tanah  m<sup>2</sup></label>
                      <input type="text" className='form-control' name="kandang_luas_tanah" value={form.kandang_luas_tanah}  onChange={handlerInput} placeholder='300' required/>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="luasbangunan" className="form-label"><Icon icon="mdi:wall" className="display-7" />&nbsp;&nbsp;Luas Bangunan</label>
                      <input type="text" className='form-control' name="kandang_luas_bangunan" value={form.kandang_luas_bangunan}  onChange={handlerInput} placeholder='200' required/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="kandangisi" className="form-label"><Icon icon="mdi:database" className="display-7" />&nbsp;&nbsp;Kapasitas Isi</label>
                      <input type="text" className='form-control' name="kandang_isi" value={form.kandang_isi}  onChange={handlerInput} placeholder='1000' required/>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="alamat" className="form-label"><Icon icon="mdi:google-maps" className="display-7" />&nbsp;&nbsp;Alamat</label>
                      <input type="text" className='form-control' name="kandang_alamat" value={form.kandang_alamat}  onChange={handlerInput} placeholder='Jl. Panjaitan...'required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="keterangan" className="form-label"><Icon icon="mdi:note" className="display-7" />&nbsp;&nbsp;Keterangan</label>
                      <input type="text" className='form-control' name="kandang_keterangan" value={form.kandang_keterangan}  onChange={handlerInput} placeholder='Keterangan' required />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success py-4">Simpan</button>
              </div>
            </form>
          </div>  
        </div>
      </div>

    </div>

  )

  return <Dashboard content={element} active="dataCages" />
}

export default DataCages