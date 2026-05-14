<script setup lang="ts">
import { usePersonagemStore } from '@/shared/stores/personagemStore';
import CardPersonagem from './CardPersonagem.vue';
import Paginacao from './Paginacao.vue';
import Modal from './Modal.vue';
import Carregando from './Carregamento.vue';
const personagemStore = usePersonagemStore();
</script>

<template>
  <div class="flex flex-col justify-center items-center h-full">
    <Carregando v-if="personagemStore.carregando" />
    <ul v-else class="list-none grid gap-5 content-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      <CardPersonagem v-for="personagem in personagemStore.listaPersonagens" :key="personagem.id" :personagem="personagem" @click="personagemStore.selecionarPersonagem(personagem), personagemStore.exibirModal" />
    </ul>
    <Modal v-if="personagemStore.personagemSelecionado" :personagem="personagemStore.personagemSelecionado" />
    <Paginacao />
  </div>
</template>

