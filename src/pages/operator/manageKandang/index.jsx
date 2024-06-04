import { useEffect } from 'react'
import { Cost_model } from '../../../service/cost_model'
import Home from '../../../components/home'
import CardInners from '../../../components/card-inners'


const ManageKandang = () => {

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
        <h1 className="heading-1 mb-4 fw-bolder">Cages</h1>
      </div>

      <div className="row justify-content-between">
        <div className="col-md-4">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Find a cage" />
          </div>
        </div>
      </div>

      <div className="row row-gap-4">
        <div className="col-lg-4 col-sm-6 col-12">
          <CardInners image="card-farm1.png" name="Ayam Brahma" volume="243" area="354" options={{moveIt: true,  href: '/detile-cages'}}/>
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <CardInners image="card-farm2.png" name="Angsa Ternak" volume="543" area="434" options={{moveIt: true,  href: '/detile-cages'}}/>
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <CardInners image="card-farm3.png" name="Ayam Sussex" volume="234" area="543" options={{moveIt: true,  href: '/detile-cages'}}/>
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <CardInners image="card-farm4.png" name="Kalkun Belanda" volume="654" area="132" options={{moveIt: true,  href: '/detile-cages'}}/>
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <CardInners image="card-farm5.png" name="Kuda Lipizzan" volume="534" area="254" options={{moveIt: true,  href: '/detile-cages'}}/>
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <CardInners image="card-farm6.png" name="Kalkun Bourbon Red" volume="234" area="857" options={{moveIt: true,  href: '/detile-cages'}}/>
        </div>
      </div>

    </div>

  )

  return <Home content={element} active="manageCages" />
}

export default ManageKandang