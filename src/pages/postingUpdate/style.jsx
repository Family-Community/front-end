import styled from "styled-components";
import imageSample from "../../assets/images/image.svg";
export const PostBody = styled.div`
    margin-top: 20px;
    form{

        p:nth-child(1){
            margin: 0;
            text-align: center;
            font-size: 120%;
            line-height: 2.5;
            font-weight: 700;
            input{
                border-radius: 5px;
                box-sizing: border-box;
                text-align: center;
                font-size: 100%;
            }
        }

        input:nth-child(2){
            display: none;
        }

        label{
            display: block;
            width: 35%;
            text-align: center;
            line-height: 2;
            border-radius: 10px;
            color: #fff;
            margin: 0 auto;
            margin-top: 10px;
            font-size: 105%;
            font-weight: 500;
            span{
                text-decoration: underline;
            }
        }
        div{
            width: 70%;
            height: 200px;
            margin: 0 auto;
            box-sizing: border-box;
            border-radius: 5px;
            margin-top: 20px;
            background-image: url(${imageSample});
            background-repeat: no-repeat;
            background-size: 50%;
            background-position: center;
        }
        p:nth-child(5){
            text-align: center;
            font-size: 120%;
            font-weight: 600;
        }
        textarea{
            display: block;
            text-align: center;
            resize: none;
            width: 70%;
            height: 100px;
            margin: 0 auto;
            box-sizing: border-box;
            border-radius: 5px;
            margin-top: 20px;
            font-size: 110%;
            padding: 10px;
        }
        button{
            display: block;
            width: 30%;
            border: none;
            color: red;
            font-size: 120%;
            line-height: 2;
            border-radius: 5px;
            margin: 0 auto;
            margin-top: 30px;
            transition: all 0.5s;
        }
    }
`