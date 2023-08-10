import styled from "styled-components";
import plus from "../../../src/assets/images/plus.svg";
import kakao from "../../../src/assets/images/kakao.png";
export const ProfileBody = styled.div`
    margin: 30px 0px;
    div{

    }
    #profileBox{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        div{
            display: block;
            width: calc(100% / 3);
            margin: 10px 0px;
            p{  
                display: block;
                height: 90px;
                width: 65%;
                margin-bottom: 5px;
                margin: 0 auto;
                border-radius: 50%;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
            }
            span{
                display: block;
                text-align: center;
                font-size: 110%;
                margin-top: 3%;
            }
        }
    }
    div:nth-child(2){
        display: flex;
        width: 60%;
        margin: 0 auto;
        #addProfileBtn{
            display: block;
            height: 50px;
            width: 50px;
            background-image: url(${plus});
            background-repeat: no-repeat;
            background-size: 65%;
            background-position: center;
            margin: 0 auto;
            border: 1px solid #000;
            box-sizing: border-box;
            border-radius: 50%;
            margin-top: 20px;
        }
        #addProfileBtn::after{
            content: "추가하기";
            display: block;
            text-align: center;
            transform: translateY(60px);
            font-size: 80%;
        }
        #kakaotalk-sharing-btn{
            display: block;
            height: 50px;
            width: 50px;
            background-image: url(${kakao});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            margin: 0 auto;
            border-radius: 50%;
            margin-top: 20px;
        }
        #kakaotalk-sharing-btn::after{
            content: "카카오톡";
            display: block;
            text-align: center;
            transform: translateY(60px);
            font-size: 80%;
        }

    }
`