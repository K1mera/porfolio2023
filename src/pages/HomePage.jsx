import {Experience} from "../components"
import {Projects} from "../components/Projects"
import {Welcome} from "../components/Welcome"


export const HomePage = () => {
  return (
    <main className="layout-primary">
        <Welcome />
        <Projects />
        <Experience />
    </main>
  )
}
