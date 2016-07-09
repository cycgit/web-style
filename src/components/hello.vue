<template lang="html">
    <p class="text">
        {{msg}}
    </p>
</template>

<script>
    export default {
        data: function () {
            return {
                msg: 'hello world'
            }
        }

    }
</script>

<style lang="scss">
    .text{
        color: red;
        .xx{
            color: honeydew;
        }
    }
</style>
