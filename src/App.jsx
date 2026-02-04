
import './App.css'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './pages/form'
import SurveyResult from './pages/SurveyResult'

function App() {

  return (
   <BrowserRouter>
   <Routes>
     <Route path="/result" element={<SurveyResult />} />
     <Route path="/" element={<Form />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
