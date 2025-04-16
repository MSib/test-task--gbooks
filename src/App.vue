<script setup lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue'
</script>

<template>
  <div>
    <header>
      <HeaderMenu />
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
