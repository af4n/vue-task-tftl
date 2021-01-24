<template>
  <main>
    <b-container>
      <h1>People</h1>
      <div class="filtering">
        <div class="filter">

          <Select :selected="selected"
                  :eyeColor="eyeColor"
                  @select="selectEyeColor"
          />

          <div class="filter-link slider" href="#" @click="isVisibleHeight = !isVisibleHeight">Height <span class="chevron-down">&#10095;</span>
          </div>
          <div class="slider-wrap">
            <div class="range-slider card" v-if="isVisibleHeight">
              <div class="height">
                <p>{{minHeight}} cm</p>
                <p>{{maxHeight}} cm</p>
              </div>
              <div class="height-bottom">
                <p>{{minHeight}} cm</p>
                <p>{{maxHeight}} cm</p>
              </div>
              <div class="range">
                <input type="range"
                       min="0"
                       max="202"
                       step="1"
                       v-model.number="minHeight"
                       @change="setRangeSliderHeight"
                >
                <input type="range"
                       min="0"
                       max="202"
                       step="1"
                       v-model.number="maxHeight"
                       @change="setRangeSliderHeight"
                >
              </div>
            </div>
          </div>


          <div class="filter-link" href="#" @click="isVisibleAge = !isVisibleAge">Age <span class="chevron-down" >&#10095;</span></div>

          <div class="slider-wrap">
            <div class="range-slider card" v-if="isVisibleAge">
              <div class="height">
                <p>{{minAge}} BBY</p>
                <p>{{maxAge}} BBY</p>
              </div>
              <div class="height-bottom">
                <p>{{minAge}} BBY</p>
                <p>{{maxAge}} BBY</p>
              </div>
              <div class="range">
                <input type="range"
                       min="0"
                       max="112"
                       step="1"
                       v-model.number="minAge"
                       @change="setRangeSliderAge"
                >
                <input type="range"
                       min="0"
                       max="112"
                       step="1"
                       v-model.number="maxAge"
                       @change="setRangeSliderAge"
                >
              </div>
            </div>
          </div>

        </div>
        <div class="sort">

          <SortBy :sortBy="sortBy"/>


        </div>
      </div>
    </b-container>

    <b-container class="cards">
      <Card v-for="person in filterPeople"
            :key="person.name"
            :person="person"
      />
    </b-container>

  </main>
</template>

<script>
  import Card from "./Card";
  import Select from "./Select";
  import SortBy from "./SortBy";
  import {mapActions, mapGetters} from "vuex";

  export default {
    name: "Main",
    components: {Card, Select, SortBy},
    data() {
      return {
        person: [],
        eyeColor: [
          {color: 'blue'},
          {color: 'blue-gray'},
          {color: 'brown'},
          {color: 'red'},
          {color: 'yellow'},
        ],
        selected: '',
        sortedPeople: [],
        minHeight: 0,
        maxHeight: 202,
        isVisibleHeight: false,
        minAge: 0,
        maxAge: 112,
        isVisibleAge: false,
        sortBy: [
          {name: 'age'},
          {name: 'mass'},
          {name: 'height'},
        ]
      }
    },
    computed: {
      ...mapGetters([
        'people'
      ]),
      filterPeople() {
        if (this.sortedPeople.length) {
          return this.sortedPeople
        } else {
          return this.people
        }
      }
    },
    methods: {
      ...mapActions([
        'getPeople'
      ]),
      selectEyeColor(eyes) {
        let vm = this
        this.sortedPeople = []
        this.people.map(function (item) {
          if (item.eye_color === eyes.color) {
            vm.sortedPeople.push(item)
          }
        })
      },
      rangeSliderHeight() {
        let vm = this
        this.sortedPeople = [...this.people]
        this.sortedPeople = this.sortedPeople.filter(function (h) {
          return h.height >= vm.minHeight && h.height <= vm.maxHeight
        })
      },
      rangeSliderAge() {
        let vm = this
        this.sortedPeople = [...this.people]
        this.sortedPeople = this.sortedPeople.filter(function (b) {
          return b.birth_year >= vm.minAge && b.birth_year <= vm.maxAge
        })
      },
      setRangeSliderHeight() {
        if (this.minHeight > this.maxHeight) {
          let tmp = this.maxHeight
          this.maxHeight = this.minHeight
          this.minHeight = tmp
        }
        this.rangeSliderHeight()
      },
      setRangeSliderAge() {
        if (this.minAge > this.maxAge) {
          let tmp = this.maxAge
          this.maxAge = this.minAge
          this.minAge = tmp
        }
        this.rangeSliderAge()
      }
    },
    mounted() {
      this.getPeople()
        .then((response) => {
          if (response.data) {
            this.selectEyeColor()
          }
        })
    }
  }
</script>

<style scoped lang="scss">
  main {
    padding-top: 64px;

    h1 {
      font-size: 32px;
      line-height: 148%;
    }

    .filtering {
      margin-top: 34px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgba(0, 0, 0, 0.8);
      margin-bottom: 40px;

      .filter {
        display: flex;

        .filter-link {
          margin-right: 40px;
          cursor: pointer;
          margin-bottom: 0;

          .slider {
            position: relative;
            margin-right: 40px;
            cursor: pointer;
            margin-bottom: 0;

          }
        }
      }

      .slider-wrap {
        position: relative;

        .range-slider {
          width: 250px;
          margin: auto 16px;
          text-align: center;
          position: absolute;
          padding: 20px;
          z-index: 1;
          right: -60px;
          top: 30px;
          box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
          &::before {
            content: url('../assets/images/arrow.png');
            display: block;
            width: 9px;
            height: 12px;
            position: absolute;
            top: -6px;
            left: 50%;
            box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04);
          }
          svg, input[type=range] {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 194px;
          }

          input[type=range]::-webkit-slider-thumb {
            z-index: 2;
            position: relative;
            top: 2px;
            margin-top: -7px;
          }

          .height {
            display: flex;
            justify-content: space-around;
            p {
              width: 100px;
              border: 1px solid rgba(0, 0, 0, 0.08);
              box-sizing: border-box;
              border-radius: 6px;
              padding-top: 8px;
              padding-left: 12px;
              padding-bottom: 9px;
              display: flex;
              justify-content: flex-start;
              font-weight: 100;
              line-height: 180%;
              color: #000000;
              opacity: 0.8;
            }
          }

          .height-bottom {
            display: flex;
            justify-content: space-between;
            font-weight: 100;
            line-height: 180%;
            color: #000000;
            opacity: 0.8;
          }

          .range {
            position: relative;
          }

        }

        .range-value {
          padding: 8px;

          p {
            margin: 0;
          }
        }
      }
    }

    .sort {
      p {
        cursor: pointer;
        margin-bottom: 0;
      }

      .sort-by-icon {
        display: none;
      }
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 112px;
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .popover-body {
    width: 100px !important;
    padding: 12px 20px !important;
  }

  @media only screen and (max-width: 600px) {
    .filter-link {
      margin-right: 24px !important;
    }
    .sort-by {
      display: none !important;
    }

    .sort-by-icon {
      display: block !important;
      margin-right: 0 !important;
    }

    .cards {
      margin-bottom: 80px;
    }
  }
</style>