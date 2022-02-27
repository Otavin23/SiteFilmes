import React from "react"
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Home from "./page/Home/index"
import InformationMovie from "./page/InformationMovie"
import { FilmesProvider } from "./contexts/filmesContex"
import { GlobalStyle } from "./styles/global"

const urls = [
  "https://api.themoviedb.org/3/movie/popular?api_key=5f6d789565d22c8473d0ac958158e5e1",
]
const App = () => {

  return (
    <FilmesProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="information" element={<InformationMovie />} />
        </Routes>
      </BrowserRouter>

    </FilmesProvider>



  )
}
export default App
