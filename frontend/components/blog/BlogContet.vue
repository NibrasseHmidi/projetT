<template>
    <div class="blog-area ptb-100">
        <div class="container">
            <div class="row justify-content-center">
                <div  v-for="blog in blogs.data" :key="blog.id" class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-blog-post">
                        <div   class="image">
                            <NuxtLink   to="/blog-details"  class="d-block" >
                                <!-- <img src="~/assets/images/blog/blog1.jpg" alt="image"> -->
                                    <img :src="`http://localhost:1337` + blog.attributes.image.data.attributes.url" alt="image"/>
                            </NuxtLink>
                            <span class="date">{{blog.attributes.date}}</span>
                        </div>
                        <div class="content">
                            <h3><NuxtLink to="/blog-details">{{blog.attributes.title}}</NuxtLink></h3>

                            <p>{{blog.attributes.content}}</p>
                            <NuxtLink to="/blog-details" class="default-btn"><span class="ri-arrow-right-s-line"></span>Read More</NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="pagination-area">
                        <div class="nav-links">
                            <span class="page-numbers current">1</span>
                            <a href="#" class="page-numbers">2</a>
                            <a href="#" class="page-numbers">3</a>
                            <a href="#" class="next page-numbers" title="Next Page"><i class="ri-arrow-right-line"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag';
// import axios from 'axios';

const blogQuery = gql `
  query blogQuery {
blogs{
  data{
    attributes{
    title
   views
    content
      date
      image{data{attributes{url}}}



  }}
}
}
`;


export default {
  name: 'BlogContet',
  data (){
        return {
            blogs:"",
            error:null,
            loading: 0,
        }
    },
  apollo: {
       $loadingKey: "loading",
    characters: {
      query: blogQuery,
      prefetch: true,
    },
  },

  //   async mounted () {
  //   try {
  //     const response = await axios.get('http://localhost:1337/api/blogs?populate=*')
  //     this.blogs = response.data

  //   } catch (error) {
  //     this.error = error;
  //   }
  // },


}
</script>
