import React, { useContext} from "react"
import * as S from "./styles"
import { filmesContext } from "../../contexts/filmesContex"
import { Link } from "react-router-dom"

const Header = () => {
  const {setSearch} = useContext(filmesContext)

  return (
      <S.Header>
        <div className="logo">
          <Link to="/">
          <span>
            Ava<p>Land</p>
          </span>
          </Link>
          <S.Navegacao>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <li>Movies</li>
              <li>Shows</li>
            </ul>
          </S.Navegacao>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            onChange={({target})=> setSearch(target.value)}
          />
        </div>
      </S.Header>
  )
}
export default Header
