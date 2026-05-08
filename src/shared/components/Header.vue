<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const dataHora = ref<string>('Carregando...');

let timerId: number | undefined;

onMounted(() => {
  timerId = window.setInterval(() => {
    const hoje = new Date;
    dataHora.value = hoje.toLocaleString('pt-br', { dateStyle: 'long', timeStyle: 'medium' }).replace('às', '•');
  }, 1000);
});

onUnmounted(() => {
  if (timerId !== undefined) {
    clearInterval(timerId);
  }
});
</script>

<template>
  <header class="px-8 py-[2px] bg-primary flex justify-between items-center border-b border-tertiary">
    <div class="flex items-center">
      <button class="hidden">&#9776;</button>
      <img src="../../../public/favicon.svg" alt="Ícone do site" class="h-14">
      <h1 class="text-alive font-orbitron text-xl font-bold text-shadow-glow">Rick and Morty Explorer</h1>
    </div>

    <p class="text-sm text-main-text">{{ dataHora }}</p>
  </header>
</template>
