<template>
    <div class="loader loader-default"></div>
    <div
      class="loader loader-default"
      v-bind:class="{ 'is-active': isLoader }"
      data-text
    ></div>
</template>

<script>
export default {
    data () {
    return {
      isLoader: this.$store.state.isLoader
    }
  },

}
</script>