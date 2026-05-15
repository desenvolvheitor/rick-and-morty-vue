<script setup lang="ts">
import { usePersonagemStore } from '@/shared/stores/personagemStore';
import CardPersonagem from './CardPersonagem.vue';
import Paginacao from './Paginacao.vue';
import Modal from './Modal.vue';
import FeedbackStatus from './FeedbackStatus.vue';

const personagemStore = usePersonagemStore();
</script>

<template>
  <div class="flex flex-col items-center min-h-full pb-1">
    <FeedbackStatus v-if="personagemStore.carregando" tipo="carregando" />
    <FeedbackStatus v-else-if="personagemStore.ocorreuErro" tipo="erro" />
    <FeedbackStatus v-else-if="personagemStore.listaPersonagens.length < 1" tipo="vazio" />
    <template v-else>
      <ul class="list-none grid gap-5 content-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <CardPersonagem v-for="personagem in personagemStore.listaPersonagens" :key="personagem.id" :personagem="personagem" @click="personagemStore.selecionarPersonagem(personagem), personagemStore.exibirModal" />
      </ul>
      <Modal v-if="personagemStore.personagemSelecionado" :personagem="personagemStore.personagemSelecionado" />
      <Paginacao />
    </template>
  </div>
</template>

