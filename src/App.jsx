import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './components/NavigationBar'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Stack } from 'react-bootstrap'
import Temblores from './components/Temblores'
import UserForm from './components/UserForm'
import ParentComponent from './components/ParentChildExample/ParentComponent'
import CardExample from './components/CardExample/CardExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavigationBar />
      <Container style={{ padding: 20 }}>
        {/* <Temblores /> */}
        {/* <UserForm /> */}
        {/* <ParentComponent /> */}
        <Stack direction='horizontal' gap={2}>
          <CardExample ShowButton='false' ShowDescription='true' Description="Some quick example text to build on the card title and make up the
            bulk of the card's content." ShowTitle='true' Title='Card Example!' />
          <CardExample ShowButton='true' ShowDescription='false' Description="Some quick example text to build on the card title and make up the
            bulk of the card's content." ShowTitle='true' Title='Card Example!' />
        </Stack>
      </Container>

    </>
  )
}

export default App
