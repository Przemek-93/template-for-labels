<template>
  <div>
    <footer class="py-3 bg-light footer">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="social-nav">
              <h4 class="heading">Follow us:</h4>
              <ul>
                <li>
                  <a href="https://www.facebook.com/flexilabels">
                    <img :src="buildImageUrlPic('facebook.png', 'footer')" alt="Facebook">
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/FlexiLabels">
                    <img :src="buildImageUrlPic('twitter.png', 'footer')"
                         alt="twitter">
                  </a>
                </li>
                <li><a href="http://www.linkedin.com/in/flexilabels"><img
                  :src="buildImageUrlPic('linkedin.png', 'footer')" alt="linkedin"></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                    async=""></script>
            <div style="margin-top: 20px; position: relative;" class="trustpilot-widget" data-locale="en-GB"
                 data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="4d80de1d00006400050f1ad2"
                 data-style-height="24px" data-style-width="100%" data-theme="light">
              <iframe title="Customer reviews powered by Trustpilot" loading="auto"
                      src="https://widget.trustpilot.com/trustboxes/5419b6a8b0d04a076446a9ad/index.html?templateId=5419b6a8b0d04a076446a9ad&amp;businessunitId=4d80de1d00006400050f1ad2#locale=en-GB&amp;styleHeight=24px&amp;styleWidth=100%25&amp;theme=light"
                      style="position: relative; height: 24px; width: 100%; border-style: none; display: block; overflow: hidden;"></iframe>
            </div>
          </div>
          <div class="col-md-6">
            <div class="security-information">
              <img :src="buildImageUrlPic('payment-icons.png', 'footer')" class="pull-right" alt="Secure payments">
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePageFooter',

  methods: {
    buildImageUrlPic(param, type) {
      return require(`assets/${type}/${param}`);
    }
  }
}
</script>

<style lang="scss">
.social-nav ul {
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    padding-right: 1rem;
  }
}

img {
  vertical-align: middle;
}

.security-information {
  padding-top: 1rem;
}

footer {
  position: relative;
  bottom: 0;
}
</style>
