<template>
    <div class="profile-container">
        <div class="profile-wrap content-up" >
            <img src="../../public/static/img/profile.jpg" alt="" class="profile-img">
            <div class="profile-content-wrap margin-right-style">
                <div class="profile-content-title">
                    <span class="profile-title-head">정재윤(Jaeyun Jung)</span>
                    <br/>
                    <span class="profile-title-content">한국외국어대학교 GBT학부, 컴퓨터.전자시스템공학부</span>
                    <br/>
                    <span class="profile-title-content">GPA: 4.09/4.5</span>
                </div>
                <div class="profile-content-part">
                    <span class="profile-part-head">Awards</span>
                    <br/>
                    <span class="profile-part-content">2022 SW공동해커톤 우수상(SW중심대학협회장상)수상</span>
                    <br/>
                    <span class="profile-part-content">2021 GBT학부 캡스톤 디자인 경진대회 최우수상(경상대학장상)수상</span>
                    <br/>
                    <span class="profile-part-content">2021 SBA 웹 개발 프로그램 최우수상 수상</span>
                </div>
                <div class="profile-content-part">
                    <span class="profile-part-head">Work Experience</span>
                    <br/>
                    <span class="profile-part-content">긱스로프트 Web/App 개발 인턴(22.09.01 ~ 현재)</span>
                    <br/>
                    <span class="profile-part-content">클루커스 MSP 헬프데스크(22.02.13 ~ 09.17)</span>
                    <br/>
                    <span class="profile-part-content">위메프 O2O실 지원팀 사원(19.12.01 ~ 20.08.29/21.06.21 ~ 08.20)</span>
                </div>
            </div>
        </div>

        <div class="profile-wrap content-down" v-show="isSeeMore == true">
            <div class="profile-content-wrap">
                <div class="profile-content-part" id="show-more">
                    <span class="profile-part-head">Skills</span>
                    <br/>
                    <span class="profile-part-sub-head">Part1. Use & Studying</span>
                    <ul>
                        <li>
                            <span class="profile-part-content">🛠Web/App Development</span>
                            <br/>
                            <div class="icon-wrap">
                                <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=Html5&logoColor=white"/>
                                <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=Css3&logoColor=white"> 
                                <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=React&logoColor=black"> 
                                <img src="https://img.shields.io/badge/vue-4FC08D?style=for-the-badge&logo=Vue.js&logoColor=white">
                                <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=MySql&logoColor=white"> 
                                <img src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=Django&logoColor=white">
                                <img src="https://img.shields.io/badge/php-777BB4?style=for-the-badge&logo=Php&logoColor=white"> 
                                <img src="https://img.shields.io/badge/flutter-02569B?style=for-the-badge&logo=Flutter&logoColor=white"> 
                            </div>
                        </li>
                        <br/>
                        <li>
                            <span class="profile-part-content">⚒Programming Languages</span>
                            <br/>
                            <div class="icon-wrap">
                                <img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=Python&logoColor=white"> 
                                <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black">
                                <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> 
                                <img src="https://img.shields.io/badge/c-A8B9CC?style=for-the-badge&logo=C&logoColor=white">
                                <img src="https://img.shields.io/badge/dart-0175C2?style=for-the-badge&logo=Dart&logoColor=white">
                            </div>
                        </li>
                    </ul>
                    <br/>
                    <span class="profile-part-sub-head">Part2. Tech</span>
                    <br/>
                    <ul>
                        <li>
                            <span class="profile-part-content">🔍Intersted Tech</span>
                            <br/>
                            <div class="icon-wrap">
                                <img src="https://img.shields.io/badge/web-000000?style=for-the-badge&logo=Mozilla&logoColor=white">
                                <img src="https://img.shields.io/badge/cloud-3693F3?style=for-the-badge&logo=iCloud&logoColor=white">
                                <img src="https://img.shields.io/badge/crypto-F7931A?style=for-the-badge&logo=Bitcoin&logoColor=white">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="profile-content-wrap margin-right-style">
                <div class="profile-content-part">
                    <span class="profile-part-head">Extra Curricular Activities</span>                    
                </div>
                <div class="profile-content-part">
                    <span class="profile-part-sub-head">2022 HUFS SW Volunteer</span>
                    <br/>
                    <ul>
                        <li>
                            <span class="profile-part-content">Maker in HUFS 웹 개발 멘토</span>
                        </li>
                        <li>
                            <span class="profile-part-content">HUFS X 설악고등학교 SW진로체험교육 강사</span>
                        </li>
                    </ul>
                </div>
                <div class="profile-content-part">
                    <span class="profile-part-sub-head">COMENTO 직무부트캠프</span>
                    <br/>
                    <ul>
                        <li>
                            <span class="profile-part-content">스타트업에서 프론트엔드 개발자로 일하기</span>
                        </li>
                    </ul>
                </div>
                <div class="profile-content-part">
                    <span class="profile-part-sub-head">2022 컴퓨터 사고와 코딩 수업 학부생 조교</span>
                </div>
                <div class="profile-content-part">
                    <span class="profile-part-sub-head">2021 HUFS Gnuvil 프로그래밍 중앙 동아리 부원</span>
                    <br/>
                    <ul>
                        <li>
                            <span class="profile-part-content">알고리즘, 인공지능 스터디</span>
                        </li>
                    </ul>
                </div>
                <div class="profile-content-part">
                    <span class="profile-part-sub-head">2020 이커머스특화대학 전자상거래 실습 장학생</span>
                </div>
            </div>
        </div>

        <!-- 프로필 콘텐츠 더 보기 + 반짝반짝 효과 -->
        <a href="#show-more" class="slide-to-see-down blink-effect" v-show="isSeeMore == false" @click="seeMoreContoler" >
            <img src="../../public/static/component/triangleDown.png" alt="삼각형(하)">
            <span>click to see more</span>
        </a>

        <img class="arrow-left" src="../../public/static/component/arrow-left.png" alt="화살표(왼)" @click="moveToPage('/')"/>
        <img class="arrow-right" src="../../public/static/component/arrow-right.png" alt="화살표(오)" @click="moveToPage('/Portfolio')"/>
    </div>
</template>
<script>
export default{
    //컴포넌트 이름
    name: 'ProfilePage',
    //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
    components:{

        }, 
    //html과 JS코드에서 사용할 데이터 변수 선언
    data(){ 
        return{
            isSeeMore: false
        };
    },
    //컴포지션 API
    setup() {
        
    },
    //컴포넌트 생성
    created() {
        
    },
    //template에 정의된 html 코드가 랜더링된 후 실행
    mouted() {
        
    },
    //umount가 완료된 후 실행
    unmounted() {
        
    },
    //컴포넌트 내에서 사용할 메소드 정의
    methods: {
        seeMoreContoler(){
            //기본 상태
            if(this.isSeeMore === false){
                this.isSeeMore = true;
            }
            else{
                this.isSeeMore = false;                
            }
        },
        moveToPage(target){
            this.$router.push(target);
        }
    }
}
</script>
<style scoped>  
    .profile-container{
        position:relative;
    }

    .profile-wrap{
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-top: 80px;
        height: calc(100vh - 90px); 
        margin-left: calc(5vw + 50px);
        margin-right: calc(5vw + 50px);
    }
    .profile-wrap > .profile-img{
        width: 300px;
        height: 380px;
    }
    .profile-wrap > .profile-content-wrap{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: left;
        text-align: left;
    }

    .profile-wrap > .profile-content-wrap > .profile-content-title{
        margin-bottom: 30px;
    }
    .profile-wrap > .profile-content-wrap > .profile-content-title > .profile-title-head{
        font-size: 30px;
        font-weight: bold;
        text-shadow: 2px 2px 2px rgba(0 0 0 / 15%);
    }
    .profile-wrap > .profile-content-wrap > .profile-content-title > profile-title-content{
        font-size: 20px;
        font-weight: normal;
    }
    .profile-wrap > .profile-content-wrap > .profile-content-part{
        margin-bottom: 20px;
    }
    .profile-wrap > .profile-content-wrap > .profile-content-part > .profile-part-head{
        font-size: 25px;
        font-weight: bold;
    }
    .profile-wrap > .profile-content-wrap > .profile-content-part > .profile-part-sub-head{
        font-size: 18px;
        font-weight: bold;
    }
    .profile-wrap > .profile-content-wrap > .profile-content-part > .profile-part-content{
        font-size: 15px;
        font-weight: normal;
    }

    .margin-right-style{
        margin-left: 30px;
    }

    .partition{
        display: flex;
        flex-direction: row;
        justify-content: left;
        flex-wrap: wrap;
    }

    .icon-wrap{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .icon-wrap > img{
        margin-right: 2px;
    }

    /*페이지 아래 전환*/
    .slide-to-see-down{
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;

        position: fixed;
        bottom: 30px;
        left: calc(50vw - 7.5px - 6em);
        cursor: pointer;
    }
    .slide-to-see-down > img{
        margin-top: 3px;
        width: 15px;
        height: 15px;
    }
    .slide-to-see-down > span{
        color: #D9D9D9;
        font-size: 15px;
    }
    .slide-to-see-down:hover{
        text-shadow: 0px 0px 3px #D9D9D9;
    }

    /*click 이후 scroll 안내 div*/
    .scroll-to-see-down{
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        left: calc(50vw - 7.5px - 6em);
    }
    .scroll-to-see-down > span{
        color: #D9D9D9;
        font-size: 15px;
    }

    /*위/아래 변경 시 효과 설정*/
    .content-up{
        transition: opacity 0.5s ease-in;
    }
    #slide-to-see-down-checkbox:checked .content-up{
        opacity: 0;
    }

    /*화살표*/
    .arrow-left{
        position: fixed;
        top: calc(50vh - 25px + 45px);
        left: 2vw;
        width: 50px;
        border-radius: 100px;
    }
    .arrow-right{
        position: fixed;
        top: calc(50vh - 25px + 45px);
        right: 2vw;
        width: 50px;
        border-radius: 100px;
    }
    .arrow-left:hover{
        box-shadow: 0px 0px 15px 3px #78c4fa;
    }
    .arrow-right:hover{
        box-shadow: 0px 0px 15px 3px #78c4fa;
    }

    a{
        text-decoration: none;
    }

    /*반짝반짝 효과*/
    @keyframes blink-effect-set{
        50%{
            opacity: 0.4;
        }
    }
    .blink-effect{
        animation: blink-effect-set 1.5s step-end infinite;
    }
    .blink-effect:hover{
        animation: none;
    }

    @media (max-width: 960px) {
        
    }
</style>