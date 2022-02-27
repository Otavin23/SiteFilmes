import React, { useContext } from "react"
import * as S from "./style"
import Filmes from "../../components/filmes"
import { filmesContext } from "../../contexts/filmesContex"
import Header from "../../components/header"
import { ClipLoader } from "react-spinners"
import { css } from "@emotion/react"
import { LoaderContainer } from "./style"

const stiliz = css`
  width: 250px;
  height: 250px;
  margin: auto;
  border: 1px soli red;
`
const Home = () => {
  const { filmes } = useContext(filmesContext)
  return (
    <>
      {filmes.length === 0 ? (
        <LoaderContainer>
          <ClipLoader color="white" active={true} css={stiliz} size="150" />
        </LoaderContainer>
      ) : (
        <>
          <Header />
          <S.Main>
            <S.Container>
              <div className="information">
                <h2>Capitão Cueca</h2>
                <ul className="information-type">
                  <li>2017</li>
                  <li>+12</li>
                  <li>1h 29m</li>
                </ul>
                <div className="information-description">
                  <p>
                    Baseada nos quadrinhos de Dav Pilkey, a história acompanha
                    George e Harold, dois melhores-amigos do ensino fundamental,
                    famosos por suas pegadinhas no Diretor Krupp, um homem
                    mal-humorado que persegue a...
                  </p>
                </div>
                <div className="information-button">
                  <button>Viewer Now</button>
                  <button>+ My list</button>
                </div>
              </div>
            </S.Container>
          </S.Main>
          <Filmes />
        </>
      )}
    </>
  )
}
export default Home
