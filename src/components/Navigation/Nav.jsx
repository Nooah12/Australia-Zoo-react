import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="birds">Birds</NavLink>
      <NavLink to="mammals">Mammals</NavLink>
      <NavLink to="reptiles">Reptiles</NavLink>
    </nav>
  )
}

export default Nav