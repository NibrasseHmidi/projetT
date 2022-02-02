<template>
    <footer class="footer-area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="single-footer-widget">
                        <NuxtLink to="/" class=" logo d-flex align-items-center">
                            <img src="~/assets/images/teklick-logo.png" alt="logo" width="50px">
                             <h1 class="mb-0">Teklick</h1>
                        </NuxtLink>
                        <div class="newsletter-form">
                            <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                            <form data-toggle="validator">
                                <input type="email" class="input-newsletter" placeholder="Enter your email" name="EMAIL" required autocomplete="off">
                                <button type="submit">Subscribe Now <i class="ri-send-plane-line"></i></button>
                                <div id="validator-newsletter" class="form-result"></div>
                            </form>
                        </div>
                        <ul class="social-links">
                            <li><a href="#" target="_blank"><i class="ri-facebook-fill"></i></a></li>
                            <li><a href="#" target="_blank"><i class="ri-twitter-fill"></i></a></li>
                            <li><a href="#" target="_blank"><i class="ri-linkedin-fill"></i></a></li>
                            <li><a href="#" target="_blank"><i class="ri-instagram-line"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-sm-6 col-md-6">
                    <div class="single-footer-widget">
                        <h3>Services</h3>
                        <ul class="services-links">
                            <li><NuxtLink to="/services">Marketing</NuxtLink></li>
                            <li><NuxtLink to="/services-one">Web Development</NuxtLink></li>
                            <li><NuxtLink to="/services">App Design</NuxtLink></li>
                            <li><NuxtLink to="/services-one">Product Branding</NuxtLink></li>
                            <li><NuxtLink to="/services">Content Writing</NuxtLink></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="single-footer-widget pl-5">
                        <h3>Quick Links</h3>
                        <ul class="quick-links">
                            <li><NuxtLink to="/">Home</NuxtLink></li>
                            <li><NuxtLink to="/about-us">About Us</NuxtLink></li>
                            <li><NuxtLink to="/work-style-one">Case Studies</NuxtLink></li>
                            <li><NuxtLink to="/blog">Our News</NuxtLink></li>
                            <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="single-footer-widget">
                        <h3>Contact Info</h3>
                        <ul class="footer-contact-info">
                            <li>Address: 2750, Quadra Street Victoria, Canada</li>
                            <li>Email: <a href="mailto:hello@feliz.com">hello@feliz.com</a></li>
                            <li>Phone: <a href="tel:+44587154756">+44 587 154756</a></li>
                            <li>Fax: <a href="tel:+44587154756">+55 58715 4756</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-sm-6 col-md-6">
                        <p>Copyright 2021 <strong>Feliz</strong>. All Rights Reserved by <a href="https://envytheme.com/" target="_blank">EnvyTheme</a></p>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-md-6">
                        <ul>
                            <li><NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink></li>
                            <li><NuxtLink to="/terms-conditions">Terms & Conditions</NuxtLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterTeklick'
}
</script>


