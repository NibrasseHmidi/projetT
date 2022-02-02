<template>
  <div>
  <Header/>
  <MainBanner/>
  <WeAreAwardWinning/>
    <WeGetYouHigherRevenues />

  </div>
</template>

<script>

import Header from "../layouts/Header.vue";
import MainBanner from "../components/index/MainBanner.vue";
import WeAreAwardWinning from "../components/about/WeAreAwardWinning.vue";
import WeGetYouHigherRevenues from "../components/Common/WeGetYouHigherRevenues.vue";

// window.addEventListener('offline',()=>{
// alert("mafamech net")
// })
// window.addEventListener('online',()=>{
// alert("fama net")
// })


export default {
    name: "IndexPage",
    components: { Header, MainBanner, WeAreAwardWinning, WeGetYouHigherRevenues },

}
</script>
