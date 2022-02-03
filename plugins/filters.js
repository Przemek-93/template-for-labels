import Vue from 'vue'

Vue.filter('stripHTML', function (value) {
  const div = document.createElement('div')
  div.innerHTML = value
  const text = div.textContent || div.innerText || ''
  return text
});

Vue.filter('getFormatByPath', function (param) {
  if (param && param.indexOf('-') > -1) {
    return param.split('-')[0].toUpperCase()
  }

  return 'A4';
});

Vue.filter('buildImageUrlByFileName', function (param) {
  return process.env.imageUrl + param;
});

Vue.filter('buildProductStoreUrl', function (categorySlug, productSlug) {
  return `${process.env.apiURL}/${categorySlug}/${productSlug}`;
});

Vue.filter('buildProductTemplateDownloadsUrl', function (param) {
  return process.env.downloadsTemplateUrl + param;
});

