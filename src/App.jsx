import { Route, Routes } from 'react-router-dom'
import AppHome from './page/AppHome'

const App = () => {
  return (
    <div>
     <Routes>
  <Route path="/" element={<AppHome />} />
</Routes>
  </div>
  )
}

export default App







