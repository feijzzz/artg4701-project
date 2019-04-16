<template>
    <div class="main-container">
        <Navigation />
        <div class="body-container">
          <!-- <div class="selector-wrapper">
            <Selector />
          </div> -->
          <h2> select your symptoms </h2>
          <div v-if="this.$store.state.gender">
            <div class="cards-container">
              <a @click="addSymptom('acne')" ><div class="card"><img src="../static/female/head/acne.png"></div></a>
              <a @click="addSymptom('bumps')"><div class="card"><img src="../static/female/head/bumps.png"></div></a>
              <a @click="addSymptom('skin-discoloration')" ><div class="card"><img src="../static/female/head/skin-discoloration.png"></div></a>
            </div>
          </div>
          <div v-else>
            <div class="cards-container">
              <a @click="addSymptom('acne')" ><div class="card"><img class="male" src="../static/male/head/acne.png"></div></a>
              <a @click="addSymptom('bumps')"><div class="card"><img class="male" src="../static/male/head/bumps.png"></div></a>
              <a @click="addSymptom('skin-discoloration')" ><div class="card"><img class="male" src="../static/male/head/skin-discoloration.png"></div></a>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation';
// import Selector from '../components/Selector';

export default {
  name: 'Symptoms1',
  components: {
    Navigation, 
    // Selector
  },
  methods: {
    addSymptom(symp) {
      // const repeatIndex = this.checkSymptom(symp, this.localSymptoms);
      const repeatIndexMaster = this.checkSymptom(symp, this.$store.state.selectedSymptoms);
      const symptom = document.getElementsByClassName(symp)[0];
      // symptom.classList.add('selected');
      if (repeatIndexMaster < 0) {
        const newList = this.$store.state.selectedSymptoms;
        newList[newList.length] = symp;
        this.$store.commit('mutateSelectedSymptoms', {selectedSymptoms: newList});
      }
      this.$router.push({ name: 'bodyparts2' });
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
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  margin-top: 55px;
}

.body-container, .main-container, .cards-container {
  width: 100%;
  display: flex;
  align-items: center;    
  // justify-content: space-evenly;
  flex-wrap: wrap;
}

h2 {
  // text-transform: uppercase; 
  margin-top: 20px;
  margin-bottom: 0;
  width: 100%;
  text-align: left;
  margin-left: 20px;
  font-weight: normal;
  font-size: 18px;
}

.selector-wrapper {
  margin-left: 10px;
  margin-top: -10px;
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
  // background-color: #f2f2f2;x
}

img {
  width: 150%;
  margin-left: -30px;

  &.male {
    margin-left: -50px;
  }
}
</style>
