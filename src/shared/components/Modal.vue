<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  personagem: Personagem
}>();

const modalRef = ref(null);
</script>

<template>
  <dialog ref="modalRef" class="absolute rounded-xl top-2/4 left-2/4 max-h-[95vh] w-[25vw] text-main-text border-none outline-none text-wrap -translate-x-1/2 -translate-y-1/2 backdrop:bg-black/60 backdrop:backdrop-blur-sm">
    <img :src="props.personagem.image" :alt="props.personagem.name"/>
    <div id="informacoes-modal-personagem">
      <h2 class="text-main-text">{{props.personagem.name}}</h2>
      <p class="text-main-text">Status: {{props.personagem.status}}</p>
      <p class="text-main-text">Espécie: {{props.personagem.species}}</p>
      <p class="text-main-text">Gênero: {{props.personagem.gender}}</p>
      <p class="text-main-text">Origem: {{props.personagem.origin.name}}</p>
      <p class="text-main-text">Localização: {{props.personagem.location.name}}</p>
      <p class="text-main-text">Episódios: {{props.personagem.episode.length}}</p>
    </div>
    <div id="botao-fechar-modal" aria-text="Fechar">&#x2715;</div>
  </dialog>
</template>
