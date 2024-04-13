import { mammals } from '../../Data/animals'
import WelcomeMammals from '../../components/WelcomeMammals/WelcomeMammals'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useState } from 'react'
import Details from '../../components/Details/Details'

const Mammals = () => {
  const [selectedAnimal, setselectedAnimal] = useState(null);

  return (
    <section>
      <Sidebar animals={mammals} update={setselectedAnimal} currentAnimal={selectedAnimal} />
      {!selectedAnimal && <WelcomeMammals />}
      {selectedAnimal && <Details currentAnimal={selectedAnimal} />}
    </section>
  )
}

export default Mammals