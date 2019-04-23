<template>
    <div class="main-container">
        <Navigation />
        <div class="complete-container">
            <div class="file-wrapper">
                <img class="file" src="../static/file.png">
            </div>
            <h2> Sent to doctor </h2>
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation'
export default {
  name: 'Sent',
  components: {
    Navigation
  },
  methods: {
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

.main-container, .complete-container {
    display: flex;
    align-items: center;    
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
}
.complete-container {
    margin-top: 50%;
}

.file {
    &-wrapper {
        width: 100%;
    }
    width: 128px;
}
h2 {
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 0;
  width: 100%;
  margin-left: 20px;
  font-weight: normal;
}
</style>
