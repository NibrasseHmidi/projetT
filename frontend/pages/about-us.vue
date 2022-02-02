<template>
    <div>
        <Header />

<PageTitle pageMainTitle="About Us" pageTitle="About Us" />
 <WeAreAwardWinning/>
    </div>
</template>

<script>
import Header from '../layouts/Header'
import PageTitle from '../components/Common/PageTitle.vue'
import WeAreAwardWinning from '../components/about/WeAreAwardWinning.vue'

export default {
    components: {
    Header,
    PageTitle,
    WeAreAwardWinning
}
}
</script>
