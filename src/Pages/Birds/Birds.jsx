import { birds } from '../../Data/animals'
import WelcomeBirds from '../../components/WelcomeBirds/WelcomeBirds'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useState } from 'react'
import Details from '../../components/Details/Details'

const Birds = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  return (
    <section>
      <Sidebar animals={birds} update={setSelectedAnimal} currentAnimal={selectedAnimal} />
      {!selectedAnimal && <WelcomeBirds />}
      {selectedAnimal && <Details currentAnimal={selectedAnimal} />}
    </section>
  )
}

export default Birds