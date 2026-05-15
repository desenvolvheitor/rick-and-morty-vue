<script setup lang="ts">
import { ref, computed } from 'vue';
import urlCarregando from '@/assets/images/animacao-carregamento.webp';
import urlErroGeral from '@/assets/images/erro-geral.webp';
import urlSemResultados from '@/assets/images/erro-sem-resultados.webp';

const props = defineProps<{
  tipo: 'carregando' | 'erro' | 'vazio'
}>();

const imagemQuebrou = ref<boolean>(false);

const configuracoes: Record<string, FeedbackConfig> = {
  carregando: {
    imagem: urlCarregando,
    texto: 'Carregando...',
    fallback: '🌀'
  },
  erro: {
    imagem: urlErroGeral,
    texto: 'Ops! Algo deu errado.',
    fallback: '⚠️'
  },
  vazio: {
    imagem: urlSemResultados,
    texto: 'Nenhum personagem encontrado.',
    fallback: '🔍'
  }
};

const mapa = computed<FeedbackConfig>(() => configuracoes[props.tipo]);

function manipularErroImagem(): void {
  imagemQuebrou.value = true;
};
</script>

<template>
  <div class="flex-1 flex flex-col items-center justify-center">
    <img v-if="!imagemQuebrou" class="h-48 w-48 shadow-glow shadow-alive" :src="mapa.imagem" @error="manipularErroImagem">
    <div v-else class="h-48 w-48 flex items-center justify-center text-8xl bg-quaternary rounded-full border-2 border-alive shadow-glow shadow-alive">{{ mapa.fallback }}</div>
    <p class="mt-2 text-alive text-xl font-bold font-orbitron animate-pulse text-center">{{ mapa.texto }}</p>
  </div>
</template>
