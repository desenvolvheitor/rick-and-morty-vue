<script setup lang="ts">
import { computed } from 'vue';
import { usePersonagemStore } from '../stores/personagemStore';

const personagemStore = usePersonagemStore();

const mostrarPaginacao = computed(() => {
  const temPersonagens = personagemStore.listaPersonagens.length > 0;
  const temMaisDeUmaPagina = (personagemStore.informacoesPaginacao?.pages ?? 0) > 1;

  return !personagemStore.carregando && temPersonagens && temMaisDeUmaPagina;
});
</script>

<template>
  <div v-if="mostrarPaginacao" class="flex flex-col items-center justify-center gap-1 mt-4">
    <p class="text-main-text">Página {{personagemStore.filtros.page}} de {{ personagemStore.informacoesPaginacao?.pages }}</p>
    <div class="flex gap-4">
      <button :class="['px-4 py-1 rounded-lg border transition-all text-alive border-alive text-shadow-glow shadow-[0_0_6px] shadow-alive hover:scale-105', personagemStore.paginaAnteriorDisponivel ? '' : 'opacity-50 cursor-not-allowed hover:scale-100']" :disabled="!personagemStore.paginaAnteriorDisponivel"  @click="personagemStore.paginaAnterior"><span>⭠ </span>Página Anterior</button>
      <button :class="['px-4 py-1 rounded-lg border transition-all text-alive border-alive text-shadow-glow shadow-[0_0_6px] shadow-alive hover:scale-105', personagemStore.proximaPaginaDisponivel ? '' : 'opacity-50 cursor-not-allowed hover:scale-100']" :disabled="!personagemStore.proximaPaginaDisponivel" @click="personagemStore.proximaPagina">Próxima página <span> ⭢</span></button>
    </div>
  </div>
</template>
