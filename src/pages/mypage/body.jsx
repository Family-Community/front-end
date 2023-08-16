import { MyPageBody } from "./style";
function Body() {

    return (
        <MyPageBody>
            <div id="userInfoBox">
                <p>
                    <span id="familyNameSpan">민석이네 </span>안방의 <span id="nameSpan">양민석</span>님
                </p>
                <p id="imageBox">이미지</p>
            </div>
            <div id="feedBox">
                <div>
                    <div>
                        <p>이미지</p>
                        <p>이름</p>
                        <p>수정</p>
                        <p>삭제</p>
                    </div>
                    <div id="photoBox">photo box</div>
                    <div id="contentBox">contentBox</div>
                    <div id="reactionBox">
                        <div>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                        <div>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </MyPageBody>
    )
}

export default Body;