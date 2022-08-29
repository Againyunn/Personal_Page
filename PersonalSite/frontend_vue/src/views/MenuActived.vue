<template>
    <div class="menu-wrap">
        <div class="menu-index" @click="moveToPage('/Profile')">
            <span class="menu-content" >개인 프로필</span>
        </div>
        <div class="menu-index" @click="moveToPage('/Portfolio')">
            <span class="menu-content" >포트폴리오</span>
        </div>
        <div class="menu-index" @click="moveToPage('/InterestVision')">
            <span class="menu-content" >관심사.비전</span>
        </div>
    </div>
</template>
<script>
export default{
    //컴포넌트 이름
    name: 'MenuActived',
    //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
    components:{

        }, 
    //html과 JS코드에서 사용할 데이터 변수 선언
    data(){ 
        return{
            changePage: false
        };
    },
    //컴포지션 API
    setup() {
        
    },
    //컴포넌트 생성
    created() {

    },
    //template에 정의된 html 코드가 랜더링된 후 실행
    mounted() {
        document.body.style.backgroundColor = '#2B90D9';
        window.localStorage.setItem('menuToggleStatus', false);
    },
    //umount가 완료된 후 실행
    unmounted() {
        document.body.style.backgroundColor = '#FFF';
    },
    //컴포넌트 내에서 사용할 메소드 정의
    methods: {
        moveToPage(target){ 
            window.localStorage.setItem('menuToggle', true);
            this.$router.push(target);
        }
    }
}
</script>
<style scoped>
    .menu-wrap{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;

        justify-content: center;
        text-align: left;
    }

    .menu-wrap > .menu-index{
        margin-left: 50px;
        margin-top: 2em;
    }

    .menu-wrap > .menu-index > .menu-content{
        font-size: 30px;
        color: #FFF;
        font-weight: bold;
        opacity: 0;
        animation: fadeInText 0.2s 0.1s ease-out forwards;
    }

    @keyframes fadeInText{
        100% {
            opacity: 1;
        }
    }

    .menu-wrap > .menu-index > .menu-content:hover{
        border-bottom: 2px solid #FFF;
    }

</style>