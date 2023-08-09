import { Link } from 'react-router-dom';
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import profile from '../../assets/images/profile.svg';


export const MainHeaderBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {  
        width: 60px;
        height: 35px;
        line-height: 30px;
        text-align: left;
        margin-left: 15px;
        margin-right: 30px;
        margin-top: 0;
        margin-bottom: 0;
        background-image: url(${logo});
        background-position: left;
        background-repeat: no-repeat;
        background-size: contain;
        display: inline-block;
    }

    input {
        margin-left: 30px;
        width: 100px;
        border:none;
        text-align: center;
    }

    img:nth-child(3){
        margin-left: 0;
        margin-right: 110px;
        width: 13px;
        height: 13px;
    }

    img:nth-child(4) {
        width: 25px;
        height: 25px;
        margin-left: 0;
        margin-right: 15px;
        margin-top: 0;
        margin-bottom: 0;

    }
`

export const ProfileLink = styled(Link)`
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-right: 15px;
`;

export const MainBox = styled.div`
    border: 1px solid #ccc;
    margin: 20px;
    padding: 10px;
    position: relative;

    img:nth-child(1) {
        width: 25px;
        height: 25px;
        text-align: left;
        padding-top:3px;
        margin: 0;
    }

    p:nth-child(2){
        margin: 0;
        font-size: 100%;
        line-height: 2.5;
        display: inline-block;
        width: 20%;
        text-align: left;
        padding-left: 5px;
        padding-bottom: 5px;
        height: 25px;
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
        padding-right: 6px;
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
        padding-top: 10px;
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
        font-size: 110%;
        line-height: 2.5;
        display: inline-block;
        width: 13%;
        text-align: center;
        padding-left: 10px;
    }

    p:nth-child(9){
        margin: 0;
        font-size: 110%;
        line-height: 2.5;
        display: inline-block;
        width: 13%;
        text-align: center;
        padding-left: 10px;
    }

    p:nth-child(10){
        margin: 0;
        font-size: 110%;
        line-height: 2.5;
        display: inline-block;
        width: 13%;
        text-align: center;
        padding-left: 10px;
    }

    p:nth-child(11){
        margin: 0;
        font-size: 110%;
        line-height: 2.5;
        display: inline-block;
        width: 13%;
        text-align: center;
        padding-left: 10px;
    }

    p:nth-child(12){
        margin: 0;
        font-size: 110%;
        line-height: 2.5;
        display: inline-block;
        width: 13%;
        text-align: center;
        padding-left: 10px;
    }

    p:nth-child(13){
        margin: 0;
        font-size: 110%;
        line-height: 2.5;
        display: inline-block;
        width: 13%;
        text-align: center;
        padding-left: 10px;
    }
`


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
