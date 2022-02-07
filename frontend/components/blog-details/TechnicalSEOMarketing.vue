<template>
  <div class="blog-details-area ptb-100">
    <div class="container">
      <div
        class="blog-details-header row align-items-center justify-content-center"
      >
        <div class="col-lg-6 col-md-12">
          <div class="content">
            <h1>{{ blog.title }}</h1>
            <p>{{ blog.content }}</p>
            <div class="post-author-meta">
              <div class="d-flex align-items-center">
                <img src="~/assets/images/user/user1.jpg" alt="image" />
                <div class="title">
                  <span class="name">
                    By
                    <NuxtLink to="/blog">EnvyTheme</NuxtLink>
                  </span>
                  <span class="date">March 17, 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="image">
            <img
              :src="   `http://localhost:1337` + blogimage"
              alt="image"
            />
          </div>
        </div>
      </div>
      <div class="blog-details-desc">
        <div class="article-content">
          <ul class="social-links">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="facebook"
              >
                <i class="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" class="twitter">
                <i class="ri-twitter-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                class="linkedin"
              >
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                class="instagram"
              >
                <i class="ri-instagram-line"></i>
              </a>
            </li>
          </ul>

          <div class="comment-respond">
            <h3 class="comment-reply-title">Leave A Reply</h3>
            <form class="comment-form">
              <p class="comment-notes">
                Your email address will not be published. Required fields are
                marked
                <span class="required">*</span>
              </p>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="form-group">
                    <label>Name *</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Eg: Sarah Taylor"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="hello@sarah.com"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="form-group">
                    <label>Website</label>
                    <input
                      type="text"
                      name="website"
                      class="form-control"
                      placeholder="Website"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="form-group">
                    <label>Comment</label>
                    <textarea
                      name="message"
                      class="form-control"
                      cols="30"
                      rows="5"
                      placeholder="Comment..."
                    ></textarea>
                  </div>
                </div>
                <div class="col-lg-4 col-md-5 col-sm-12">
                  <button type="submit" class="default-btn">
                    <span class="ri-arrow-right-s-line"></span>Post A Comment
                  </button>
                </div>
                <div class="col-lg-8 col-md-7 col-sm-12">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="checkme"
                    />
                    <label class="form-check-label" for="checkme"
                      >Save my name, email, and website in this browser for the
                      next time I comment.</label
                    >
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const blogQuery = gql`
  query blog($id: ID!) {
    blog(id: $id) {
      data {
        id

        attributes {
          title
          views
          content
          date
          slug

          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`
export default {
  name: 'TechnicalSEOMarketing',


async fetch() {
  const blogresult = await this.$apolloProvider.defaultClient.query({
    query: blogQuery,
    variables: { id: this.routeParam },
  })

  this.blog = blogresult.data.blog.data.attributes
  this.blogimage = blogresult.data.blog.data.attributes.image.data[0].attributes.url
   console.log(this.blog);
    console.log(this.blogimage);

},
  data() {
    return {
      blog: {},
      routeParam: this.$route.params.id,
    }
  },

  //   async fetch() {

  //       this.blog = await this.$apollo.query({
  //         query: blogQuery,
  //         variables: { id: this.routeParam },
  //       })
  //     }

  //   },
  // },

  // mounted() {
  //     console.log(this.blog);
  // },
//   apollo: {
//     $loadingKey: 'loading',
//     blog: {
//       query: blogQuery,
//  prefetch: ({ route }) => ({ id: route.params.id }),
//       variables() {
//         return {
//           id:  this.$route.params.id,
//         }
//       },
//     },
//   },
}
</script>
