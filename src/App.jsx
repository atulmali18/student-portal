import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Announcement from './components/Announcement'
import StudentCard from './components/StudentCard'
import StudentList from './components/StudentList'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Announcement />
      <StudentList />
      <Footer />
    </>
  )
}

export default App