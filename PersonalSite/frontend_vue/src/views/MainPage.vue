<template>
    <div>
        <MainContent/>
    </div>
</template>
<script>
import MainContent from '@/components/main/MainContent.vue';
export default{
    //컴포넌트 이름
    name: 'MainPage',
    //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
    components:{
        MainContent
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