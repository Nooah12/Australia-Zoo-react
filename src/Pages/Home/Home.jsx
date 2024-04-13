import { useState } from 'react'
import styles from '../../styles/Animal.module.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Welcome from '../../components/WelcomeMsg/Welcome'
import { allAnimals } from '../../Data/animals'
import Popup from '../../components/Popup/Popup'

const Home = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const readMore = () => {
    setShowPopup(true);
  } 

  const closePopup = () => {
    setShowPopup(false);
  }

  return (
    <>
    {!showPopup && 
      <section>
        <Sidebar animals={allAnimals} update={setSelectedAnimal} currentAnimal={selectedAnimal} />
        {!selectedAnimal && <Welcome /> }

        {selectedAnimal && (
          <div className={styles.animals}>
            <img src={selectedAnimal.image} alt={selectedAnimal.name} />
            <h3>{selectedAnimal.name}</h3>
            <p><b>Description:</b>{selectedAnimal.description.slice(0, 200)}... <button className={styles.button} onClick={readMore}>Read more</button></p>
            <p><b>Food:</b>{selectedAnimal.food}</p>
            <p><b>Group: </b><a href={`/${selectedAnimal.group.toLowerCase()}`}>{selectedAnimal.group}</a></p>
          </div>
        )}  
      </section>
    }

    {showPopup && <Popup currentAnimal={selectedAnimal} handleClose={closePopup} />}

    </>
  )
}

export default Home

