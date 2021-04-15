<template>
  <div v-show="loading">
    <div class="loader loader-default"></div>
    <div
      class="loader loader-default"
      v-bind:class="{ 'is-active': loading }"
      data-text
    ></div>
  </div>
</template>

<script>
export default {
  name: 'Loading',

  props: {
    loading: {
      type: Boolean,
      default: true
    }
  }
}
</script>
