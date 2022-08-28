<template>
    <div class="profile-wrap">
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
            sampleData: ''
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
        
    }
}
</script>
<style scoped>  
    .profile-wrap{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 80px;
    }
    .profile-wrap > .profile-img{
        width: 300px;
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
</style>