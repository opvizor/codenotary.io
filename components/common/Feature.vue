<template>
    <div class="feature">
        <img v-if="image" class="image -responsive" :src="image" :alt="title">
        <h3 class="title _text-primary">{{ title }}</h3>
        <div><slot/></div>
    </div>
</template>

<script>
export default {
    name: 'Feature',
    props: {
        title: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/config";

.feature {
    text-align: center;

    .title {
        font-weight: bold;
        color: $color-primary;
    }

    img {
        width: 80px;
        height: auto;
        display: block;
        margin: 0 auto;
    }
}
</style>
