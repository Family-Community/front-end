import styled from "styled-components";
import profile from "../../../src/assets/images/profile.svg";

export const ProfileEditBody = styled.div`

    div:nth-child(1){
        display: flex;
        width: 90%;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 20px;
        p{
            height: 70px;
            font-size: 120%;
            font-weight: 700;
        }
        p:nth-child(1){
            margin: 0;
            width:calc(100% - 70px);
            line-height: 70px;
            text-align: center;
            span{

            }
            span:nth-child(1){

            }
            span:nth-child(2){

            }
        }
        p:nth-child(2){
            width:70px;
            margin: 0;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border-radius: 50%;
            box-sizing: border-box;
        }
    }

    form{
        width: 100%;
        p{
            margin: 0;
            text-align: center;
        }
        p:nth-child(1){
            font-size: 110%;
            font-weight: 700;
            input{
                font-size: 100%;
                width: 40%;
                text-align: center;
                box-sizing: border-box;
                border-radius: 5px;
            }
        }
        p:nth-child(2){
            line-height: 3;
            font-size: 110%;
            font-weight: 700;
            span{
                text-decoration: underline;
            }
        }
        input:nth-child(3){
            display: none;
        }
        #photoBox{
            width: 50%;
            height: 250px;
            margin: 0 auto;
            background-image: url(${profile});
            background-repeat: no-repeat;
            background-size: 60%;
            background-position: center;
        }
        label{
            display: block;
            margin: 0 auto;
            width: 30%;
            font-size: 110%;
            background-color: #aaaaaa;
            text-align: center;
            color: #fff;
            border-radius: 10px;
            line-height: 2;
            margin-top: 20px;
        }
        button{
            display: block;
            margin: 0 auto;
            width: 30%;
            font-size: 110%;
            background-color: #aaaaaa;
            text-align: center;
            color: red;
            border-radius: 10px;
            line-height: 2;
            margin-top: 20px;
            border: none;
            transition: all 0.5s;
        }
    }

    p:nth-child(3){
            display: block;
            margin: 0 auto;
            width: 30%;
            font-size: 110%;
            background-color: #000;
            text-align: center;
            border-radius: 10px;
            line-height: 2;
            margin-top: 20px;
            margin-bottom: 20px;
            border: none;
            color: red;
        }
`