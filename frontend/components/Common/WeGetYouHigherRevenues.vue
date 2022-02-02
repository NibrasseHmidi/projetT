<template>
    <div class="case-studies-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">OUR CASE STUDIES</span>
                <h2>We Get you Higher Revenues, Not just Higher Ranks</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <carousel
                :autoplay = "true"
                :autoplayTimeout = "2500"
                :loop = "true"
                :paginationEnabled = "false"
                :perPageCustom = "[[0, 1]]"
                :perPage="1"
                :speed = "1000"
                :navigationEnabled = "true"
                navigationNextLabel="<i class='ri-arrow-right-s-line'></i>"
                navigationPrevLabel="<i class='ri-arrow-left-s-line'></i>"
                class="case-studies-slides owl-carousel owl-theme"
            >
                <slide>
                    <div class="single-case-studies-box">
                        <div class="row align-items-center m-0">
                            <div class="col-lg-6 col-md-12 p-0">
                                <div class="content">
                                    <div class="logo">
                                        <img src="~/assets/images/case-studies/elan.png" alt="image">
                                    </div>
                                    <h3><NuxtLink to="/work-details">eLan Education</NuxtLink></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                    <ul class="features-list">
                                        <li>
                                            <span>FRAMEWORK</span>
                                            <NuxtLink to="/work-style-one">WordPress</NuxtLink>
                                        </li>
                                        <li>
                                            <span>CATEGORY</span>
                                            <NuxtLink to="/work-style-two">Education</NuxtLink>
                                        </li>
                                        <li>
                                            <span>WEB LINK</span>
                                            <a href="#" target="_blank">www.elan.com</a>
                                        </li>
                                    </ul>
                                    <NuxtLink to="/work-details" class="default-btn"><span class="ri-arrow-right-s-line"></span>View More</NuxtLink>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 p-0">
                                <div class="image">
                                    <img src="~/assets/images/case-studies/case-studies1.png" alt="image">
                                </div>
                            </div>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-case-studies-box">
                        <div class="row align-items-center m-0">
                            <div class="col-lg-6 col-md-12 p-0">
                                <div class="content">
                                    <div class="logo">
                                        <img src="~/assets/images/case-studies/startp.png" alt="image">
                                    </div>
                                    <h3><NuxtLink to="/work-details">StartP Startup</NuxtLink></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                    <ul class="features-list">
                                        <li>
                                            <span>FRAMEWORK</span>
                                            <NuxtLink to="/work-style-two">React.js</NuxtLink>
                                        </li>
                                        <li>
                                            <span>CATEGORY</span>
                                            <NuxtLink to="/work-style-three">Startup</NuxtLink>
                                        </li>
                                        <li>
                                            <span>WEB LINK</span>
                                            <a href="#" target="_blank">www.startp.com</a>
                                        </li>
                                    </ul>
                                    <NuxtLink to="/work-details" class="default-btn"><span class="ri-arrow-right-s-line"></span>View More</NuxtLink>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 p-0">
                                <div class="image">
                                    <img src="~/assets/images/case-studies/case-studies2.png" alt="image">
                                </div>
                            </div>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-case-studies-box">
                        <div class="row align-items-center m-0">
                            <div class="col-lg-6 col-md-12 p-0">
                                <div class="content">
                                    <div class="logo">
                                        <img src="~/assets/images/case-studies/edmo.png" alt="image">
                                    </div>
                                    <h3><NuxtLink to="/work-details">Edmo Marketing</NuxtLink></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                    <ul class="features-list">
                                        <li>
                                            <span>FRAMEWORK</span>
                                            <NuxtLink to="/work-style-one">Moodle</NuxtLink>
                                        </li>
                                        <li>
                                            <span>CATEGORY</span>
                                            <NuxtLink to="/work-style-two">Marketing</NuxtLink>
                                        </li>
                                        <li>
                                            <span>WEB LINK</span>
                                            <a href="#" target="_blank">www.edmo.com</a>
                                        </li>
                                    </ul>
                                    <NuxtLink to="/work-details" class="default-btn"><span class="ri-arrow-right-s-line"></span>View More</NuxtLink>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 p-0">
                                <div class="image">
                                    <img src="~/assets/images/case-studies/case-studies3.png" alt="image">
                                </div>
                            </div>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>
        <div class="shape7"><img src="~/assets/images/shape/shape5.png" alt="image"></div>
        <div class="shape8"><img src="~/assets/images/shape/shape6.png" alt="image"></div>
    </div>
</template>

<script>
export default {
    name: 'WeGetYouHigherRevenues'
}
</script>
