<template>
    <div class="maincontent-wrap">
        <img id="picture-profile" src="../../../public/static/img/picture_profile.jpg" alt="이미지_정재윤">
        <div class="slogun-wrap">
            <span class="slogun-word">성실함을 무기로,</span>
            <span class="slogun-word">개선과 창조를 만들어가는 개발자</span>
            <div class="icon-wrap">
                <img src="../../../public/static/img/github.png" alt="github" class="icon" @click="ClickGithub"/>
                <img src="../../../public/static/img/instagram.png" alt="instagram" class="icon" @click="ClickInstagram"/>
                <img src="../../../public/static/img/gmail.png" alt="gmail" class="icon" @click="ClickGmail"/>
                <textarea id="gmailAddress" hidden>rangyun36@gmail.com</textarea>
            </div>
        </div>
    </div>
</template>
<script>
export default{

    //컴포넌트 이름
    name: 'MainContent',
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
        ClickGithub(){
            window.open("https://github.com/Againyunn");
        },
        ClickInstagram(){
            window.open("https://www.instagram.com/again_yunn/");
        },
        ClickGmail(){
            var content = document.getElementById('gmailAddress').innerHTML;
    
            navigator.clipboard.writeText(content)
            .then(() =>{
                this.$swal.fire({
                    text: '이메일이 복사되었습니다.',
                    showCancelButton: false,
                    confirmButtonText: `확인`,
                    confirmButtonColor: '#2B90D9',
                })
            })
            .catch((e)=>{
                console.log("이메일 복사 오류:",e);
            })
        }
    },
    
}
</script>
<style scoped>
    .maincontent-wrap{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .maincontent-wrap > #picture-profile{
        margin-right: 10px;
        width: 300px;
        margin-right: 80px;
    }
    .maincontent-wrap > .slogun-wrap{
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: nowrap;
        width: 600px;
        text-align: left;
    }
    .maincontent-wrap > .slogun-wrap > .slogun-word{
        font-size: 35px;
    }
    .maincontent-wrap > .slogun-wrap > .icon-wrap{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        margin-top: 20px;
        cursor: pointer;
    }
    .maincontent-wrap > .slogun-wrap > .icon-wrap > img{
        width: 50px;
        margin-right: 50px;
        border-radius: 100%;
    }

    /*icon-hover 효과*/
    .maincontent-wrap > .slogun-wrap > .icon-wrap > img:hover{
        box-shadow: 0px 0px 15px 3px #78c4fa;
    }

    /*태블릿 메인콘텐츠 스타일*/
    @media (max-width: 960px) {
        .maincontent-wrap{
            margin-top: 100px;
            margin-bottom: 100px;
            margin-left: 2vw;
            margin-right: 2vw;
        }
        .maincontent-wrap > #picture-profile{
            margin-right: 20px;
            width: 300px;
        }
        .maincontent-wrap > .slogun-wrap > .slogun-word{
            font-size: 26px;
        }
        .maincontent-wrap > .slogun-wrap > .icon-wrap{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            margin-top: 30px;
        }
    }

    /*모바일1 & 모바일2 메인콘텐츠 스타일*/
    @media (max-width: 600px) {
        .maincontent-wrap{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .maincontent-wrap > #picture-profile{
            margin-right: 0px;
            width: 250px;
        }
        .maincontent-wrap > .slogun-wrap{
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-wrap: nowrap;
            width: auto;
            text-align: left;
            margin-top: 20px;
        }
        .maincontent-wrap > .slogun-wrap > .slogun-word{
            font-size: 20px;
        }
        .maincontent-wrap > .slogun-wrap > .icon-wrap{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            margin-top: 20px;
            margin-bottom: 30px;
            justify-content: space-evenly;
        }
        .maincontent-wrap > .slogun-wrap > .icon-wrap > img{
            width: 50px;
            border-radius: 100%;
            margin-right: 0px;
        }
    }
    /*모바일3 헤더 스타일*/
    @media (max-width: 480px) {
        .maincontent-wrap > .slogun-wrap > .icon-wrap{
            margin-bottom: 20px;
        }
    }

    /*모바일3 헤더 스타일*/
    @media (max-width: 300px) {
        .maincontent-wrap > .slogun-wrap > .slogun-word{
            font-size: 15px;
            font-weight: bold;
        }
        .maincontent-wrap > .slogun-wrap > .icon-wrap > img{
            width: 40px;
            border-radius: 100%;
        }
    }

</style>