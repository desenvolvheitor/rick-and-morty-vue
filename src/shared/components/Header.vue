<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { usePersonagemStore } from '../stores/personagemStore';
const personagemStore = usePersonagemStore();

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
  <header class="px-4 py-1 bg-primary flex justify-between items-center border-b border-tertiary">
    <div class="flex items-center">
      <button class="text-main-text lg:hidden" @click="personagemStore.toggleMenu">&#9776;</button>
      <img src="../../../public/favicon.svg" alt="Ícone do site" class="h-14">
      <h1 class="text-alive font-orbitron text-base font-bold text-shadow-glow lg:text-lg">Rick and Morty Explorer</h1>
    </div>

    <p class="text-sm text-main-text text-right">{{ dataHora }}</p>
  </header>
</template>
