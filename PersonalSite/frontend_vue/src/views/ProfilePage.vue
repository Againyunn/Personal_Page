<template>
    <div class="profile-container">
        <div class="profile-wrap content-up" >
            <img src="../../public/static/img/profile.jpg" alt="" class="profile-img">
            <div class="profile-content-wrap">
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
                <div class="profile-content-part">
                    <span class="profile-part-head">Skills</span>
                    <br/>
                    <span class="profile-part-head">Part1. Use & Studying</span>
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
            <div class="profile-content-wrap">
                <div class="profile-content-part">
                    <span class="profile-part-head">Skills</span>
                    <br/>
                    <span class="profile-part-head">Part1. Use & Studying</span>
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

        <div class="slide-to-see-down" v-show="isSeeMore == false" @click="seeMoreContoler" >
            <img src="../../public/static/component/triangleDown.png" alt="삼각형(하)">
            <span>click to see more</span>
        </div>

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
        }
    }
}
</script>
<style scoped>  
    .profile-wrap{
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-top: 80px;
        height: calc(100vh - 90px); 
    }
    .profile-wrap > .profile-img{
        width: 300px;
        height: 400px;
    }
    .profile-wrap > .profile-content-wrap{
        margin-left: 50px;
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
    .profile-wrap > .profile-content-wrap > .profile-content-part > .profile-part-content{
        font-size: 20px;
        font-weight: normal;
    }

    .partition{
        display: flex;
        flex-direction: row;
        justify-content: left;
        flex-wrap: nowrap;
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
    

</style>