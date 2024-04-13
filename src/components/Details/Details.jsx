import styles from '../../styles/Animal.module.css'

const Details = ({currentAnimal}) => {
    return (
        <div className={styles.animals}>
          <p><img className={styles.image} src={currentAnimal.image} alt={currentAnimal.name} /></p>
          <p><span><b>Name:</b> </span>{currentAnimal.name}</p>
          <p><span><b>Lifespan:</b> </span>{currentAnimal.lifespan}</p>
          <p><span><b>Group:</b> </span>{currentAnimal.group}</p>
          <p><span><b>Food:</b> </span>{currentAnimal.food}</p>
          <p><span><b>Description:</b> </span>{currentAnimal.description}</p>
          <p><span><b>Height:</b> </span>{currentAnimal.height}</p>
          <p><span><b>Weight:</b> </span>{currentAnimal.weight}</p>
          <p><span><b>Found:</b> </span>{currentAnimal.found}</p>
        </div>
  )
}

export default Details