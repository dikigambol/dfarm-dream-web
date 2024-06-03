import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { useLogin } from '../../../services/auth'
import LoaderPages from '../../../components/LoaderPages';

export default function DashboardOperator() {

  const { verifyAuth, isAuth } = useLogin()

  useEffect(() => {
    verifyAuth()
  }, [])

  return (
    <Fragment>
      {isAuth ?
        <>
          <h1>Selamat Datang, Operator</h1>
        </>
        : <LoaderPages />
      }
    </Fragment>
  )
}
