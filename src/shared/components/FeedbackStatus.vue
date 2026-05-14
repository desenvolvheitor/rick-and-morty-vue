<script setup lang="ts">
import { computed } from 'vue';
import urlCarregando from '@/assets/images/animacao-carregamento.webp';
import urlErroGeral from '@/assets/images/erro-geral.webp';
import urlSemResultados from '@/assets/images/erro-sem-resultados.webp';

const props = defineProps<{
  tipo: 'carregando' | 'erro' | 'vazio'
}>();

const configuracoes: Record<string, FeedbackConfig> = {
  carregando: {
    imagem: urlCarregando,
    texto: 'Carregando...'
  },
  erro: {
    imagem: urlErroGeral,
    texto: 'Ops! Algo deu errado.'
  },
  vazio: {
    imagem: urlSemResultados,
    texto: 'Nenhum personagem encontrado.'
  }
};

const mapa = computed<FeedbackConfig>(() => {
  return configuracoes[props.tipo];
});
</script>

<template>
  <div class="flex-1 flex flex-col items-center justify-center">
    <img class="h-48 w-48 shadow-glow shadow-alive" :src="mapa.imagem">
    <p class="mt-2 text-alive text-xl font-bold font-orbitron animate-pulse">{{ mapa.texto }}</p>
  </div>
</template>
