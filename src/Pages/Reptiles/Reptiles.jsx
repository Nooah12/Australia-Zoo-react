import { reptiles } from '../../Data/animals'
import WelcomeReptiles from '../../components/WelcomeReptiles/WelcomeReptiles'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useState } from 'react'
import Details from '../../components/Details/Details'

const Reptiles = () => {
  const [selectedAnimal, setselectedAnimal] = useState(null);

  return (
    <section>
      <Sidebar animals={reptiles} update={setselectedAnimal} currentAnimal={selectedAnimal} />
      {!selectedAnimal && <WelcomeReptiles />}
      {selectedAnimal && <Details currentAnimal={selectedAnimal} />}
    </section>
  )
}

export default Reptiles