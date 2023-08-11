import { ProfileBody } from "./style";
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getFamilyMember } from "../../apis/profileApi/apis";
import profile from "../../assets/images/profile.svg";
function Body() {
    
    // familyCode
    const familyCode = useParams().family_code;
    
    // familyInfo
    const location = useLocation();
    let familyId = '';
    let familyName = '';
    let color = '';
    try{
        familyId = location.state.familyId;
        familyName = location.state.familyName;
        color = location.state.color;
    }
    catch(err){

    }

    // familyMember 가져오기
    const navigate = useNavigate();
    const [familyMember, setFamilyMember] = useState('');
    const findFamilyMember = async () => {
        // 정상 접근시
        try{
            const FamilyMember = await getFamilyMember(familyId);
            setFamilyMember(FamilyMember);
        }
        // 비 정상 접근시
        catch(e){
            navigate(`/${familyCode}/profileAuth`);
        }
    }
    
    // familyMember 띄우기
    const setProfiles = (numberOfFamilyNumber) => {
        const profileBox = document.getElementById('profileBox');
        // 초기화
        profileBox.innerHTML = '';
        for (let i=0; i < numberOfFamilyNumber; i++){
            // 이전까지의 프로필
            const prev = profileBox.innerHTML;
            
            // 새로 추가할 프로필
            const id = familyMember[i].id;
            const name = familyMember[i].name;
            let image = familyMember[i].image;
            if (!image){
                image = profile;
            }
            // 프로필 추가하기
            profileBox.innerHTML = prev + `
                <div>
                    <p class="profileImage" id="${id}" style="background-image : url(${image})"></p>
                    <span>${name}</span>
                </div>
            `
        }
    }
    if(familyMember){
        const numberOfFamilyNumber = familyMember.length;
        setProfiles(numberOfFamilyNumber);
    }
    
    // 추가하기 버튼 누를 시
    const handleClickAddProfile = (e) => {
        e.preventDefault();
        navigate(`/${familyCode}/profileAdd`);
    }

    // 컬러 설정
    const [addProfileBtn, setAddProfileBtn] = useState('');
    const [kakaoSharingBtn, setKakaoSharingBtn] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const getAddProfileBtn = () => {
        const addProfileBtn = document.getElementById('addProfileBtn');
        const kakaoSharingBtn = document.getElementById('kakaotalk-sharing-btn');
        const profileImage = document.getElementsByClassName('profileImage');
        setAddProfileBtn(addProfileBtn);
        setKakaoSharingBtn(kakaoSharingBtn);
        setProfileImage(profileImage);
    }
    if(addProfileBtn && kakaoSharingBtn && profileImage){
        addProfileBtn.style.border = `2px solid ${color}`;
        kakaoSharingBtn.style.border = `2px solid ${color}`;
        const lenOfProfileImage = profileImage.length;
        for(let i=0; i<lenOfProfileImage; i++){
            const currProfileImage = profileImage[i];
            currProfileImage.style.border = `2px solid ${color}`;
        }
    }

    useEffect(() => {
        // 멤버 불러오기
        findFamilyMember();

        // addProfileBtn 가져오기
        getAddProfileBtn();

        // 카카오톡 sdk 추가
        const script = document.createElement("script");
        script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js";
        script.async = true;
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
    }, []);

    // 카톡 공유 기능 구현
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
            const link = `http://localhost:3000/${familyCode}/profileAuth`;
            
            Kakao.Share.createDefaultButton({
                container: '#kakaotalk-sharing-btn',
                objectType: 'feed',
                content: {
                  title: '안방',
                  description: `${familyName} 안방으로 초대합니다`,
                  imageUrl:
                    `https://github.com/Family-Community/front-end/assets/83502596/b31669b0-17d4-4966-b0ec-59787947cf3f`,
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
            </div>

            <div>
                <p id="addProfileBtn" onClick={handleClickAddProfile}></p>
                <p id="kakaotalk-sharing-btn" onClick={kakaoButton}></p>
            </div>

        </ProfileBody>
    )
}

export default Body;