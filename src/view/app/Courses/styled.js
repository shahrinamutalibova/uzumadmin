import  styled from "styled-components";

export const CoursePage = styled.div`
  overflow: scroll;
  height: 100%;
 
  .actions{
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
      .search{
        width: 200px;
        background-color: #364153;
        border: none;
        color: white;
        &::placeholder{
          color: #cccccc;
        }
      }
      .addBtn{
        background-color: #605CFF;
        color: white;
        border: none;
      }
  }
  
  .courseImg{
      display: flex;
      align-items: center;
      gap: 0 10px;
      img{
        width: 50px;
        border-radius: 5px;
        object-fit: cover;
      }
  }
 
`

