<template>
    <div class="main-container">
        <Navigation buttonType='export'/>
        <h2> Symptoms </h2>
        <div v-if="this.$store.state.gender" class="cards-container">
            <div class="card-add" @click="linkNew"><img src="../static/button/add.svg"></div>
            <div v-for="(value, i) in this.$store.state.selectedSymptoms" 
                class="card" 
                :class="value"
                :key="i">
                <button v-if="value==='acne'" @click="selectSymptom('acne')">
                  <button class="remove" @click="updateStore('acne')"><img class="remove-button" src="../static/button/complete.svg"></button>
                  <div class="acne">
                    <img class="female" src="../static/female/head/acne.png">
                  </div>
                </button>
                <button v-if="value==='blurred-vision'" @click="selectSymptom('blurred-vision')"><div class="blurred-vision"><img class="female" src="../static/female/head/blurred-vision.png"></div></button>
                <button v-if="value==='bumps'" @click="selectSymptom('bumps')"><div class="bumps"><img class="female" src="../static/female/head/bumps.png"></div></button>
                <button v-if="value==='dizziness'" @click="selectSymptom('dizziness')"><div class="dizziness"><img class="female" src="../static/female/head/dizziness.png"></div></button>
                <button v-if="value==='frequent-yawning'" @click="selectSymptom('frequent-yawning')"><div class="frequent-yawning"><img class="female" src="../static/female/head/frequent-yawning.png"></div></button>
                <button v-if="value==='headache'" @click="selectSymptom('headache')"><div class="headache"><img class="female" src="../static/female/head/headache.png"></div></button>
                <button v-if="value==='increased-thirst'" @click="selectSymptom('increased-thirst')"><div class="increased-thirst"><img class="female" src="../static/female/head/increased-thirst.png"></div></button>
                <button v-if="value==='lack-of-sleep'" @click="selectSymptom('lack-of-sleep')"><div class="lack-of-sleep"><img class="female" src="../static/female/head/lack-of-sleep.png"></div></button>
                <button v-if="value==='moodiness'" @click="selectSymptom('moodiness')"><div class="moodiness"><img class="female" src="../static/female/head/moodiness.png"></div></button>
                <button v-if="value==='nausea'" @click="selectSymptom('nausea')"><div class="nausea"><img class="female" src="../static/female/head/nausea.png"></div></button>
                <button v-if="value==='skin-discoloration'" @click="selectSymptom('skin-discoloration')"><div class="skin-discoloration"><img class="female" src="../static/female/head/skin-discoloration.png"></div></button>
                <button v-if="value==='vomiting'" @click="selectSymptom('vomiting')"><div class="vomiting"><img class="female" src="../static/female/head/vomiting.png"></div></button>
              </div>
        </div>

        <div v-else class="cards-container">
            <div class="card-add" @click="linkNew"><img src="../static/button/add.svg"></div>
            <div v-for="(value, i) in this.$store.state.selectedSymptoms" 
                class="card" 
                :class="value"
                :key="i">
                <button v-if="value==='acne'" @click="selectSymptom('acne')">
                  <div class="acne"><img class="male" src="../static/male/head/acne.png"></div>
                </button>
                <button v-if="value==='blurred-vision'" @click="selectSymptom('blurred-vision')"><div class="blurred-vision"><img class="male" src="../static/male/head/blurred-vision.png"></div></button>
                <button v-if="value==='bumps'" @click="selectSymptom('bumps')"><div class="bumps"><img class="male" src="../static/male/head/bumps.png"></div></button>
                <button v-if="value==='dizziness'" @click="selectSymptom('dizziness')"><div class="dizziness"><img class="male" src="../static/male/head/dizziness.png"></div></button>
                <button v-if="value==='frequent-yawning'" @click="selectSymptom('frequent-yawning')"><div class="frequent-yawning"><img class="male" src="../static/male/head/frequent-yawning.png"></div></button>
                <button v-if="value==='headache'" @click="selectSymptom('headache')"><div class="headache"><img class="male" src="../static/male/head/headache.png"></div></button>
                <button v-if="value==='increased-thirst'" @click="selectSymptom('increased-thirst')"><div class="increased-thirst"><img class="male" src="../static/male/head/increased-thirst.png"></div></button>
                <button v-if="value==='lack-of-sleep'" @click="selectSymptom('lack-of-sleep')"><div class="lack-of-sleep"><img class="male" src="../static/male/head/lack-of-sleep.png"></div></button>
                <button v-if="value==='moodiness'" @click="selectSymptom('moodiness')"><div class="moodiness"><img class="male" src="../static/male/head/moodiness.png"></div></button>
                <button v-if="value==='nausea'" @click="selectSymptom('nausea')"><div class="nausea"><img class="male" src="../static/male/head/nausea.png"></div></button>
                <button v-if="value==='skin-discoloration'" @click="selectSymptom('skin-discoloration')"><div class="skin-discoloration"><img class="male" src="../static/male/head/skin-discoloration.png"></div></button>
                <button v-if="value==='vomiting'" @click="selectSymptom('vomiting')"><div class="vomiting"><img class="male" src="../static/male/head/vomiting.png"></div></button>
              </div>
        </div>
        <!-- <img v-if="this.$store.state.symptoms.length !== 0" v-for="symptom in this.$store.state.symptoms"> -->
            <!-- <img class="card symptoms" alt="Vue logo" src="../static/logo.png">
            <img class="card body" src="../static/logo.png"> -->
    </div>
</template>

<script>
import Navigation from '../components/Navigation'
export default {
  name: 'Results',
  components: {
    Navigation
  },
  methods: {
    linkNew() {
      this.$router.push({ name: 'initial' });
    },
    getImageUrl(val) {
      return require.context(`../static/female/head/${val}.png`);
    },
    selectSymptom(symp) {
      const symptom = document.getElementsByClassName(symp)[0];
      const selected = document.getElementsByClassName('selected');
      if (selected.length === 0) {
        symptom.classList.add('selected');
      }
      else {
        if (selected[0].classList[1] === symp) {
          symptom.classList.remove('selected');
        }
      }
    },
    updateStore(symp){
      // const sympList = this.$store.state.selectedSymptoms;
      console.log('here');
      const repeatIndexMaster = this.checkSymptom(symp, this.$store.state.selectedSymptoms);
      
      const mainFiltered = this.$store.state.selectedSymptoms.filter(function(value, index, arr){
        return index !== repeatIndexMaster;
      });
      this.$store.commit('mutateSelectedSymptoms', {selectedSymptoms: mainFiltered});
      console.log(this.$store.state.selectedSymptoms);
      this.$router.push({ name: 'results' });
    },
    checkSymptom(value, array) {
      if (array.length === 0) {
        return -1;
      }
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.toLowerCase() === value.toLowerCase()) {
          return index;
        }
      }
      return -2;
    }
  },
  mounted() {
    console.log(this.$store.state);
    // console.log(this.$store.state.selectedBodyParts);
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  margin-top: 55px;
}

.main-container, .cards-container {
    display: flex;
    align-items: center;    
    justify-content: flex-start;
    flex-wrap: wrap;
}

h2 {
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 0;
  width: 100%;
  text-align: left;
  margin-left: 20px;
  font-weight: normal;
}

.cards-container {
  margin-left: 20px;

  .card:nth-child(odd) {
    margin-right: 20px;
  }

  button {
    padding: 0;

    &:focus {
      outline: none;
    }
  }
}

.card {
    margin-top: 15px;
    height: 270px;
    width: 175px;
    border-radius: 15px; 
    background-color: #ffffff;
    overflow: hidden;
    
    &-add {
        margin-top: 15px;
        margin-right: 20px;
        height: 270px;
        width: 175px;
        border-radius: 15px;
        background-color: #1FA6C0;
        display: flex;
        align-items: center;    
        justify-content: center;
        img {
            height: 95px;
            width: 95px;
        }
    }

    .remove {
      display: none;
    }

    &.selected {
      // background-color: #1FA6C0;

      .remove {
        display: block;
        width: 20px;
        z-index: 5;
        margin-left: 92%;
        margin-top: 20px;
      }

      img {
        margin-top: -35px;
      }
    }

    img {
      width: 150%;
      margin-left: -30px;

      &.male {
        margin-left: -50px; 
      }
    }
}
</style>
