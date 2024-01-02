// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import routes from "./routes/routes"
import { useRoutes } from "react-router-dom"

function App() {
  const router = useRoutes (routes())
  return <div className="app-container">{router}</div>
}

export default App
