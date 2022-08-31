<template>
    <div class="header-wrap">
        <!-- 헤더 -->
        <header class="header-basic" v-if="headerChanged === false"> 
            <div class="main-logo" @click="moveToMain()">
                <span class="big-font">Againyunn</span>
                <span class="small-font">FrontEnd Dev</span>
            </div>
        </header>

        <header class="header-changed" v-else> 
            <div class="main-logo-changed">
                <span class="big-font">Againyunn</span>
                <span class="small-font">FrontEnd Dev</span>
            </div>
        </header>
        <!-- 메뉴 토글 -->
        <div id="menu-toggle">
            <input type="checkbox" id="toggle" :checked="headerChanged==false?false:true" @click="clickedMenu" hidden> 
            <span class="menu-font">{{menuFont}}</span>

            <label for="toggle" class="toggleSwitch">
                <span class="toggleButton"></span>
            </label> 
        </div>
    </div>
</template>

<script>
export default{
    //컴포넌트 이름
    name: 'HeaderLayer',
    //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
    components:{

        }, 
    //html과 JS코드에서 사용할 데이터 변수 선언
    data(){ 
        return{
            menuFont: "메뉴",
            // headerBasic: true,
            headerChanged: false,
        };
    },
    //컴포넌트 내에서 사용할 메소드 정의
    methods: {
        clickedMenu(){
            let initailMeunuFont = this.menuFont;
            if(initailMeunuFont === "메뉴"){
                this.menuFont = "닫기";
                this.headerChanged = true;

                this.menuToggleStatus = true;
                // this.menuChecked.checked = false;

                //메뉴 창으로 이동
                this.$router.push('/MenuActived')
            }
            else{
                this.headerChanged = false;
                this.menuFont = "메뉴";

                this.menuToggleStatus = false;
                // this.menuChecked.checked = true;

                //과거 페이지로 복귀
                history.go(-1)
            }
        },
        moveToMain(){
            //메인 페이지로 이동
            this.$router.push('/')
        },
        resetMenuToggle(action){
            if(action === true){
                // let checkbox = document.getElementById('toggle');
                // console.log("header:",checkbox);
                // checkbox.checked = action;
                // this.menuChecked.checked = true;
                this.headerChanged = false;
                this.menuFont = "메뉴";
            }
        }

    },
    computed: {
        
        ShowMenuModal(){
            if(this.menuFont === "닫기"){
                return true
            }
            else{
                return false
            }
        },
    },
    watch: {
        
    }
}
</script>
<style scoped>

    /*기본 헤더 스타일*/
    .header-basic{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;

        height: 90px;
        border-bottom: 2px solid #2B90D9;
    }

    .main-logo{
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        cursor: pointer;
    }
    .main-logo > .big-font{
        font-size: 32px;
        font-weight: bold;
    }
    .main-logo > .small-font{
        font-size: 25px;
        font-weight: bold;
    }

    /*메뉴 토글 활성화 헤더 스타일*/
    .header-changed{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        background: #2B90D9;
        border-bottom: 2px solid #FFF;

        height: 90px;
    }

    .main-logo-changed{
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
    }
    .main-logo-changed > .big-font{
        font-size: 32px;
        font-weight: bold;
        color: #FFF;
    }
    .main-logo-changed > .small-font{
        font-size: 25px;
        font-weight: bold;
        color: #FFF;
    }

    /*메뉴 토글*/
    #menu-toggle{
        position: absolute;
        z-index: 1;
        top: 1em;
        right: 1em;
    }

    .toggleSwitch {
        width: 8rem;
        margin: 2rem;
        height: 3rem;
        display: block;
        position: relative;
        border-radius: 2rem;
        background-color: #fff;
        box-shadow: 0 0 1rem 3px rgba(0 0 0 / 15%);
        cursor: pointer;
    }

    .toggleSwitch .toggleButton {
        width: 2.6rem;
        height: 2.6rem;
        position: absolute;
        top: 50%;
        left: .2rem;
        transform: translateY(-50%);
        border-radius: 50%;
        background: #2B90D9;
        box-shadow: 0px 0px 5px 1.5px #0070B0 inset;
    }

    .menu-font{
        color: #2B90D9;
        font-size: 15px;
        font-weight: bold;
        position: absolute;
        z-index: 2;
        top: 3em;
        right: 5.5em;
    }

    /* 체크박스가 체크되면 변경 이벤트 */
    #toggle:checked ~ .toggleSwitch {
        background: #f03d3d;
    }

    #toggle:checked ~ .toggleSwitch .toggleButton {
        left: calc(100% - 2.8rem);
        background: #fff;
        box-shadow: 0px 0px 4px 2px #D9E1E8 inset;
    }

    #toggle:checked ~ .menu-font {
        color: #FFF;
    }

    .toggleSwitch, .toggleButton, .menu-font {
        transition: all 0.2s ease-in;
    }

    /*토글 버튼 hover효과*/
    .toggleButton:hover{
        box-shadow: 0px 0px 15px 3px #78c4fa;
    }

    @media (max-width: 600px) {
        /*모바일1 헤더 스타일*/
        .header-basic{
            height: 70px;
        }
        .main-logo{
            margin-left: 8px;
        }
        .main-logo > .big-font{
            font-size: 26px;
        }
        .main-logo > .small-font{
            font-size: 20px;
        }
        
        /*메뉴 토글 활성화 헤더 스타일*/
        .header-changed{
            height: 70px;
        }

        .main-logo-changed{
            margin-left: 8px;
        }
        .main-logo-changed > .big-font{
            font-size: 26px;
        }
        .main-logo-changed > .small-font{
            font-size: 20px;
        }
        
        /*메뉴 토글*/
        #menu-toggle{
            top: 1.2em;
            right: 1em;
        }

        .toggleSwitch {
            width: 6rem;
            margin: 1.5rem;
            height: 2.2rem;
        }

        .toggleSwitch .toggleButton {
            width: 1.8rem;
            height: 1.8rem;
        }

        .menu-font{
            font-size: 12px;
            z-index: 2;
            top: 2.7em;
            right: 5em;
        }

        /* 체크박스가 체크되면 변경 이벤트 */
        #toggle:checked ~ .toggleSwitch .toggleButton {
            left: calc(100% - 2em);
        }
    }



</style>