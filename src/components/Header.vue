<template>
  <header>
    <div class="navbar">
      <b-container>
        <div class="header-logo">
          <img :src="require('../assets/images/StarWarsHeader.png')" alt="Star Wars">
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link language" href="#">En <span class="chevron-down">&#10095;</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link log-in" href="#">Log in</a>
          </li>
          <li class="nav-item">
            <a class="sign-up" href="#">Sign up</a>
          </li>
          <li class="nav-item">
            <a class="menu" href="#"><img :src="require('../assets/images/menu.svg')" alt="Menu"></a>
          </li>
        </ul>
      </b-container>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss">
  .navbar {
    height: 80px;
    background: #F2EEEE;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.03);
    &-nav {
      display: flex;
      flex-direction: row!important;
      .nav-item {
        display: flex;
        justify-content: center;
        align-items: center;

        .nav-link {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 104%;
          color: #000000;
          margin-left: 57px;
        }

        .sign-up {
          background: #FF634A;
          border-radius: 6px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 16px 56px;
          color: #FFFFFF;
          text-decoration: none;
          margin-left: 43px;
          &:hover {
            opacity: 0.9;
            box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.03);
          }
        }

        .menu {
          display: none;
        }
      }
    }
  }


  @media only screen and (max-width: 600px) {
    .navbar {
      background: #FFFFFF;
      box-shadow: none;
      .language {
        display: none;
      }
      .sign-up {
        display: none!important;
      }
      .menu {
        display: block!important;
        margin-left: 48px;
      }
    }
  }
</style>
