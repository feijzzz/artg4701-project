<template>
  <div class="main-container">
      <Navigation />

      <div v-if="this.$store.state.gender" class="body-container">
        <div @click="addParts('head')"><img class="body" v-bind:class="{front: isFront}" src="../static/female/body/body-front.png"></div>
        <div class="overlay-front" v-bind:class="{display: isFront}">
          <div @click="addParts('head')"><img class="head" src="../static/female/body/head-overlay.png"></div>
        </div>
        <div class="overlay-back" v-bind:class="{display: !isFront}">
          <!-- <div @click="addParts('head')"><img class="head" src="../static/female/body/head-overlay.png"></div> -->
        </div>
        <div><img class="body" v-bind:class="{back: !isFront}" src="../static/female/body/body-back.png"> </div>
      </div>


      <div v-else class="body-container">
        <div @click="addParts('head')"><img class="body" v-bind:class="{front: isFront}" src="../static/male/body/body-front.png"></div>
        <div class="overlay-front" v-bind:class="{display: isFront}">
          <div @click="addParts('head')"><img class="head" src="../static/female/body/head-overlay.png"></div>
        </div>
        <div class="overlay-back" v-bind:class="{display: !isFront}">
          <!-- <div @click="addParts('head')"><img class="head" src="../static/female/body/head-overlay.png"></div> -->
        </div>
        <div><img class="body" v-bind:class="{back: !isFront}" src="../static/male/body/body-back.png"> </div>
      </div>

      <div class="next-container">
        <a class="back-link" @click="backStep"><img class="back-button" src="../static/button/back.svg"></a>
        <a class="switch-link" @click="updateFront" > <img class="switch-button" src="../static/button/switch.svg"> </a>
        <a @click="updateStore"><img class="next-button" src="../static/button/complete.svg"></a>
      </div>
    </div>
</template>

<script>
// import Selector from '../components/Selector'
import Navigation from '../components/Navigation'

export default {
  name: 'BodyParts',
  components: {
    Navigation,
  },
  data() {
    return {
      localParts: [],
      isFront: true,
    }
  },
  methods: {
    addBodypart() {
      document.getElementsByClassName('body')[0].classList.add('selected');
      // console.log(document.getElementsByClassName('body')[0].src);
      // document.getElementsByClassName('body')[0].src = "../static/female/body-head.png";
      // this.$store.state.bodyparts.push('head');
    },
    addParts(part) {
      const repeatIndex = this.checkSymptom(part, this.localParts);
      const partt = document.getElementsByClassName(part)[0];
      // // console.log(repeatIndex, partt);
      if (repeatIndex < 0) {
        this.localParts.push(part);
        partt.classList.add('selected');
      }
      else {
        const filtered = this.localParts.filter(function(value, index, arr){
          return index !== repeatIndex;
        });
        this.localParts = filtered;
        partt.classList.remove('selected');
      }
      // // console.log(this.localParts);
      // selectedSymptoms.push(symp);
      // this.$store.commit('addSelectedSymptoms', selectedSymptoms);
      // console.log(this.$store.state.symptoms);
    },
    checkSymptom(value, array) {
      if (array === []) {
        return -1;
      }
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.toLowerCase() === value.toLowerCase()) {
          return index;
        }
      }
      return -2;
    },
    updateStore() {
      // console.log(this.$store.state.selectedBodyParts);
      // this.$store.commit('addSelectedBodyParts', { selectedBodyParts: ['head'] });
      // console.log(this.$store.state.selectedBodyParts);
      this.$router.push({ name: 'results' });
    },
    backStep() {
      this.$router.push({ name: 'symptoms2' });
    },
    updateFront() {
      this.isFront = !this.isFront;
    }
  },
  mounted() {
    window.addEventListener('mouseup', this.addBodypart, event);
  },
  beforeDestroy() {
    window.removeEventListener('mouseup', this.addBodypart);
  },
}
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  align-items: center;    
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 55px;
}

.selector-wrapper {
  margin-bottom: 20px;
}

.overlay{
  &-front, &-back {
    img {
      height: 550px;
    }
  }
}

.head {
  z-index: 5;
  position: fixed;
  top: 85px;
  left: 138.4px;
  display: none;

  &.selected {
    display: block;
  }
}

.body {
    height: 550px;
    display: none;
    margin-left: auto;
    margin-right: auto;

    &-container {
      width: 100%;
      margin-top: 30px;
    }

    &.front {
      display: block;
    }

    &.back {
      display: block;
    }
}


.next{
  &-container{
    width: 100%;
    top: 93vh;
    right: 20px;
    position: fixed;
    display: flex;
    justify-content: flex-end;

    .disabled {
      pointer-events: none;
      cursor: default;
    }
  }

  &-button {
    height: 35px;
  }
}

.back {
  &-link {
    margin-right: auto;
    margin-left: 40px;
  }
  &-button {
    height: 35px;
  }
}

.switch{
  &-link{
    margin-right: auto;
  }

  &-button {
    height: 35px;
  }
}

</style>
