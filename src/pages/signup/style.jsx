import styled from "styled-components";
import profile from "../../../src/assets/images/profile.svg";
export const SignupBody = styled.div`
    padding-top: 30px;
    form{
        p{
            margin: 0 auto;
            font-size: 110%;
            line-height: 2.5;
            display: block;
            width: 80%;
            text-align: right;
            font-weight: 700;
        }
        p input{
            font-size: 90%;
            text-align: center;
            width: 50%;
            border: 2px solid #aaaaaa;
            box-sizing: border-box;
            border-radius: 5px;
        }
        p:nth-child(1){
            input{

            }
        }
        p:nth-child(2){
            input{

            }
        }
        p:nth-child(3){
            input{
                
            }
        }
        p:nth-child(4){
            input{
                
            }
        }
        div:nth-child(5){
            p{
                text-align: center;
                font-size: 110%;
                font-weight: 700;
                span{
                    text-decoration: underline;
                }
            }
            input{
                display:none;
            }
            label{
                font-size: 110%;
                display: block;
                width: 40%;
                line-height: 2;
                text-align: center;
                margin: 0 auto;
                background-color: #aaaaaa;
                color: #fff;
                border-radius: 10px;
                span{
                    text-decoration: underline;
                }
            }
            div{
                width: 50%;
                height: 250px;
                margin: 0 auto;
                border: 1px solid #aaaaaa;
                box-sizing: border-box;
                margin-top: 15px;
                background-image: url(${profile});
                background-repeat: no-repeat;
                background-size: 60%;
                background-position: center;
            }
        }
        div:nth-child(6){
            p{
                text-align: center;
                font-size: 110%;
                font-weight: 700;
                span{
                    text-decoration: underline;
                }
            }
            div{
                div{
                    width: 80%;
                    margin: 0 auto;
                }
                div:nth-child(1){
                    display: flex;
                    justify-content: space-between;
                    input{
                        display: none;
                    }
                    label{
                        display: block;
                        font-size: 110%;
                        width: 30%;
                        height: 80px;
                        border-radius: 30px;
                        box-sizing: border-box;
                    }
                    label:nth-child(2){
                        background-color: #3CAEFF;
                    }
                    label:nth-child(4){
                        background-color: #6DD66D;
                    }
                    label:nth-child(6){
                        background-color: #FFBCB9;
                    }
                }
                div:nth-child(2){
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;
                    input{
                        display: none;
                    }
                    label{
                        display: block;
                        font-size: 110%;
                        width: 30%;
                        height: 80px;
                        border-radius: 30px;
                        box-sizing: border-box;
                    }
                    label:nth-child(2){
                        background-color: #FFD732;
                    }
                    label:nth-child(4){
                        background-color: #D873F1;
                    }
                    label:nth-child(6){
                        background-color: #aaaaaa;
                    }
                }
            }
        }
        button{
            display: block;
            color: #aaaaaa;
            border: none;
            background-color: #aaaaaa;
            margin: 0 auto;
            font-size: 120%;
            line-height: 2;
            border-radius: 10px;
            width: 40%;
            margin-top: 20px;
            transition: all 0.5s;
        }
    }
`