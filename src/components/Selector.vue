<template>
    <div v-if="this.$store.state.selectedSymptoms.length === 0" class="selector"> 
        <div @click="switchGender(false)" class="selector-option" v-bind:class="{selected: !this.gender}">Male</div>
        <div @click="switchGender(true)" class="selector-option" v-bind:class="{selected: this.gender}">Female</div> 
    </div>
    <div v-else class="selector"> 
        <div class="selector-option" v-bind:class="{selected: !this.gender}">Male</div>
        <div class="selector-option" v-bind:class="{selected: this.gender}">Female</div> 
    </div>
</template>

<script>
export default {
    name: 'Selector',
    data() {
        return {
            gender: this.$store.state.gender,
        }
    },
    mounted() {
        // console.log(this.$store);
    },
    methods: {
        switchGender(bool) {
            this.gender = bool;
            this.$store.commit('genderSwitch', {gender: bool});
        },
    }
}
</script>

<style lang="scss" scoped>
.selector {
    width: 160px;
    border-radius: 5px;
    display: flex;
    margin-top: 30px;
    background-color: #cbd1d3;
    
    &-option {
        width: 80px;
        padding: 10px 0;

        &.selected {
            background-color: #79c0ad;
            border-radius: 5px;
        }
    }
}
</style>
