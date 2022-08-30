<template>
    <div class="portfolio-total-container">
        <div class="portfolio-item-wrap">
            <div class="portfolio-item-title">
                <div class="project-title-wrap">
                    <div class="project-title">너의 이중전공은?</div>
                    <div class="project-date">22.03.07 ~ 06.21</div>
                    <div class="project-date">
                        <span class="font-highlight">[Refactoring: 22.07.15 ~ 08.10]</span>
                    </div>
                </div>
                <div class="project-link-wrap">
                    <div class="move-to-service" @click="clickService('http://43.200.48.156:8080/')">
                        <img src="../../public/static/component/triangleDown.png" alt="triangle-icon" class="triangle-icon">
                        <span class="service-link">service link</span>
                    </div>
                    <img src="../../public/static/img/github.png" alt="github-icon" class="github-icon" @click="clickGithub('https://github.com/Whats-Your-DualMajor/main-service')">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    //컴포넌트 이름
    name: 'PortfolioPage',
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
        clickService(target = null){
            if(target === null){
                return
            }
            window.open(target)
        },
        clickGithub(target){
            window.open(target);
        },
    }
}
</script>
<style scoped>
    .portfolio-total-container{

    }
    .portfolio-total-container > .portfolio-item-wrap{
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-top: 80px;
        height: calc(100vh - 90px); 
        margin-left: calc(5vw + 50px);
        margin-right: calc(5vw + 50px);
    }
    .portfolio-total-container > .portfolio-item-wrap > .portfolio-item-title{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        width: 100%;
    }
    .portfolio-total-container > .portfolio-item-wrap > .portfolio-item-title > .project-title-wrap{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: left;
        text-align: left;
    }
    .portfolio-total-container > .portfolio-item-wrap > .portfolio-item-title > .project-title-wrap > .project-title{
        font-size: 25px;
        font-weight: bold;
    }
    .portfolio-total-container > .portfolio-item-wrap > .portfolio-item-title > .project-title-wrap > .project-date{
        display: inline-block;
        font-size: 12px;
        font-size: bold;
    }

    .portfolio-total-container > .portfolio-item-wrap > .portfolio-item-title > .project-link-wrap{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;

        padding-top: 40px;
    }

    .portfolio-total-container > .portfolio-item-wrap > .portfolio-item-title > .project-link-wrap > .github-icon{
        height: 30px;
        width: 30px;
        margin-left: 20px;
        border-radius: 100%;
        cursor: pointer;
    }
    .portfolio-total-container > .portfolio-item-wrap > .portfolio-item-title > .project-link-wrap > .move-to-service{
        display: inline-block;
        margin-top: 12px;
    }
    .portfolio-total-container > .portfolio-item-wrap > .portfolio-item-title > .project-link-wrap > .move-to-service > .triangle-icon{
        height: 12px;
        width: 12px;
        margin-top: 3px;
        rotate: 270deg;
        cursor: pointer;
    }
    .portfolio-total-container > .portfolio-item-wrap > .portfolio-item-title > .project-link-wrap > .move-to-service > .service-link{
        font-size: 12px;
        font-weight: bold;
        color: #D9D9D9;
        cursor: pointer;
    }

    .portfolio-total-container > .portfolio-item-wrap > .portfolio-item-title > .project-link-wrap > .github-icon:hover{
        box-shadow: 0px 0px 15px 3px #78c4fa;
    }

    .portfolio-total-container > .portfolio-item-wrap > .portfolio-item-title > .project-link-wrap > .service-link:hover{
        text-shadow: 1px 1px 5px #D9D9D9;
    }

    /*폰트 형광펜 처리*/
    .font-highlight{
        box-shadow: inset 0 -10px 0 #78c4fa;
    }
</style>