<template>
<div>
    <Nuxt />
    <Footer/>
    <GoTop/>
</div>
</template>
<script>
import Footer from "./Footer.vue";
import GoTop from "./GoTop.vue";
export default {
    name: "LayoutesDefault",
    components: { Footer, GoTop }
}
</script>
