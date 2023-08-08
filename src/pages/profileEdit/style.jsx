import styled from "styled-components";
import profile from "../../../src/assets/images/profile.svg";

export const EditHeaderBox = styled.div`
    width: 100%;
    text-align: center;
    margin: 0 ;
    display: inline-block;
    h2{
        margin-bottom: 0;
    }    
`

export const EditBox = styled.div`
    
    margin-top: 30px;

    form{
        width: 100%;
        p{
            margin: 0;
            text-align: center;
        }
        p:nth-child(1){
            font-size: 110%;
            input{
                font-size: 100%;
                width: 40%;
                text-align: center;
            }
        }
        p:nth-child(2){
            line-height: 3;
            font-size: 110%;
            span{
                text-decoration: underline;
            }
        }
        input:nth-child(3){
            display: none;
        }
        #photoBox{
            width: 50%;
            height: 200px;
            margin: 0 auto;
            border: 1px solid #aaaaaa;
            box-sizing: border-box;
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
            color: #fff;
            border-radius: 10px;
            line-height: 2;
            margin-top: 20px;
            border: none;
        }
    }

    button:nth-child(2){
            display: block;
            margin: 0 auto;
            width: 30%;
            font-size: 100%;
            background-color: #FA8C8C;
            text-align: center;
            color: #fff;
            border-radius: 40px;
            line-height: 2;
            margin-top: 30px;
            margin-bottom: 20px;
            border: none;
            color: #EB0000;
        }
`