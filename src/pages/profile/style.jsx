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
            height: 60px;
            width: 60px;
            background-image: url(${plus});
            background-repeat: no-repeat;
            background-size: 65%;
            background-position: center;
            margin: 0 auto;
            box-sizing: border-box;
            border-radius: 50%;
            margin-top: 20px;
        }
        #addProfileBtn::after{
            content: "멤버추가";
            display: block;
            text-align: center;
            transform: translateY(70px);
            font-size: 80%;
            font-weight: 700;
        }
        #kakaotalk-sharing-btn{
            display: block;
            height: 60px;
            width: 60px;
            background-image: url(${kakao});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            margin: 0 auto;
            border-radius: 50%;
            margin-top: 20px;
            box-sizing: border-box;
        }
        #kakaotalk-sharing-btn::after{
            content: "카톡공유";
            display: block;
            text-align: center;
            transform: translateY(70px);
            font-size: 80%;
            font-weight: 700;
        }

    }
`