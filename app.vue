
<script lang="ts" setup>
import './assets/css/tailwind.css'
import Header from './header.vue';
</script>

<template>
  <Header />
  <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
    <div>1</div>
    <div class="col-start-3">2</div>
  </div>
</template>