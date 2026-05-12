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
  <div class="flex flex-col h-screen overflow-hidden">

    <Header />

    <div class="flex-1 grid lg:grid-cols-[20%_80%] w-full overflow-hidden">
      <SideBar />

      <main class="bg-secondary p-[30px_40px] overflow-y-auto">
        <router-view>
          <ListaPersonagens />
        </router-view>
      </main>
    </div>

  </div>
</template>
