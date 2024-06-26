import styles from './Welcome.module.css'

const Welcome = () => {
  return (
        <div className={styles.textbox}>
          <h2>Welcome to the Australian Zoo</h2>
          <p>Welcome to our zoo, where the wonders of the natural world come alive! Immerse yourself in the beauty and diversity of our animal kingdom, featuring captivating mammals, enchanting birds, and fascinating reptiles.</p>
          <p>Embark on a journey through our carefully curated exhibits, each offering a glimpse into the unique habitats and behaviors of our resident creatures. From the towering majesty of elephants to the graceful flight of eagles, every visit promises new discoveries and unforgettable encounters.</p>
          <p>Whether you're a nature enthusiast, a curious explorer, or a family seeking adventure, our zoo offers something for everyone. Join us in celebrating the rich tapestry of life on Earth and discover the magic of the animal kingdom, right here in our sanctuary of wonder and awe.</p>
        </div>
  )
}

export default Welcome