<script setup lang="ts">
import { usePersonagemStore } from '@/shared/stores/personagemStore';
import CardPersonagem from './CardPersonagem.vue';
const personagemStore = usePersonagemStore();
</script>

<template>
  <ul class="list-none grid gap-5 content-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <CardPersonagem v-for="personagem in personagemStore.listaPersonagens" :key="personagem.id" :personagem="personagem"/>
  </ul>
</template>

