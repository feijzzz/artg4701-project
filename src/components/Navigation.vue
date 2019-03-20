<template>
    <div class="nav-container">
        <div class="nav">
            <a href="./results"> <img class="nav-logo" alt="Vue logo" src="../static/logo-placeholder.svg"></a>
            <div class="nav-title"> Signa </div>
            <button class="nav-right" v-if="buttonType==='export'">
                <img  src="../static/button/export.svg">
            </button>
            <button v-if="buttonType==='human'" class="nav-right human-button" @click="toggleSection">
                <img v-if="sectionVisible" src="../static/button/human-grey.svg" ref="humanButton">
                <img v-else src="../static/button/human.svg">
            </button>
            <button v-if="!buttonType" class="nav-right placeholder"></button>
        </div>
        <div class="nav-section" :class="{'nav-section-visible': sectionVisible}" ref="navSection">
            <div class="nav-section-part">
                <img class="part-img" src="../static/female/parts/head.svg">
            </div>
            <div class="nav-section-button">
              <a @click="linkIt">
                <img class="complete-button" src="../static/button/complete-grey.svg">
              </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    buttonType: String,
  },
  data() {
      return {
          sectionVisible: false,
      }
  },
  methods: {
    // buttonSelect: function() {
    //   if (this.$props.buttonType) {
    //       console.log("here");
    //     return `require('../static/button/${this.$props.buttonType}.svg')`
    //   }
    //   return "";
    // },
    toggleSection: function() {
        // if (this.sectionVisible) {

        // }
        this.sectionVisible = !this.sectionVisible;
        // //console.log(this.sectionVisible);
    },
    fixedBody() {
    //   if (this.sectionVisible) {
    //     this.body.style.overflow = 'hidden';
    //   } else {
    //     this.body.style.overflow = 'auto';
    //   }
    },
    outsideBox(event) {
      const { navSection, humanButton } = this.$refs;
      if (this.sectionVisible) {
        if (event.target !== navSection && event.target !== humanButton) {
          this.sectionVisible = !this.sectionVisible;
          this.fixedBody();
        }
      }
    },
    linkIt() {
      this.$router.push({ name: 'results' });
    }
  },
  mounted() {
    window.addEventListener('mouseup', this.outsideBox, event);
  },
  beforeDestroy() {
    window.removeEventListener('mouseup', this.outsideBox);
  },
}
</script>
<style lang="scss" scoped>
.nav {
    height: 55px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #579789;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 5;

    &-container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
    }

    &-logo {
        height: 35px;
        vertical-align: middle;
        padding-left: 20px;
        margin-right: auto;
    }

    &-title {
        color:#ffffff;
        font-size: 22px;
        // margin-right: auto;
        margin-left: auto;
    }

    &-right {
        height: 35px;
        width: 50px;
        vertical-align: middle;
        margin-right: 15px;
        margin-left: auto;
    }

    &-section {
        background-color: #60C2AB;
        width: 310px;
        height: 93vh;
        display: none;
        flex-wrap: wrap;
        justify-content: center;
        z-index: 5;
        overflow-y: scroll;

        &-visible {
            display: flex;
            position: fixed;
            top: 55px;
        }

        &-part {
            background-color: #C9D0D2;
            width: 270px;
            height: 120px;
            border-radius: 5px;
            margin-top: 20px;

            .part-img {
                height: 100px;
                margin: 10px 0;
            }
        }

        &-button {
            width: 100%;
            height: 35px;
            display: flex;
            justify-content: flex-end;
            position: absolute;
            top: 85vh;
            left: 0;

            .complete-button {
                height: 35px;
                margin-right: 15px;
            } 
        }
    }
}

button {
    &:focus {
        outline: none;
    }
}
</style>
