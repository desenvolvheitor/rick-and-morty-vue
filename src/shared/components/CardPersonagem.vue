<script setup lang="ts">
import { computed } from 'vue';
import { getStatusConfig } from '../helpers/status';

const props = defineProps<{
  personagem: Personagem
}>();

const statusInfo = computed(() => {
  return getStatusConfig(props.personagem.status);
});
</script>

<template>
  <li class="rounded-2xl overflow-hidden bg-primary flex flex-col w-full transition-all duration-200 ease-in-out group hover:cursor-pointer hover:border hover:border-alive hover:scale-105">
    <img :src="props.personagem.image" :alt="props.personagem.name">
    <div class="py-2 px-3">
      <h3 class="font-orbitron text-main-text text-xl group-hover:text-alive"><strong>{{ props.personagem.name }}</strong></h3>
      <p class="text-main-text">{{ props.personagem.species }}</p>
      <p :class="statusInfo.color">{{statusInfo.emoji}} {{ props.personagem.status }}</p>
    </div>
  </li>
</template>
