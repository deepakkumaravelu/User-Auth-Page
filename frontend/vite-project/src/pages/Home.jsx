import React from 'react'
import { Container,Button } from 'react-bootstrap'
import '../styles/Home.css'
const Home = () => {
  return (
    <Container>
    <h1>Welcome to our website</h1>
    <p>We are here to serve you!</p>
    <div className="d-grid gap-2">
      <Button variant="secondary" size="lg">
        Get started
      </Button>
    </div>
    </Container>
  )
}

export default Home