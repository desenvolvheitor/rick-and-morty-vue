<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { usePersonagemStore } from '../stores/personagemStore';

const personagemStore = usePersonagemStore();

const props = defineProps<{
  personagem: Personagem
}>();

const modalRef = ref<HTMLDialogElement | null>(null);
onMounted(() => {
  modalRef.value?.showModal();
});
</script>

<template>
  <dialog ref="modalRef" class="fixed rounded-xl max-h-[95vh] w-[25vw] text-main-text border-none outline-none text-wrap bg-primary backdrop:bg-black/80 backdrop:backdrop-blur-sm" @click="(evento) => evento.target === modalRef && personagemStore.fecharModal()">
    <img class="w-full" :src="props.personagem.image" :alt="props.personagem.name"/>
    <div class="px-5 py-3 border border-b-px border-tertiary">
      <h2 class="font-orbitron text-alive text-2xl text-shadow-glow shadow-alive"><strong>{{props.personagem.name}}</strong></h2>
      <p class="atributo-personagem">Status: {{props.personagem.status}}</p>
      <p class="atributo-personagem">Espécie: {{props.personagem.species}}</p>
      <p class="atributo-personagem">Gênero: {{props.personagem.gender}}</p>
      <p class="atributo-personagem">Origem: {{props.personagem.origin.name}}</p>
      <p class="atributo-personagem">Localização: {{props.personagem.location.name}}</p>
      <p class="atributo-personagem">Episódios: {{props.personagem.episode.length}}</p>
    </div>
    <div class="absolute cursor-pointer top-1 right-1 text-xl w-8 h-8 flex items-center justify-center text-main-text bg-black/50 rounded-full hover:bg-dead hover:text-white transition-all active:scale-90" aria-text="Fechar" @click="personagemStore.fecharModal">&#x2715;</div>
  </dialog>
</template>
