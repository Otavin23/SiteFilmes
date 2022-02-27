import React, { useContext, useEffect} from 'react'
import * as S from "./style"
import { filmesContext } from '../../contexts/filmesContex'
import { Link } from "react-router-dom"
import Header from '../../components/header'


const InformationMovie = ()=>{
    const {filmeSelecionado} = useContext(filmesContext)
    const {poster_path,backdrop_path,release_date,title} = filmeSelecionado
    const imagePrincipal = "https://image.tmdb.org/t/p/w500/"+poster_path
    const imageFundo = "https://image.tmdb.org/t/p/w500/"+backdrop_path

    if (!filmeSelecionado.title){
        return (
            <Link to="/" end>
                <button>Volte</button>
            </Link>
        )
    }
    return (
        <>
        <Header/>
        <S.Main image={imageFundo}>
            <S.Container>
                <div className="image">
                    <img src={imagePrincipal} />
                </div>
                <div className="information">
                    <h3>{title}</h3>
                    <div className="timelive">
                        <span>Data lançamento: <p>{release_date}</p></span>
                    </div>
                    <div className="link-button">
                        <button>Play now</button>
                        <button>Watch Trailer</button>
                    </div>
                </div>
            </S.Container>
        </S.Main>
        </>

    )
}
export default InformationMovie