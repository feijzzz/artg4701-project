<template>
    <div class="main-container">
        <Navigation />
        <div class="selector-wrapper"><Selector /></div>
        <div class="body-container">
            <div @click="addParts('head')"><img class="body" src="../static/female/body.png"></div>
            <div class="overlay">
              <div @click="addParts('head')"><img class="head" src="../static/female/head-overlay.png"></div>
            </div>
        </div>
        <div class="next-container">
          <a class="back" @click="backStep"><img class="back-button" src="../static/button/back.svg"></a>
          <a class="disabled" ref="nextButton" @click="updateStore"><img class="next-button" src="../static/button/complete.svg"></a>
        </div>
    </div> 
</template>

<script>
import Selector from '../components/Selector'
import Navigation from '../components/Navigation'
import { nextTick } from 'q';

export default {
  name: 'BodyParts',
  components: {
    Navigation,
    Selector,
  },
  data() {
    return {
      localParts: [],
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
      const { nextButton } = this.$refs;
      const repeatIndex = this.checkSymptom(part, this.localParts);
      const partt = document.getElementsByClassName(part)[0];
      // //console.log(repeatIndex, partt);
      if (repeatIndex < 0) {
        this.localParts.push(part);
        partt.classList.add('selected');
        nextButton.classList.remove('disabled');
        // this.updateStore();
      }
      else {
        const filtered = this.localParts.filter(function(value, index, arr){
          return index !== repeatIndex;
        });
        this.localParts = filtered;
        partt.classList.remove('selected');
        if (this.localParts.length === 0) {
          nextButton.classList.add('disabled');
        }
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
      this.$store.commit('addSelectedBodyParts', { selectedBodyParts: ['head'] });
      // console.log(this.$store.state.selectedBodyParts);
      this.$router.push({ name: 'symptoms1' });
    },
    backStep() {
      this.$router.push({ name: 'initial' });
    }
    // insideBox(event) {
    //   const { nextButton } = this.$refs;
    //   if (event.target.contains(nextButton)) {
    //     if (this.localParts.length === 0) {
    //       console.log(nextButton.classList);
    //       nextButton.classList.remove('disabled');
    //     }
    //     else {
    //       nextButton.classList.add('disabled');
    //     }
    //   }
    // },
  },
  mounted() {
    // window.addEventListener('mouseup', this.insideBox, event);
  },
  beforeDestroy() {
    // window.removeEventListener('mouseup', this.insideBox);
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

.overlay {
  img {
    height: 550px;
  }
}

.head {
  z-index: 5;
  position: fixed;
  top: 143.5px;
  left: 138.4px;
  display: none;

  &.selected {
    display: block;
  }
}

.body {
    height: 550px;

    &-container {
      width: 100%;
    }
}


.next{
  &-container{
    width: 100%;
    top: 93vh;
    right: 20px;
    position: fixed;
    height: 35px;
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
  margin-right: auto;
  margin-left: 40px;
  &-button {
    height: 35px;
  }
}
</style>
