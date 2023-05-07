import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './components/NavigationBar'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Temblores from './components/Temblores'
import UserForm from './components/UserForm'
import ParentComponent from './components/ParentChildExample/ParentComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavigationBar />
    <Container>
      {/* <Temblores /> */}
      <UserForm />
      {/* <ParentComponent /> */}
    </Container>
    </>
  )
}

export default App
