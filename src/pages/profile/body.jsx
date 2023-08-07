import { ProfileBody } from "./style";
function Body() {


    const handleClickAddProfile = (e) => {
        e.preventDefault();
        console.log('추가하기');
    }

    return (
        <ProfileBody>
            <div id="profileBox">
                <div>
                    <p></p>
                    <span>중</span>
                </div>
                <div>
                    <p></p>
                    <span>앙</span>
                </div>
                <div>
                    <p></p>
                    <span>해</span>
                </div>
                <div>
                    <p></p>
                    <span>커</span>
                </div>
                <div>
                    <p></p>
                    <span>톤</span>
                </div>
                <div>
                    <p></p>
                    <span>A</span>
                </div>
                <div>
                    <p></p>
                    <span>팀</span>
                </div>
            </div>

            <p id="addProfileBtn" onClick={handleClickAddProfile}></p>

        </ProfileBody>
    )
}

export default Body;