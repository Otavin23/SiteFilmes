import React, { useContext} from "react"
import { css } from "@emotion/react"
import { Link} from "react-router-dom"
import * as S from "./style"
import { filmesContext } from "../../contexts/filmesContex"



const Filmes = () => {
  const {filmes,search,setFilmeSelecionado} = useContext(filmesContext)


  function setFilmes(filme){
    setFilmeSelecionado(filme)

  }

  return (
      <S.SecaoFilme>
      <S.Container>
         {filmes.filter((el)=> {
            if (search === ""){
                return el
            }else if(el.title.toLowerCase().includes(search.toLowerCase())){
                return el
            }
        }).filter((el) => {
            if (el.backdrop_path === null) {
              return ""
            } else {
              return el
            } 
          })
          .map((el, index) => (
            <Link to="information" onClick={()=> setFilmes(el)}>
            <div className="card" key={index}>
              <img src={"https://image.tmdb.org/t/p/w500/"+el.poster_path} />
              <div className="card-title">
                <h3>{el.title}</h3>
              </div>
              <div>
                <p>{el.release_date}</p>
              </div>
            </div>
            </Link>
          ))}
      </S.Container>
    </S.SecaoFilme>
    
  )
}
export default Filmes
