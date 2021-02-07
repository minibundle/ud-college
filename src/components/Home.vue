<template>
  <div class="Home">
    <div class="Home__header">
      <AppLogo />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

import AppLogo from './AppLogo'

@Component({
  components: {
    AppLogo,
  },
})
export default class Home extends Vue {}
</script>
