import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import profile from '../../assets/images/profile.svg';


export const MainHeaderBox = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;

    p {  
        width: 70px;
        height: 40px;
        line-height: 30px;
        text-align: left;
        margin: 0 ;
        padding-right: 50;
        background-image: url(${logo});
        background-position: left;
        background-repeat: no-repeat;
        background-size: contain;
        display: inline-block;
    }

    input {
        
        text-align: center;
    }

    img {
        width: 30px;
        height: 30px;
        margin : 0;
        float: right;
    }
`
// export const LogoContainer = styled.div`
//     display: flex;
//     margin-right: 0;
//     padding-right: 0;
//     flex-direction: column;
//     justify-content: left;
//     align-items: left;
//     height: 50px;
//     p:nth-child(1){  
//         width: 70px;
//         height: 40px;
//         line-height: 30px;
//         text-align: center;
//         margin: 0;
//         background-image: url(${logo});
//         background-position: center;
//         background-repeat: no-repeat;
//         background-size: contain;
//     }
//     p:nth-child(1) input {
//         align-items: center;
//     }

// `;


export const MainBox = styled.div`
    border: 1px solid #ccc;
    margin: 10px;
    padding: 10px;
    position: relative;

    img:nth-child(1) {
        width: 25px;
        height: 25px;
        margin: 0px;
        text-align: left;
        padding-top:3px;
    }

    p:nth-child(2){
        margin: 0;
        font-size: 110%;
        line-height: 2.5;
        display: inline-block;
        width: 20%;
        text-align: left;
        padding-left: 5px;
        padding-bottom: 3px;
    }

    p:nth-child(3){
        margin: 0;
        font-size: 80%;
        line-height: 2.5;
        display: inline-block;
        width: 8%;
        text-align: center;
        float: right;
    }

    p:nth-child(4){
        margin: 0;
        font-size: 80%;
        line-height: 2.5;
        display: inline-block;
        width: 8%;
        text-align: center;
        float: right;
    }

    img:nth-child(5) {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }

    p:nth-child(6){
        margin: 0;
        font-size: 110%;
        line-height: 2.5;
        display: block;
        width: 80%;
        text-align: left;
    }

    p:nth-child(7){
        margin: 0;
        font-size: 90%;
        line-height: 2.5;
        display: block;
        width: 80%;
        text-align: left;
    }

    p:nth-child(8){
        margin: 0;
        font-size: 130%;
        line-height: 2.5;
        display: inline-block;
        width: 14%;
        text-align: center;
        padding-left: 10px;
    }

    p:nth-child(9){
        margin: 0;
        font-size: 130%;
        line-height: 2.5;
        display: inline-block;
        width: 14%;
        text-align: center;
        padding-left: 10px;
    }

    p:nth-child(10){
        margin: 0;
        font-size: 130%;
        line-height: 2.5;
        display: inline-block;
        width: 14%;
        text-align: center;
        padding-left: 10px;
    }

    p:nth-child(11){
        margin: 0;
        font-size: 130%;
        line-height: 2.5;
        display: inline-block;
        width: 14%;
        text-align: center;
        padding-left: 10px;
    }

    p:nth-child(12){
        margin: 0;
        font-size: 130%;
        line-height: 2.5;
        display: inline-block;
        width: 14%;
        text-align: center;
        padding-left: 10px;
    }

    p:nth-child(13){
        margin: 0;
        font-size: 130%;
        line-height: 2.5;
        display: inline-block;
        width: 14%;
        text-align: center;
        padding-left: 10px;
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    padding-top: 50%;
    position: relative;
    overflow: hidden;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        appearance: none;
        width: 30%;
        line-height: 2;
        font-size: 100%;
        border: none;
        background-color: #D5C2EE;
        color: #8572EE;
        opacity: 0.7;
        cursor: pointer;
        border-radius: 40px;
        margin-top: 20px;
        transition: all 0.3s;
        box-sizing: border-box;
        justify-items: center;
        align-items: center;
    }
`
