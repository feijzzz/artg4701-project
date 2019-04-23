<template>
    <div class="main-container">
        <Navigation />
        <div class="selector-wrapper"><Selector /></div>
            <div v-if="this.$store.state.gender" class="initial">
                <div class="card"> 
                    <a @click="link1"><img class="body" src="../static/female/body/body-front.png"></a>
                </div>
                <div class="card"> 
                    <a @click="link2">
                        <div class="symptoms"><img src="../static/symptoms-female.png"></div>
                    </a>
                </div>
            </div>
            <div v-else class="initial">
                <div class="card"> 
                    <a @click="link1"><img class="body" src="../static/male/body/body-front.png"></a>
                </div>
                <div class="card"> 
                    <a @click="link2">
                        <div class="symptoms"><img src="../static/symptoms-male.png"></div>
                    </a>
                </div>
            </div>
        <!-- </div> -->

          <div v-if="this.$store.state.selectedSymptoms.length !== 0" class="next-container">
            <a class="back-link" @click="backStep"><img class="back-button" src="../static/button/back.svg"></a>
            <!-- <a class="switch-link" @click="updateFront" > <img class="switch-button" src="../static/button/switch.svg"> </a>
            <a class="disabled" ref="nextButton" @click="updateStore"><img class="next-button" src="../static/button/complete.svg"></a> -->
          </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation';
import Selector from '../components/Selector';

export default {
  name: 'Initial',
  components: {
      Navigation,
      Selector,
  },
  methods: {
      link1() {
        this.$router.push({ name: 'bodyparts1' });
      },
      link2() {
        this.$router.push({ name: 'symptoms2' });
      },
        backStep() {
        this.$router.push({ name: 'results' });
        },
  }
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

.body-container, .next-container {
  display: flex; 
  align-items: center; 
  flex-wrap: wrap;
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
  &-link {
    margin-right: auto;
    margin-left: 40px;
  }

  &-button {
    height: 35px;
  }
}

.initial {
  width: 100%;
  display: flex;
  align-items: center;    
  justify-content: space-evenly;
  margin-top: -25px;
}

.selector-wrapper {
  margin-bottom: 10px;
//   margin-top: 30px;
}

.card {
    margin-top: 40%;
    height: 270px;
    width: 175px;
    /* border: 1px solid #000000; */
    border-radius: 5px;
    background: #ffffff;
    color: #000000;

    .body {
        height:270px;
        width: auto;
    }

    .symptoms {
        height:270px;
        width: 175px;

        img {
            width: 175px;
            padding-top: 12px;
        }
    }

}
</style>
