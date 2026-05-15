<script setup lang="ts">
import Header from '@components/Header.vue';
import SideBar from '@components/SideBar.vue';
import { usePersonagemStore } from '@/shared/stores/personagemStore';

import { onMounted } from 'vue';
import ListaPersonagens from '@/shared/components/ListaPersonagens.vue';

const personagemStore = usePersonagemStore();
onMounted(() => personagemStore.buscarPersonagens());
</script>

<template>
  <div class="flex flex-col h-dvh overflow-hidden">

    <Header />

    <div class="flex-1 grid lg:grid-cols-[20%_80%] w-full overflow-hidden">
      <Transition enter-active-class="transition-opacity duration-200 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition-opacity duration-200 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="personagemStore.isMenuAberto" class="bg-black/30 fixed z-40 h-dvh w-dvw lg:hidden backdrop-blur-[3px]" @click="personagemStore.isMenuAberto = !personagemStore.isMenuAberto" ></div>
      </Transition>
      <SideBar />

      <main class="bg-secondary p-[30px_40px] overflow-y-auto">
        <router-view>
          <ListaPersonagens />
        </router-view>
      </main>
    </div>

  </div>
</template>
