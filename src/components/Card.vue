<template>
  <div class="col-lg-6 col-md-6 col-12">
    <b-card
        overlay
        :img-src="require(`../assets/images/` + person.name + `.jpg`)"
        img-alt="Image"
        tag="article"
        text-variant="white"
        style="max-width: 608px;"
        class="mb-2"
        img-height="410px"
    >
      <b-card-sub-title>
        {{person.birth_year}}
      </b-card-sub-title>
      <b-card-title>
        {{person.name}}
      </b-card-title>
      <div class="descriptions">
        <b-card-text>
          Eye color : {{person.eye_color}}
        </b-card-text>
        <b-card-text>
          Height : {{person.height}}
        </b-card-text>
        <b-card-text>
          Mass : {{person.mass}}
        </b-card-text>
      </div>

    </b-card>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      person: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .card {
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 0 !important;

    .card-img {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.1) 100%);
    }

    .card-body {
      padding: 21px 24px;

      .text-muted {
        color: #FFFFFF !important;
        opacity: 0.8;
      }

      .card-title {
        font-size: 24px;
        line-height: 148%;
        margin-top: 8px;
        margin-bottom: 8px;

      }

      .descriptions {
        display: flex;

        .card-text {
          line-height: 180%;
          margin-right: 24px;
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .card {
      width: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    .card-body {
      margin: 0 auto 10px auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      .descriptions {
        .card-text {
          margin-right: 16px !important;
        }
      }
    }
  }

</style>