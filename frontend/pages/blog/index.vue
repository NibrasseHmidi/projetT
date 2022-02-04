<template>
  <div>
    <Header/>
    <PageTitle pageMainTitle="Our Latest Blog" pageTitle="Blog" />
    <BlogContet/>
  </div>
</template>
<script>
import Header from "../../layouts/Header.vue";
import PageTitle from "../../components/Common/PageTitle.vue";


export default{
    components: { Header, PageTitle }
}
</script>
