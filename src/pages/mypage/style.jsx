import styled from "styled-components";

export const MyPageBody = styled.div`
    #userInfoBox{
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
    #feedBox{
        width: 80%;
        margin: 0 auto;
        height: 450px;
        border: 2px solid red;
        border-radius: 5px;
        box-sizing: border-box;
        overflow: scroll;
        div{
            margin: 0 auto;
            border: 2px solid red;
            box-sizing: border-box;
            border-radius: 5px;
            margin-top: 10px;
            width: 90%;
            div:nth-child(1){
                margin: 0 auto;
                height: 50px;
                display: flex;
                width: 90%;
                justify-content: space-around;
                border: none;
                p{  
                    margin: 0;
                    line-height: 50px;
                    height: 100%;
                    text-align: center;
                    font-size: 120%;
                    font-weight: 700;
                }
                p:nth-child(1){
                    display: block;
                    width:50px;
                }
                p:nth-child(2){
                    width: calc((100% - 50px) * 0.6);
                    text-align: center;
                }
                p:nth-child(3){
                    width: calc((100% - 50px) * 0.2);
                    text-align: center;
                }
                p:nth-child(4){
                    width: calc((100% - 50px) * 0.2);
                    text-align: center;
                }
            }
            div:nth-child(2){
                width: 80%;
                height: 200px;
                border-radius: 5px;
                box-sizing: border-box;
                border: 2px solid red;
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                border: none;

            }
            div:nth-child(3){
                width: 80%;
                height: 150px;
                margin-bottom: 10px;
                border: none;
            }
            div:nth-child(4){
                width: 100%;
                height: 80px;
                border: none;
                div{
                    display: flex;
                    justify-content: space-around;
                }
                div:nth-child(1){
                    width: 100%;
                    height: 25px;
                    p{
                        width: 25px;
                        height: 25px;
                        margin: 0;
                    }
                    p:nth-child(1){
                        
                    }
                    p:nth-child(2){

                    }
                    p:nth-child(3){

                    }
                    p:nth-child(4){

                    }
                    p:nth-child(5){

                    }
                    p:nth-child(6){

                    }
                }
                div:nth-child(2){
                    width: 100%;
                    height: 25px;
                    p{
                        width: 25px;
                        height: 25px;
                        margin: 0;
                    }
                    p:nth-child(1){
                        
                    }
                    p:nth-child(2){

                    }
                    p:nth-child(3){

                    }
                    p:nth-child(4){

                    }
                    p:nth-child(5){

                    }
                    p:nth-child(6){

                    }
                }
            }
        }
    }
`