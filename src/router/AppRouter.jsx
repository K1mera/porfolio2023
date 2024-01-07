import { Route, Routes } from "react-router-dom"
import { NavBar, Footer } from "../UI/"
import { HomePage } from "../pages/HomePage"



export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        
        <Route path="/" element={ <HomePage /> }>

        </Route>
      </Routes>
      <Footer />
    </>
  )
}
