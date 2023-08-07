import { ProfileBody } from "./style";
import { useEffect } from "react";
function Body() {


    const handleClickAddProfile = (e) => {
        e.preventDefault();
        console.log('추가하기');
    }
    // 카카오톡 공유기능
    useEffect(() => {
        // 카카오톡 sdk 추가
        const script = document.createElement("script");
        script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js";
        script.async = true;
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
    }, []);

    const kakaoButton = () => {
        // kakao sdk script 부른 후 window.Kakao로 접근
        if (window.Kakao) {
            const Kakao = window.Kakao;

            // 중복 initialization 방지
            // 카카오에서 제공하는 javascript key를 이용하여 initialize
            if (!Kakao.isInitialized()) {
            Kakao.init("772f33c28a1135d7951fe98fde14c0bb");
            }

            // 링크생성
            const link = `http://localhost:3000/family_code/profile`;
            
            Kakao.Share.createDefaultButton({
                container: '#kakaotalk-sharing-btn',
                objectType: 'feed',
                content: {
                  title: '안방',
                  description: '호동이네의 안방으로 초대합니다!',
                  imageUrl:
                    `https://github.com/Yang-Min-Seok/Yang-Min-Seok/assets/83502596/848da2cf-d328-4417-9938-2910519d6f48`,
                  link: {
                    // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
                    mobileWebUrl: 'http://localhost:3000',
                    webUrl: 'http://localhost:3000',
                  },
                },
                buttons: [
                  {
                    title: '안방으로 가기',
                    link: {
                      mobileWebUrl: link,
                      webUrl: link,
                    },
                  },
                ],
              });
            }
    };

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

            <div>
                <p id="addProfileBtn" onClick={handleClickAddProfile}></p>
                <p id="kakaotalk-sharing-btn" onClick={kakaoButton}></p>
            </div>

        </ProfileBody>
    )
}

export default Body;