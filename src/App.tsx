import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AOS from 'aos'
import Landing from 'pages/landing'
import Notes from 'pages/notes'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

const Private = (): JSX.Element => {
  const { user } = useSelector((state: RootState) => state.auth)
  if (!user)
    return <Navigate to="/" state={{ from: window.location.pathname }} />
  return <Notes />
}

function App() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
      offset: 10,
      once: true
    })
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="notes" element={<Private />} />
    </Routes>
  )
}

export default App
