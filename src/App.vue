<template>
  <div id="app">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import Main from "./components/Main";
  import Footer from "./components/Footer";
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  export default {
    components: {Footer, Main, Header}
  }
</script>

<style lang="scss">
  @font-face {
    font-family: "HelveticaRegular";
    font-weight: normal;
    src: url('./assets/fonts/HelveticaRegular/HelveticaRegular.eot') format('eot'),
    url('./assets/fonts/HelveticaRegular/HelveticaRegular.ttf') format('ttf'),
    url('./assets/fonts/HelveticaRegular/HelveticaRegular.woff') format('woff');
  }
  @font-face {
    font-family: "HelveticaThin";
    font-weight: normal;
    src: url('./assets/fonts/HelveticaThin/HelveticaThin.eot') format('eot'),
    url('./assets/fonts/HelveticaThin/HelveticaThin.ttf') format('ttf'),
    url('./assets/fonts/HelveticaThin/HelveticaThin.woff') format('woff');
  }

  #app {
    font-family: HelveticaRegular, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 104%;
    color: #000000;
  }

  .navbar {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .container {
    max-width: 1232px !important;
    padding-right: 8px !important;
    padding-left: 8px !important;
  }

  .chevron-down {
    align-items: center;
    display: inline-block;
    justify-content: center;
    margin-left: auto;
    text-align: center;
    width: 20px;
    transform-origin: center center;
    transform: rotate(90deg);
  }

  .col-lg-6 {
    padding: 8px !important;
  }

  @media only screen and (max-width: 768px) {
    .container {
      padding-right: 18px !important;
      padding-left: 18px !important;
    }
    .col-12 {
      padding: 18px !important;
    }
  }
</style>