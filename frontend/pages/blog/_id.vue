<template>
    <div>
 <Header/>
 <TechnicalSEOMarketing/>
 <LetsTalkSomething/>
    </div>
</template>
<script>
import Header from "../../layouts/Header.vue";
import TechnicalSEOMarketing from "../../components/blog-details/TechnicalSEOMarketing.vue";
import LetsTalkSomething from "../../components/Common/LetsTalkSomething.vue";

export default{
    components: { Header, TechnicalSEOMarketing, LetsTalkSomething }
}
</script>
