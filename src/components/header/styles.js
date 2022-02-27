import styled from "styled-components";


export const Header = styled.header`
    position: sticky;
    top: 0px;
    left: 1px;
    max-width: 1440px;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background-color: #000000; 
    z-index: 9999;
    .logo{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 30%;
        span{
            font-weight: 400;
            color: red;
            display: flex;
            font-size: 20px;
            p{
                color: #dbdbdb;
                font-weight: 700;
                margin-left: 0.5rem;
            }
        }
    }
    .search{
        max-width: 40%;
        input{
            width: 400px;
            height: 2.5rem;
            padding-left: 1rem;
            background: #313131;
            outline: none;
            border: none;
            color: #ffffff;
            font-weight: 400;
            &::placeholder{
                color: #c4c4c4;
                
            }
        }
    }

` 
export const Navegacao =  styled.nav`
    ul{
      display: flex; 
      list-style: none;
      li{
          color: #dadada;
          padding: 1rem;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 15px;

          cursor:pointer;
    }
    }
`
