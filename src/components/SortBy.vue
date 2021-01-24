<template>
  <div>
    <div class="filter-link sort-by" @click="isVisible = !isVisible">Sort by <span
        class="chevron-down">&#10095;</span>
      <div class="options card"
           v-if="isVisible"
      >
        <div class="arrow" style="left: 38px;"></div>
        <p v-for="sort in sortBy"
           :key="sort.name"
        >
          {{sort.name}}
        </p>
      </div>
    </div>

    <div class="filter-link sort-by-icon" href="#" @click="isVisible = !isVisible"><img :src="require('../assets/images/sort-by.svg')"
                                                        alt="sort-by"></div>
  </div>
</template>

<script>
  export default {
    name: "SortBy",
    props: {
      sortBy: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isVisible: false
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .sort-by {
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

  .sort-by-icon {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    .sort-by {
      display: none !important;
    }

    .sort-by-icon {
      display: block !important;
      margin-right: 0 !important;
    }
  }
</style>