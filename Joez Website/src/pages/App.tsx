import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import JoezLogo from '../assets/Ngejoez.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import Container from '../components/container.tsx'
import { Button } from "@mui/material";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container >
      <div>
        <header className="header ">
          {/* Header content goes here */}
          <img src={JoezLogo} className="logo" alt="logo" />
          <nav className="flex gap-4 p-4">
            <Button
              variant="outlined"
              // onClick={handleSimulation}
              sx={{
                color: "#4A4743",
                borderColor: "#F8ECDE",
                borderTopColor:"#4A4743", 
                borderBottomColor: "#4A4743", 
                "&:hover": {
                  borderColor: "#F8ECDE",
                  borderTopColor:"#EF4562", 
                  borderBottomColor: "#EF4562", 
                  color: "#EF4562",
                  // backgroundColor: "#00a6fb",
                },
              }}
            >
              Home
            </Button>
            <Button
              variant="outlined"
              // onClick={handleDatabase}
              sx={{
                color: "#f3f3f4",
                borderColor: "#4A4743",
                borderTopColor:"#f3f3f4", 
                borderBottomColor: "#f3f3f4", 
                "&:hover": {
                  borderColor: "#4A4743",
                  borderTopColor:"#EF4562", 
                  borderBottomColor: "#EF4562", 
                  color: "#EF4562",
                  // backgroundColor: "#00a6fb",
                },
              }}
            >
              Products
            </Button>
            <Button
              variant="outlined"
              // onClick={handleSettings}
              sx={{
                color: "#f3f3f4",
                borderColor: "#4A4743",
                borderTopColor:"#f3f3f4", 
                borderBottomColor: "#f3f3f4", 
                "&:hover": {
                  borderColor: "#4A4743",
                  borderTopColor:"#EF4562", 
                  borderBottomColor: "#EF4562", 
                  color: "#EF4562",
                  // backgroundColor: "#00a6fb",
                },
              }}
            >
              About Us
            </Button>
            <Button
              variant="outlined"
              // onClick={handleScoring}
              sx={{
                color: "#f3f3f4",
                borderColor: "#4A4743",
                borderTopColor:"#f3f3f4", 
                borderBottomColor: "#f3f3f4", 
                "&:hover": {
                  borderColor: "#4A4743",
                  borderTopColor:"#EF4562", 
                  borderBottomColor: "#EF4562", 
                  color: "#EF4562",
                  // backgroundColor: "#00a6fb",
                },
              }}
            >
              Order
            </Button>
          </nav>
        </header>
      </div>
      <div>
      <h1>Vite + React</h1></div>
    </Container>
      
    </>
  )
}

export default App
