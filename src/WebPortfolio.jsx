import {HomePage} from "./pages/HomePage"
import {AppRouter} from "./router/AppRouter"
import './translations/i18n.config'



export const WebPortfolio = () => {
  return (
    <>
      <AppRouter>
        <HomePage/>
      </AppRouter>
    </>
  )
}
