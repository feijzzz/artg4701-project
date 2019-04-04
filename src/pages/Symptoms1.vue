<template>
    <div class="main-container">
        <Navigation buttonType='human'/>
        <div class="body-container">
          <h2> select your symptoms </h2>
          <div v-if="this.$store.state.gender" class="cards-container">
            <button @click="addSymptom('acne')"><div class="card acne"><img src="../static/female/head/acne.png"></div></button>
            <button @click="addSymptom('blurred-vision')"><div class="card blurred-vision"><img src="../static/female/head/blurred-vision.png"></div></button>
            <button @click="addSymptom('bumps')"><div class="card bumps"><img src="../static/female/head/bumps.png"></div></button>
            <button @click="addSymptom('dizziness')"><div class="card dizziness"><img src="../static/female/head/dizziness.png"></div></button>
            <button @click="addSymptom('frequent-yawning')"><div class="card frequent-yawning"><img src="../static/female/head/frequent-yawning.png"></div></button>
            <button @click="addSymptom('headache')"><div class="card headache"><img src="../static/female/head/headache.png"></div></button>
            <button @click="addSymptom('increased-thirst')"><div class="card increased-thirst"><img src="../static/female/head/increased-thirst.png"></div></button>
            <button @click="addSymptom('lack-of-sleep')"><div class="card lack-of-sleep"><img src="../static/female/head/lack-of-sleep.png"></div></button>
            <button @click="addSymptom('moodiness')"><div class="card moodiness"><img src="../static/female/head/moodiness.png"></div></button>
            <button @click="addSymptom('nausea')"><div class="card nausea"><img src="../static/female/head/nausea.png"></div></button>
            <button @click="addSymptom('skin-discoloration')"><div class="card skin-discoloration"><img src="../static/female/head/skin-discoloration.png"></div></button>
            <button @click="addSymptom('vomiting')"><div class="card vomiting"><img src="../static/female/head/vomiting.png"></div></button>
          </div>

          <div v-else class="cards-containermale">
            <button @click="addSymptom('acne')"><div class="card acne"><img class="male" src="../static/male/head/acne.png"></div></button>
            <button @click="addSymptom('blurred-vision')"><div class="card blurred-vision"><img class="male" src="../static/male/head/blurred-vision.png"></div></button>
            <button @click="addSymptom('bumps')"><div class="card bumps"><img class="male" src="../static/male/head/bumps.png"></div></button>
            <button @click="addSymptom('dizziness')"><div class="card dizziness"><img class="male" src="../static/male/head/dizziness.png"></div></button>
            <button @click="addSymptom('frequent-yawning')"><div class="card frequent-yawning"><img class="male" src="../static/male/head/frequent-yawning.png"></div></button>
            <button @click="addSymptom('headache')"><div class="card headache"><img class="male" src="../static/male/head/headache.png"></div></button>
            <button @click="addSymptom('increased-thirst')"><div class="card increased-thirst"><img class="male" src="../static/male/head/increased-thirst.png"></div></button>
            <button @click="addSymptom('lack-of-sleep')"><div class="card lack-of-sleep"><img class="male" src="../static/male/head/lack-of-sleep.png"></div></button>
            <button @click="addSymptom('moodiness')"><div class="card moodiness"><img class="male" src="../static/male/head/moodiness.png"></div></button>
            <button @click="addSymptom('nausea')"><div class="card nausea"><img class="male" src="../static/male/head/nausea.png"></div></button>
            <button @click="addSymptom('skin-discoloration')"><div class="card skin-discoloration"><img class="male" src="../static/male/head/skin-discoloration.png"></div></button>
            <button @click="addSymptom('vomiting')"><div class="card vomiting"><img class="male" src="../static/male/head/vomiting.png"></div></button>
          </div>
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation'
export default {
  name: 'Symptoms1',
  components: {
    Navigation
  },
  data() {
    return {
      localSymptoms:[],
      currentPart: 'head',
    }
  },
  methods: {
    addSymptom(symp) {
      // //console.log(this.$store.state.selectedSymptoms);  
      // //console.log(this.localSymptoms);
      const repeatIndex = this.checkSymptom(symp, this.localSymptoms);
      const repeatIndexMaster = this.checkSymptom(symp, this.$store.state.selectedSymptoms);
      const symptom = document.getElementsByClassName(symp)[0];
      // console.log(repeatIndex, symptom);
      if (repeatIndex < 0) {
        this.localSymptoms.push(symp);
        symptom.classList.add('selected');
        if (repeatIndexMaster < 0) {
          const newList = this.$store.state.selectedSymptoms;
          newList[newList.length] = symp;
          this.$store.commit('mutateSelectedSymptoms', {selectedSymptoms: newList});
          // console.log(this.$store.state.selectedSymptoms); 

          // if (this.$store.state.selectedSymptoms.length === 0){
          //   console.log('here!');
          //   this.$store.commit('mutateSelectedSymptoms', {selectedSymptoms: [symp]});
          //   console.log(this.$store.state.selectedSymptoms); 
          // }
          // else {
          //   const newList = this.$store.state.selectedSymptoms;
          //   newList[newList.length] = symp;
          //   console.log('here?');
          //   this.$store.commit('mutateSelectedSymptoms', {selectedSymptoms: newList.push(symp)});
          //   console.log(this.$store.state.selectedSymptoms); 
          // }
        }
      }
      else {
        const filtered = this.localSymptoms.filter(function(value, index, arr){
          return index !== repeatIndex;
        });
        this.localSymptoms = filtered;
        symptom.classList.remove('selected');
        if (repeatIndexMaster > -1) {
          const mainFiltered = this.$store.state.selectedSymptoms.filter(function(value, index, arr){
            return index !== repeatIndexMaster;
          });
          this.$store.commit('mutateSelectedSymptoms', {selectedSymptoms: mainFiltered});
        }
      }
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
    // //console.log(this.$store.state);
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
  /* background-color: #f2f2f2; */
  overflow: hidden;

  &.selected {
    background-color: #1FA6C0;
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
