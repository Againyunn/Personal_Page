<template>
    <div class="slide-wrap">
        <div class="slide-word-wrap blink-effect" @click="isSlideClicked">
            <img src="../../../public/static/component/triangle.png" alt="삼각형" class="slide-triangle"/>
            <span class="slide-word">&nbsp;Click to Open!</span>    
        </div>
    </div>
</template>
<script>
export default{
    //컴포넌트 이름
    name: 'Click2Open',
    //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
    components:{

        }, 
    //html과 JS코드에서 사용할 데이터 변수 선언
    data(){ 
        return{
            slideChanged: false
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
        isSlideClicked(){
            setTimeout(()=>{this.$router.push('/profile')}, 300);
        }
    }
}
</script>
<style scoped>
    .slide-wrap{
        width: 100%;
        height: 25px;
        background: #2B90D9;
        transition: background-color 0.5s ease-in;
    }
    .slide-word-wrap{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        cursor: pointer;
    }
    .slide-word{
        display: inline-block;
        font-size: 20px;
        color: #FFF;
        transition: transform 0.5s ease-in;
    }
    .slide-triangle{
        display: inline-block;
        transition: transform 0.5s ease-in;
        /*색 반전 css*/
        filter :brightness(0) invert(1);
        margin-top: 3px;
        width: 20px;
        height: 20px;
    }

    .slide-wrap:hover{
        background: #f03d3d;
    }
    .slide-wrap:active{
        background: #f03d3d;
    }

    .slide-wrap:hover .slide-word{
        transform: translateX(1000px);
    }
    .slide-wrap:active .slide-word{
        transform: translateX(1000px);
    }

    .slide-wrap:hover .slide-triangle{
        transform: translateX(1000px);
    }
    .slide-wrap:active .slide-triangle{
        transform: translateX(1000px);
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
</style>