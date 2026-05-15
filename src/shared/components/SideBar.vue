<script setup lang="ts">
import { watch } from 'vue';
import { usePersonagemStore } from '@/shared/stores/personagemStore';

const personagemStore = usePersonagemStore();

let timer: ReturnType<typeof setTimeout> | undefined;
watch(() => ({ ...personagemStore.filtros }), (novo, antigo) => {
  if (novo.page === antigo.page && personagemStore.filtros.page !== 1) {
    personagemStore.filtros.page = 1;
    return;
  }

  clearTimeout(timer);

  if (novo.name !== antigo.name) {
      timer = setTimeout(personagemStore.buscarPersonagens, 500);
  }
  else {
    personagemStore.buscarPersonagens();
  }
});

const speciesOptions = [
  { value: '', text: 'Todas as espécies' },
  { value: 'alien', text: 'Alien' },
  { value: 'animal', text: 'Animal' },
  { value: 'cronenberg', text: 'Cronenberg' },
  { value: 'disease', text: 'Disease' },
  { value: 'human', text: 'Human' },
  { value: 'humanoid', text: 'Humanoid' },
  { value: 'mythological creature', text: 'Mythological Creature' },
  { value: 'poopybutthole', text: 'Poopybutthole' },
  { value: 'robot', text: 'Robot' },
  { value: 'unknown', text: 'Unknown' }
];

const statusOptions = [
  { value: '', text: 'Todos os status' },
  { value: 'alive', text: 'Alive' },
  { value: 'dead', text: 'Dead' },
  { value: 'unknown', text: 'Unknown' }
];

const genderOptions = [
  { value: '', text: 'Todos os gêneros' },
  { value: 'female', text: 'Female' },
  { value: 'genderless', text: 'Genderless' },
  { value: 'male', text: 'Male' },
  { value: 'unknown', text: 'Unknown' }
];
</script>

<template>
  <aside
    class="bg-primary border-r border-tertiary flex flex-col gap-12 transition-transform duration-200 fixed p-7 lg:relative z-50 h-dvh lg:h-auto w-4/5 lg:w-full">
    <form @submit.prevent>
      <div class="flex flex-col">
        <label for="search" class="label-filtro">Busca</label>
        <input id="search" v-model="personagemStore.filtros.name" type="text" name="search" class="campo-filtro cursor-auto" placeholder="Buscar por nome...">
      </div>

      <div class="flex flex-col">
        <label for="status" class="label-filtro mt-4">Filtros</label>
        <select id="status" v-model="personagemStore.filtros.status" name="status" class="campo-filtro">
          <option v-for="status in statusOptions" :key="status.value" :value="status.value">{{ status.text }}</option>
        </select>
        <select id="especies" v-model="personagemStore.filtros.species" name="species" class="campo-filtro">
          <option v-for="specie in speciesOptions" :key="specie.value" :value="specie.value">{{ specie.text }}</option>
        </select>

        <select id="generos" v-model="personagemStore.filtros.gender" name="gender" class="campo-filtro">
          <option v-for="gender in genderOptions" :key="gender.value" :value="gender.value">{{ gender.text }}</option>
        </select>
        <button id="botao-limpar-filtros" type="button" class="bg-secondary text-sec-text rounded-md p-2 mt-4 border border-tertiary transition-all duration-300 ease-in-out hover:border-dead hover:text-dead" @click="personagemStore.limparFiltros">Limpar filtros</button>
      </div>
    </form>
  </aside>
</template>
