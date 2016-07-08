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

<style lang="css">
    .text{
        color: red;
    }
</style>
