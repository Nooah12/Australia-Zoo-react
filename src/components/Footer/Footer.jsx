import styles from './Footer.module.css'

const Footer = () => {
  let currentYear = new Date().getFullYear();
  let name = "Noah Gordon";
  return (
    <footer className={styles.footer}>
        <p>Created by: {name} &copy; {currentYear}</p>
    </footer>
  )
}



export default Footer