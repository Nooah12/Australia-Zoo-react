import styles from './Header.module.css'

const Header = ({pageTitle}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{pageTitle}</h1>
    </header>
  )
}

export default Header