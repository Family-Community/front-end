import { Link } from 'react-router-dom';
import styled from "styled-components";
import profile from '../../assets/images/profile.svg';


export const MainHeaderBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    p:nth-child(1) {  
        width: 60px;
        height: 35px;
        line-height: 30px;
        text-align: left;
        margin-left: 15px;
        margin-right: 30px;
        margin-top: 0;
        margin-bottom: 0;
        background-position: left;
        background-repeat: no-repeat;
        background-size: contain;
        display: inline-block;
    }

    input {
        width: 260px;
        height: 30%;
        font-size: 95%;
        border:none;
        text-align: center;
        margin-right: 30px;
        margin-left: 10px;
    }

`

export const ProfileLink = styled(Link)`
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 15px;
    img{
        display: block;
        width: 40px;
        height: 40px;
        margin-left: 0;
        margin-right: 15px;
        margin-top: 0;
        margin-bottom: 0;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        border-radius: 50%;
    }
`;

export const MainBox = styled.div`
    margin: 20px;
    padding: 10px;
    position: relative;
    width: 80%;
    margin: 0 auto;
    height: 500px;
    overflow: scroll;
    margin-top: 30px;

    #feedBox{       
        #name{
            transform: translateY(-7px);
        }
        
        img:nth-child(1) {
            width: 30px;
            height: 30px;
            text-align: left;
            padding-top:3px;
            margin: 0;
            border-radius: 50%;
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
            font-size: 80%;
            line-height: 2.5;
            display: inline-block;
            width: 2%;
            text-align: center;
            float: right;
        }

        p:nth-child(5){
            margin: 0;
            font-size: 80%;
            line-height: 2.5;
            display: inline-block;
            width: 8%;
            text-align: center;
            float: right;
            padding-right: 0;
        }

        img:nth-child(6) {
            width: 100%;
            height: 100%;
            object-fit: cover;
            padding-top: 10px;
        }

        p:nth-child(7){
            margin: 0;
            font-size: 110%;
            line-height: 2.5;
            display: block;
            width: 80%;
            text-align: left;
        }

        p:nth-child(8){
            margin: 0;
            font-size: 90%;
            line-height: 2.5;
            display: block;
            width: 80%;
            text-align: left;
        }

        #reactionBox{
                width: 90%;
                height: 80px;
                border: none;
                font-size: 20px;
                text-align: center;
                justify-content: center;
                margin-left: 15px;
                margin-top: 20px;

                div{
                    display: flex;
                    justify-content: space-around;
                }

                div:nth-child(1){
                    width: 100%;
                    height: 30px;
                    p{
                        width: 30px;
                        height: 30px;
                        margin: 0;
                        line-height: 30px;
                    }
                    p:nth-child(1){
                        
                    }
                    p:nth-child(2){
                        padding: 0;
                    }
                    p:nth-child(3){
                        font-size: 20px;
                    }
                    p:nth-child(4){
                        font-size: 20px;
                    }
                    p:nth-child(5){
                        font-size: 20px;
                    }
                    p:nth-child(6){

                    }
                }
                div:nth-child(2){
                    width: 100%;
                    height: 30px;
                    margin-top: 10px;
                    p{
                        width: 30px;
                        height: 30px;
                        margin: 0;
                        text-align: center;
                        line-height: 30px;
                    }
                    p:nth-child(1){
                        place-items: center;
                    }
                    p:nth-child(2){
                        padding: 0;
                        place-items: center;
                    }
                    p:nth-child(3){
                        font-size: 20px;
                        place-items: center;
                    }
                    p:nth-child(4){
                        font-size: 20px;
                        place-items: center;
                    }
                    p:nth-child(5){
                        font-size: 20px;
                        place-items: center;
                    }
                }
            }
            
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
        font-size: 120%;
        border: none;
        color: #ffffff;
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