import styled from "styled-components"

export const Main = styled.main`
  background-repeat: no-repeat;
  background-image: linear-gradient(to right, #0e0e0e 40%, transparent),
    url("https://p4.wallpaperbetter.com/wallpaper/830/662/333/5c1c9db4b02cc-wallpaper-preview.jpg");
  background-size: cover;
  max-width: 1440px;
  margin: auto;
  height: 450px;
  display: flex;
  align-items: center;
`
export const LoaderContainer = styled.div` 
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
` 
export const Container = styled.div`
  width: 30%;
  margin-left: 5rem;
  display: flex;
  align-items: center;
  .information {
    display: grid;
    gap: 2rem;
    h2 {
      color: white;
      font-size: 50px;
    }
    .information-description {
      p {
        color: #cac9c9;
        opacity: 0.5;
      }
    }
    .information-button {
      button {
        margin-right: 1.5rem;
        width: 170px;
        height: 50px;
        border: none;
        background-color: #59558b;
        color: white;
        font-size: 18px;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          transform: scale(1.1);
          transition: all 0.5s ease-in-out;
        }
      }
    }
  }
  .information-type {
    display: flex;
    list-style: none;
    gap: 1rem;
    color: #e2e2e2;
    font-weight: 400px;
    li {
      border-bottom: 5px solid red;
      border-radius: 6px;
    }
  }
`
