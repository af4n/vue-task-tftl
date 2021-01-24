<template>
  <div class="footer">
    <b-container>
      <div class="footer-topline">
        <div class="footer-logo">
          <img :src="require('../assets/images/StarWarsFooter.png')" alt="Star Wars">
        </div>
        <div class="footer-social">
          <span href="#"><img :src="require('../assets/images/facebook.svg')" alt="Facebook"></span>
          <span href="#"><img :src="require('../assets/images/instagram.svg')" alt="Instagram"></span>
        </div>
      </div>

      <div class="footer-bottomline">
        <p>All rights Reserved.</p>
        <a href="#">Privacy Policy</a>
      </div>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss">
  .footer {
    min-height: 195px;
    background: #F2EEEE;
    padding-top: 43px;
    &-topline {
      display: flex;
      justify-content: space-between;
    }
    &-social {
      display: flex;
      span {
        display: flex;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: #FF634A;
        border-radius: 6px;
        margin-left: 16px;
        cursor: pointer;
        &:hover {
          opacity: 0.9;
          box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.03);
        }
      }
    }
    &-bottomline {
      display: flex;
      justify-content: space-between;
      margin-top: 65px;
      p, a {
        font-family: HelveticaThin, sans-serif;
        font-style: normal;
        font-weight: 300;
        line-height: 180%;
        color: #100F0F;
        letter-spacing: 1px;
      }
      a {
        text-decoration: none;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .footer {
      &-topline {
        display: flex;
        flex-direction: column;
      }
      &-social {
        margin-top: 24px;
        span:first-child {
          margin-left: 0;
        }
      }
      &-bottomline {
        margin-top: 40px;
      }
    }
  }
</style>