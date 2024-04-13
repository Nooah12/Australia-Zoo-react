import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Layout from './Pages/Layout/Layout'
import Birds from './Pages/Birds/Birds'
import Mammals from './Pages/Mammals/Mammals'
import Reptiles from './Pages/Reptiles/Reptiles'

function App() {

  return (
    <>
     <Routes>
      <Route element={<Layout title="The Australian ZoO" />}>
        <Route path='/' element={<Home />} />
        <Route path='birds' element={<Birds title="Birds" />} />
        <Route path='mammals' element={<Mammals title="Mammals" />} />
        <Route path='reptiles' element={<Reptiles title="Reptiles" />} />
      </Route>
     </Routes>
    </>
  )
}

export default App