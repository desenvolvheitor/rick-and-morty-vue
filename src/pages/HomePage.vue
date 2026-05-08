<script setup lang="ts">
import Header from '@components/Header.vue';
import SideBar from '@components/SideBar.vue';
</script>

<template>
  <Header />
  <div class="grid lg:grid-cols-[20%_80%] h-[94dvh] w-full">
    <SideBar />

    <main class="bg-secondary p-[30px_40px] overflow-y-auto min-h-full">
      <router-view />
    </main>
  </div>
</template>
