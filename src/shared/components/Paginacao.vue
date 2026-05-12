<script setup lang="ts">
import { usePersonagemStore } from '../stores/personagemStore';

const personagemStore = usePersonagemStore();
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-1 mt-4">
    <p class="text-main-text">Página {{personagemStore.filtros.page}} de {{ personagemStore.informacoesPaginacao?.pages }}</p>
    <div class="flex gap-4">
      <button class="text-alive bg-transparent border border-alive rounded-lg px-4 py-1 text-shadow-glow" @click="personagemStore.paginaAnterior">Página Anterior</button>
      <button class="text-alive bg-transparent border border-alive rounded-lg px-4 py-1 text-shadow-glow" @click="personagemStore.proximaPagina">Próxima página</button>
    </div>
  </div>
</template>
