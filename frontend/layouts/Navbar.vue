<template>
  <div :class="['navbar-area', { 'is-sticky': isSticky }]">
    <div class="feliz-responsive-nav">
      <div class="container">
        <div class="feliz-responsive-menu">
          <div class="logo">
            <NuxtLink to="/" class="d-flex align-items-center">
              <img src="~/assets/images/teklick-logo.png" alt="logo" width="50px" />
             <h1 class="mb-0">Teklick</h1>
            </NuxtLink>
          </div>

          <div
            class="navbar-toggler"
            @click="active = !active"
            :aria-pressed="active ? 'true' : 'false'"
            v-bind:class="{ active: button_active_state }"
            v-on:click="button_active_state = !button_active_state"
          ></div>

          <div class="others-option others-option-two">
            <NuxtLink to="/contact" class="default-btn style-two">
              <span class="ri-edit-2-line"></span>
              Get A Free Quote
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <nav
      class="navbar navbar-expand-lg navbar-light"
      :class="{ toggler: active }"
    >
      <div class="container">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="/" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <NuxtLink to="/about-us" class="nav-link">About Us</NuxtLink>
            </li>
            <li class="nav-item megamenu">
              <a href="#" class="dropdown-toggle nav-link">Services</a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <NuxtLink to="/services" class="nav-link">
                    <img src="~/assets/images/icon/icon17.png" alt="image" />
                    Content Writing
                    <p>Learn the basics with expert resources.</p>
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/services-one" class="nav-link">
                    <img src="~/assets/images/icon/icon18.png" alt="image" />
                    Social Marketing
                    <p>Learn the basics with expert resources.</p>
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/services" class="nav-link">
                    <img src="~/assets/images/icon/icon19.png" alt="image" />
                    Email Marketing
                    <p>Learn the basics with expert resources.</p>
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/services-one" class="nav-link">
                    <img src="~/assets/images/icon/icon20.png" alt="image" />
                    Lead Guideline
                    <p>Learn the basics with expert resources.</p>
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/services" class="nav-link">
                    <img src="~/assets/images/icon/icon21.png" alt="image" />
                    Content Marketing
                    <p>Learn the basics with expert resources.</p>
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink to="/services-one" class="nav-link">
                    <img src="~/assets/images/icon/icon22.png" alt="image" />
                    Video Marketing
                    <p>Learn the basics with expert resources.</p>
                  </NuxtLink>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <NuxtLink to="/team" class="nav-link">Team</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/pricing" class="nav-link">Pricing</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/blog-vue" class="nav-link">Blog</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import 'remixicon/fonts/remixicon.css'

export default {
  name: 'NavBar',
  data() {
    return {
      isSticky: false,
      active: false,
      button_active_state: false,
    }
  },

  mounted() {
    const that = this
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY
      if (scrollPos >= 100) {
        that.isSticky = true
      } else {
        that.isSticky = false
      }
    })
  },
}
</script>
