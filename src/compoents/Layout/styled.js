import styled from "styled-components";
import {Layout} from "antd";

let ContentBg = '#fff';
let DarkBg = '#705fff';
let DarkColor = '#705fff';

export const LayoutPart = styled(Layout)`
    height: 100vh;
    .sider, .menu{
      background-color: ${ContentBg};
      color: ${DarkColor} ;
    }    
    .site-layout, .header{
      background-color: ${DarkBg};
    }
    .content{
      padding: 10px 20px;
      min-height: 280px;
    }
    .logo{
      text-align: center;
      padding: 20px 0;
      img{ width: 40%;}
    }
    .menu{
      height: 75%;
      overflow-y: auto;  
    }
    .collapse{
      width: 100%;
      height: auto;
      position: absolute;
      bottom: 0;
      padding: 10px;
      text-align: center;
      background-color: ${ContentBg};
    }
`
