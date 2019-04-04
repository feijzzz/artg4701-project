<template>
    <div class="main-container">
        <Navigation buttonType='export'/>
        <div class="initial">
            <div class="card"> 
                <a @click="link1"><img class="body" src="../static/female/body/body-front.png"></a>
            </div>
            <div class="card"> 
                <a @click="link2">
                    <div class="symptoms"><img src="../static/symptoms.png"></div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation'
export default {
  name: 'Initial',
  components: {
      Navigation,
  },
  methods: {
      link1() {
        this.$router.push({ name: 'bodyparts1' });
      },
      link2() {
        this.$router.push({ name: 'symptoms2' });
      }
  }
}
</script>

<style lang="scss" scoped>
.initial {
    display: flex;
    align-items: center;    
    justify-content: space-evenly;
  margin-top: 55px;
}

.card {
    margin-top: 50%;
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
