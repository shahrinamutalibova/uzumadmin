import styled from "styled-components";

export const AuthPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #705fff;
  display: flex;
  align-items: center;
  justify-content: center; 
   
  .card{
    width: 30%;
    height: 60%;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    padding:  20px;
    text-align: center;    
    img{
      width: 150px;
    }
    form{
      width: 80%;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .btn{
      background-color: #705fff;
      border:none;
    }
  }
`