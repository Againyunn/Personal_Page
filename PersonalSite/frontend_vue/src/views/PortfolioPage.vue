<template>
    <div class="portfolio-total-container">
        <!-- 프로젝트1 frame -->
        <div class="portfolio-item-wrap">
            <div class="portfolio-item-title">
                <!-- 프로젝트 header title -->
                <div class="project-title-wrap">
                    <div class="project-title">너의 이중전공은?</div>
                    <div class="project-date">22.03.07 ~ 06.21</div>
                    <div class="project-date">
                        <span class="font-highlight">[Refactoring: 22.07.15 ~ 08.10]</span>
                    </div>
                </div>
                <!-- 프로젝트 링크 info -->
                <div class="project-link-wrap">
                    <!-- 프로젝트 실제 서버 이동 링크 + 반짝반짝 효과 -->
                    <div class="move-to-service blink-effect" @click="clickService('http://43.200.48.156:8080/')">
                        <img src="../../public/static/component/triangleDown.png" alt="triangle-icon" class="triangle-icon">
                        <span class="service-link">service link</span>
                    </div>
                    <img src="../../public/static/img/github.png" alt="github-icon" class="github-icon" @click="clickGithub('https://github.com/Whats-Your-DualMajor/main-service')">
                </div>
            </div>
            <div class="portfolio-item-content">
                <div class="project-content-wrap">
                    <img src="../../public/static/project/1/project1-1.png" alt="project-main-img" class="project-img" onclick="window.open(this.src)">
                    <div class="project-summary">
                        <span class="project-summary-title">서비스 소개</span>
                        <br/>
                        <span class="project-summary-content">한국외국어대학교에 개설되어있는 약 90여개의 전공들 중 학생 개인 성향과 희망 진로에 부합하는 전공을 추천해주고 해당 전공에 대한 이중전공 수강생이 필요로 하는 정보들을 제공하는 서비스입니다.</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- /프로젝트1 frame -->
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
        flex-direction: column;
        padding-top: 80px;
        height: calc(100vh - 90px); 
        margin-left: calc(5vw + 50px);
        margin-right: calc(5vw + 50px);
        justify-content: left;
    }
    .portfolio-total-container > .portfolio-item-wrap > .portfolio-item-title{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
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

    .portfolio-total-container > .portfolio-item-wrap > .portfolio-item-title > .project-link-wrap:hover{
        text-shadow: 0px 0px 3px #D9D9D9;
    }

    /*프로젝트 content frame*/
    .portfolio-total-container > .portfolio-item-wrap > .portfolio-item-content{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        margin-top: 30px;
    }
    .portfolio-total-container > .portfolio-item-wrap > .portfolio-item-content > .project-content-wrap{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    } 
    .portfolio-total-container > .portfolio-item-wrap > .portfolio-item-content > .project-content-wrap > .project-img{
        width: 600px;
    }
    .portfolio-total-container > .portfolio-item-wrap > .portfolio-item-content > .project-content-wrap > .project-summary{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        width: 500px;
        text-align: left;
    }

    .portfolio-total-container > .portfolio-item-wrap > .portfolio-item-content > .project-content-wrap > .project-summary > .project-summary-title{
        font-size: 20px;
        font-weight: bold;
    }
    .portfolio-total-container > .portfolio-item-wrap > .portfolio-item-content > .project-content-wrap > .project-summary > .project-summary-content{
        font-size: 12px;
    }

    /*폰트 형광펜 처리*/
    .font-highlight{
        box-shadow: inset 0 -2px 0 #78c4fa;
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