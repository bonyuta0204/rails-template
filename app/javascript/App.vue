<template>
  <div class="app_container">
    <div class="header_container"></div>
    <div class="page_container">
      <h1>Hello World</h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: {},
  setup() {
    return {};
  },
});
</script>

<style></style>
