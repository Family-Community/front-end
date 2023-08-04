import styled from "styled-components";
import logo from "../../../assets/images/logo.png";
export const HeaderBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50px;
    p{  
        width: 70px;
        height: 40px;
        line-height: 30px;
        text-align: center;
        margin: 0;
        background-image: url(${logo});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
`