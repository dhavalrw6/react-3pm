
// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddRecord from "./components/AddRecord"
import ViewRecord from "./components/ViewRecord"
import EditRacord from "./components/EditRacord"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddRecord />} />
          <Route path="/view" element={<ViewRecord />} />
          <Route path="/edit/:id" element={<EditRacord />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
