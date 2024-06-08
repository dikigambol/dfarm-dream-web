/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { Cost_model } from '../../../service/cost_model'
import Home from '../../../components/home'
import CardInners from '../../../components/card-inners'


const inverstorCages = () => {
  const { get_all, users } = Cost_model()
  useEffect(() => {
    get_all()
  }, [])
  const element = (
    <div className="dashboard">
      <h3 className="mb-4 fw-bolder">
        Kandang Saya
      </h3>
      <div className="col-md-12">
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Cari kandang..." />
        </div>
      </div>
      <div className="row row-gap-4">
        <div className="col-lg-4 col-sm-6 col-12">
          <CardInners image="card-farm1.png" name="Ayam Brahma" volume="243" area="354" options={{ moveIt: true, href: '/report' }} />
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <CardInners image="card-farm2.png" name="Angsa Ternak" volume="543" area="434" options={{ moveIt: true, href: '/report' }} />
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <CardInners image="card-farm3.png" name="Ayam Sussex" volume="234" area="543" options={{ moveIt: true, href: '/report' }} />
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <CardInners image="card-farm4.png" name="Kalkun Belanda" volume="654" area="132" options={{ moveIt: true, href: '/report' }} />
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <CardInners image="card-farm5.png" name="Kuda Lipizzan" volume="534" area="254" options={{ moveIt: true, href: '/report' }} />
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <CardInners image="card-farm6.png" name="Kalkun Bourbon Red" volume="234" area="857" options={{ moveIt: true, href: '/report' }} />
        </div>
      </div>

    </div>

  )

  return <Home content={element} active="investorCages" />
}

export default inverstorCages