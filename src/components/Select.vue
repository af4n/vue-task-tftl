<template>
  <div>
    <div class="filter-link select" @click="isVisible = !isVisible">Eye color <span
        class="chevron-down">&#10095;</span>
      <div class="options card"
           v-if="isVisible"
      >
        <div class="arrow" style="left: 38px;"></div>
        <p v-for="eyes in eyeColor"
           :key="eyes.color"
           @click="select(eyes)"
        >
          {{eyes.color}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Select",
    props: {
      eyeColor: {
        type: Array,
        default() {
          return []
        }
      },
      selected: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isVisible: false
      }
    },
    methods: {
      select(eyes) {
        this.$emit('select', eyes)
        console.log(eyes)
      }
    }
  }
</script>

<style scoped lang="scss">
  .select {
    position: relative;
    margin-right: 40px;
    cursor: pointer;
    margin-bottom: 0;

    .options {
      position: absolute;
      top: 30px;
      right: 0;
      width: 101px;
      z-index: 1;
      padding-top: 12px;
      padding-left: 20px;
      box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
      &::before {
        content: url('../assets/images/arrow.png');
        display: block;
        width: 9px;
        height: 12px;
        position: absolute;
        top: -6px;
        right: 45px;
        box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
      }
    }
  }
</style>