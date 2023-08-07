import styled from "styled-components";
import plus from "../../../src/assets/images/plus.svg";
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
            width: 70px;
            margin: 10px 0px;
            p{  
                display: block;
                height: 70px;
                width: 100%;
                margin-bottom: 5px;
                border: 1px solid #000;
                box-sizing: border-box;
                border-radius: 20px;
            }
            span{
                display: block;
                text-align: center;
                font-size: 90%;
            }
        }
    }
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
        border-radius: 50%;
        margin-top: 20px;
    }
    #addProfileBtn::after{
        content: "추가하기";
        display: block;
        text-align: center;
        transform: translateY(60px);
        font-size: 90%;
    }
`