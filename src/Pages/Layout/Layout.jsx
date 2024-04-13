import { Outlet } from 'react-router-dom'
import Nav from '../../components/Navigation/Nav'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Layout = ({title}) => {
  return (
    <>
    <Header pageTitle={title} />
    <Nav />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout