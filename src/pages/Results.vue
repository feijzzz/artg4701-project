<template>
    <div class="main-container">
        <Navigation buttonType='export'/>
        <h2> Symptoms </h2>
        <div class="cards-container">
            <div class="card-add" @click="linkNew"><img src="../static/button/add.svg"></div>
            <div v-for="(value, i) in this.$store.state.selectedSymptoms" 
                class="card" 
                :class="value"
                :key="i">
                <img v-if="value==='acne'" src="../static/female/head/acne.png">
                <img v-if="value==='blurred-vision'" src="../static/female/head/blurred-vision.png">
                <img v-if="value==='bumps'" src="../static/female/head/bumps.png">
                <img v-if="value==='dizziness'" src="../static/female/head/dizziness.png">
                <img v-if="value==='frequent-yawning'" src="../static/female/head/frequent-yawning.png">
                <img v-if="value==='headache'" src="../static/female/head/headache.png">
                <img v-if="value==='increased-thirst'" src="../static/female/head/increased-thirst.png">
                <img v-if="value==='lack-of-sleep'" src="../static/female/head/lack-of-sleep.png">
                <img v-if="value==='moodiness'" src="../static/female/head/moodiness.png">
                <img v-if="value==='nausea'" src="../static/female/head/nausea.png">
                <img v-if="value==='skin-discoloration'" src="../static/female/head/skin-discoloration.png">
                <img v-if="value==='vomiting'" src="../static/female/head/vomiting.png">
          
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
      }
  },
  mounted() {
    // console.log(this.$store.state);
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

    img {
    width: 150%;
    margin-left: -30px;
    }
}
</style>
