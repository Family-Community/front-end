import styled from "styled-components";

export const ProfileAuthBody = styled.div`
    
    margin: 100px 0px;
    
    form{
        p{
            margin: 0 auto;
            text-align: center;
            font-size: 130%;
            display: block;
            width: 80%;
            line-height: 2;
        }
        p:nth-child(1){
            
        }
        p:nth-child(2){

        }
        p:nth-child(3){
            margin-top: 10px;
            input{
                width: 60%;
                text-align: center;
                line-height: 2;
                font-size: 110%;
                box-sizing: border-box;
                border-radius: 10px;
            }
        }
        button{
            border: none;
            color: red;
            display: block;
            width: 30%;
            line-height: 2.5;
            border-radius: 10px;
            font-size: 120%;
            margin: 0 auto;
            margin-top: 30px;
            transition: all 0.5s;
        }
    }
`