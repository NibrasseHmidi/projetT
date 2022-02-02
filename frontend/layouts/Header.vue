<template>
  <header class="header-area">
    <div class="top-header-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-6">
            <div class="top-header-start d-flex align-items-center">
              <NuxtLink to="/" class="logo d-flex align-items-center">
                <img src="~/assets/images/teklick-logo.png" alt="image" width="50px" />
                <h1 class="mb-0">Teklick</h1>
              </NuxtLink>
              <form class="search-box">
                <label><i class="ri-search-line"></i></label>
                <input
                  type="text"
                  class="input-search"
                  placeholder="Search here..."
                />
              </form>
            </div>
          </div>
          <div class="col-lg-5 col-md-6">
            <div class="top-header-end">
              <div class="d-flex align-items-center justify-content-end">
                <div class="number">
                  <a
                    href="tel:+1-485-456-0102"
                    class="d-flex align-items-center"
                    ><i class="ri-phone-line"></i> 00000000</a
                  >
                </div>
                <ul class="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank"
                      ><i class="ri-facebook-box-fill"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank"
                      ><i class="ri-twitter-fill"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank"
                      ><i class="ri-linkedin-box-fill"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank"
                      ><i class="ri-instagram-fill"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Navbar />
  </header>
</template>

<script>
import Navbar from '../layouts/Navbar'

export default {
  name: 'HeaderLayouts',

  components: {
    Navbar,
  },
}
</script>


