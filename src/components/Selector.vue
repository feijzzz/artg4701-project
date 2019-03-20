<template>
    <div class="selector"> 
        <div class="selector-option">Male</div>
        <div class="selector-option selected">Female</div> 
    </div>
</template>

<script>
export default {
    name: 'Selector',
    mounted() {
        // console.log(this.$store);
    },
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
