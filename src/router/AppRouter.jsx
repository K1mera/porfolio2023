import { Route, Routes } from "react-router-dom"
import { NavBar } from "../UI/NavBar"
import { HomePage } from "../pages/HomePage"


export const AppRouter = () => {
  return (
    <main>
      <NavBar/>
      <Routes>
        
        <Route path="/" element={ <HomePage />}>

        </Route>
      </Routes>
    </main>
  )
}
