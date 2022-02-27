import React, { createContext, useEffect, useState } from "react"

export const filmesContext = createContext({})

export function FilmesProvider({children}){
    
    const [filmes,setFilmes] = useState([])
    const [search,setSearch] = useState("")
    const [filmeSelecionado, setFilmeSelecionado] = useState({})


    useEffect(()=> {
    async function request (url){
      const res = await fetch(url)
      const json = await res.json()
      setFilmes(json.results)
    }
    request("https://api.themoviedb.org/3/movie/popular?api_key=5f6d789565d22c8473d0ac958158e5e1")
  }, [])

  const contextValue = {
      filmes,
      setFilmes,
      search,
      setSearch,
      filmeSelecionado,
      setFilmeSelecionado,
  }
    return(
        <filmesContext.Provider value={contextValue}>
            {children}
        </filmesContext.Provider>
    )
}