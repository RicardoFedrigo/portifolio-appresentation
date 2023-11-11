import "./index.css"

import Footer from "../../components/footer"
import Header from "../../components/header"
import { Provider } from "react-redux"
import store from "../../shared/redux/store/store"

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <div id='body'>
          <Header />
          <Footer />
        </div>
      </Provider>
    </>
  )
}
