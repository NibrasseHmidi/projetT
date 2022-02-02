<template>
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content text-center">
                <h1>{{pageMainTitle}}</h1>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li>{{pageTitle}}</li>
                </ul>
            </div>
        </div>
        <div class="shape1"><img src="~/assets/images/shape/shape1.png" alt="image"></div>
        <div class="shape3"><img src="~/assets/images/shape/shape2.png" alt="image"></div>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: ['pageMainTitle', 'pageTitle']
}
</script>
