<script setup lang="ts">
</script>

<template>
  <aside class="bg-primary border-r border-tertiary flex flex-col gap-12 transition-transform duration-200 fixed p-7 lg:relative z-50 h-screen lg:h-auto w-4/5 lg:w-full">
    <form @submit.prevent>
      <div class="flex flex-col">
        <label for="search" class="label-filtro">Busca</label>
        <input id="search" type="text" name="search" class="campo-filtro cursor-auto" placeholder="Buscar por nome...">
      </div>

      <div class="flex flex-col">
        <label for="status" class="label-filtro">Filtros</label>
        <select id="status" name="status" class="campo-filtro">
          <option value="">Todos os status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select id="especies" name="species" class="campo-filtro">
          <option value="">Todas as espécies</option>
          <option value="alien">Alien</option>
          <option value="animal">Animal</option>
          <option value="cronenberg">Cronenberg</option>
          <option value="disease">Disease</option>
          <option value="human">Human</option>
          <option value="humanoid">Humanoid</option>
          <option value="mythological creature">Mythological Creature</option>
          <option value="poopybutthole">Poopybutthole</option>
          <option value="robot">Robot</option>
          <option value="unknown">Unknown</option>
        </select>

        <select id="generos" name="gender" class="campo-filtro">
          <option value="">Todos os gêneros</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="male">Male</option>
          <option value="unknown">Unknown</option>
        </select>
        <button id="botao-limpar-filtros" type="button" class="bg-secondary text-sec-text rounded-md border border-tertiary transition-all duration-300 ease-in-out hover:border-dead hover:text-dead">Limpar filtros</button>
      </div>
    </form>
  </aside>
</template>
