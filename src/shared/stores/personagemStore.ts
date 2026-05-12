import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import { personagemService } from '../services/personagemService';

export const usePersonagemStore = defineStore('personagem', () => {
  const listaPersonagens = ref<Personagem[]>([]);
  const carregando = ref<boolean>(false);
  const informacoesPaginacao = ref<RespostaApiPersonagem['info'] | null>(null);

  const filtros = reactive<FiltrosBusca>({
    page: 1,
    name: '',
    status: '',
    species: '',
    gender: ''
  });

  async function buscarPersonagens(): Promise<void> {
    carregando.value = true;
    try {
      const dados = await personagemService.listarPersonagens(filtros);
      listaPersonagens.value = dados.results;
      informacoesPaginacao.value = dados.info;
    } catch (erro) {
      console.error('Erro ao carregar personagens:', erro);
      listaPersonagens.value = [];
      informacoesPaginacao.value = null;
    } finally {
      carregando.value = false;
    }
  }

  function limparFiltros(): void {
    filtros.page = 1;
    filtros.name = '';
    filtros.status = '';
    filtros.species = '';
    filtros.gender = '';
    buscarPersonagens();
  }

  function paginaAnterior(): void {
    if (!carregando.value && filtros.page > 1) {
      filtros.page--;
    }
  };

  function proximaPagina(): void {
    if (informacoesPaginacao.value && !carregando.value && filtros.page < informacoesPaginacao.value.pages) {
      filtros.page++;
    }
  };

  return {
    listaPersonagens,
    carregando,
    filtros,
    informacoesPaginacao,
    buscarPersonagens,
    limparFiltros,
    proximaPagina,
    paginaAnterior
  };
});
