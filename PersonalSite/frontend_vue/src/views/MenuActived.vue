<template>
    <div class="menu-wrap">
        <span class="menu-index">개인 프로필</span>
        <span class="menu-index">이력</span>
        <span class="menu-index">포트폴리오</span>
        <span class="menu-index">관심사.비전</span>
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
    .menu-wrap{
        width:100%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;

        justify-content: center;

        text-align: left;
    }
    .menu-wrap > .menu-index{
        margin-left: 50px;
        margin-top: 2em;
        font-size: 30px;
        color: #FFF;
        font-weight: bold;
    }
</style>