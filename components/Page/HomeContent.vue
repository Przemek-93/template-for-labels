<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div class="card mb-4">
          <VueSlickCarousel :arrows="true" :dots="true" v-if="posts.length">
            <div v-for="post in posts">
              <img class="card-img-top" :src="buildImageUrlPic(post.slide, 'slider')" :alt="post.slide">
              <div class="card-body">
                <h4>{{ post.title }}</h4>
                <div>{{ post.content }}</div>
                <div>{{ post.content2 }}</div>
                <a v-if="post.buttonPath" :href="buildSliderButtonUrl(post.buttonPath)">
                  <button class="slider-button btn btn-primary standard-blue-btn">{{ post.buttonContent }}</button>
                </a>
              </div>
            </div>
          </VueSlickCarousel>
          <br>
        </div>
        <div class="card mb-4 latest-work-section">
          <h4>Latest Work</h4>
          <p>At Flexi Labels, we offer full colour (CMYK) digital and waterproof (solvent) printed labels at competitive
            prices with fast turnaround. All printed labels are inspected at various stages for quality control and
            quality assurance purpose so you get best out of your spend. Whether it's a small job or large production
            run, every label has to go through the same process. Please see below a selection of some work we have
            done:</p>
          <div class="row">
            <div class="col-lg-4">
              <img class="latest-work-image" :src="buildImageUrlPic('1-work.jpg', 'latest work')" alt="1-work">
            </div>
            <div class="col-lg-4">
              <img class="latest-work-image" :src="buildImageUrlPic('2-work.jpg', 'latest work')" alt="2-work">
            </div>
            <div class="col-lg-4">
              <img class="latest-work-image" :src="buildImageUrlPic('3-work.jpg', 'latest work')" alt="3-work">
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-lg-4">
              <img class="latest-work-image" :src="buildImageUrlPic('4-work.jpg', 'latest work')" alt="4-work">
            </div>
            <div class="col-lg-4">
              <img class="latest-work-image" :src="buildImageUrlPic('5-work.jpg', 'latest work')" alt="5-work">
            </div>
            <div class="col-lg-4">
              <img class="latest-work-image" :src="buildImageUrlPic('6-work.jpg', 'latest work')" alt="6-work">
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-lg-4">
              <img class="latest-work-image" :src="buildImageUrlPic('7-work.jpg', 'latest work')" alt="7-work">
            </div>
            <div class="col-lg-4">
              <img class="latest-work-image" :src="buildImageUrlPic('8-work.jpg', 'latest work')" alt="8-work">
            </div>
            <div class="col-lg-4">
              <img class="latest-work-image" :src="buildImageUrlPic('9-work.jpg', 'latest work')" alt="9-work">
            </div>
          </div>
        </div>
      </div>
      <CategoriesWidget/>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import CategoriesWidget from "@/components/Widgets/CategoriesWidget";

export default {
  name: 'HomeContent',
  components: {CategoriesWidget, VueSlickCarousel},
  data() {
    return {
      posts: [
        {
          title: 'Try before you buy it',
          content: 'If you are not sure how a particular label is going to look like on your product,',
          content2: 'you can order a sample pack free of charge.',
          slide: '1-slide.jpeg',
          buttonPath: 'sample-labels-request',
          buttonContent: 'Request free samples'
        },
        {
          title: 'Labels to suit every application',
          content: 'When it comes to producing custom shape labels and size, you can rely on us,',
          content2: 'Please click on custom labels quotation button to get our prices and lead time',
          slide: '2-slide.svg',
          buttonPath: 'custom-labels-request',
          buttonContent: 'Custom Labels Quote'
        },
        {
          title: 'Recyclable labels',
          content: 'Do your bit for the environment and try our recyclable material for your labels.',
          content2: 'Fully recycled and completely recyclable, this material is perfect to take the step forward towards a brighter future.',
          slide: '3-slide.svg'
        }
      ],
    }
  },

  methods: {
    buildSliderButtonUrl(param) {
      return process.env.sliderButtonsUrl + param;
    },

    buildImageUrlPic(param, type) {
      return require(`assets/${type}/${param}`);
    }
  }
}
</script>

<style lang="scss">
.slider-button {
  float: right;
}

.latest-work-section {
  padding: 1rem 1rem;

  .latest-work-image {
    max-width: 100%;
    border-radius: 0.25rem;
  }
}
</style>
