import React from "react"
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return(
  <AuthProvider>
    <Container className="d-flex align-items-center justify-content-center" style={{ minheight: "100vh"}}>
      <div className="w-100" style={{ mxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<Login/>} />
              <Route path="/home" element={<Dashboard/>} />
              <Route path="/signup" element={<Signup/>} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  </AuthProvider>
  )
}

export default App;
