<template>
  <div class="app">
    <HeaderLayer/>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import HeaderLayer from './components/HeaderLayer.vue';

export default {
  name: "App",
  components:{
    HeaderLayer,
  },
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    $route(to, from) {
      if(to.meta.page == null || from.meta.page == null){
        this.transitionName = "fade";
      }else{
        this.transitionName = to.meta.page > from.meta.page ? "next" : "prev";
      }
      console.log(this.transitionName);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* 전환효과 (Slide) */
.next-leave-to { animation: leaveToLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1); z-index: 0; }
.next-enter-to { animation: enterFromRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1); z-index: 1; }
.prev-leave-to { animation: leaveToRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1); z-index: 1; }
.prev-enter-to { animation: enterFromLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1); z-index: 0; }
@keyframes leaveToLeft { from { transform: translateX(0); } to { transform: translateX(-25%); filter: brightness(0.5); } }
@keyframes enterFromLeft { from { transform: translateX(-25%); filter: brightness(0.5); } to { transform: translateX(0); } }
@keyframes leaveToRight { from { transform: translateX(0); } to { transform: translateX(100%); } }
@keyframes enterFromRight { from { transform: translateX(100%); } to { transform: translateX(0); } }

/* 전환효과 (Fade) */
.fade-enter-active, .fade-leave-active { transition: opacity 1s; }
.fade-enter, .fade-leave-to { opacity: 0; }
</style>
