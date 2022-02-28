import styled from "styled-components";

export const SecaoFilme = styled.section` 
    background: #0e0e0e;
    display: flex;
    justify-content: center;
    align-items: center;
`  
export const Container = styled.div`
    max-width: 1440px;
    margin: auto;
    max-height:300rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    .card{
        max-width: 200px;
        height: 450px;
        border-radius: 0.2rem;
        margin-right: 4rem;
        transition: all 0.4s ease;
        cursor: pointer;
        &:hover{
            transform: scale(1.1);
            transition: all 0.3s ease-in-out;
        }
        img{
            width: 250px;
            height: 350px;
            @media (max-width: 314px){
                width: 200px;
                height: auto;
            }
            @media (max-width: 695px){
                width: 150px;
                height: auto;
            }
        .card-title{
            margin-top: 0.8rem;
            h3{
                font-size: 16px;
                max-width: 400px;
                color: #e7e7e7;

                font-family: Arial, Helvetica, sans-serif;
                margin-bottom: 0.5rem;
            }
        }
        .card-information{
            display: flex;
            list-style: none;
            gap: 1rem;
        }
        p{
            color: #cacaca;
        }
    }
}

` 
