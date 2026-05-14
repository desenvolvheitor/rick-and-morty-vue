import { ref, reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import { personagemService } from '../services/personagemService';

export const usePersonagemStore = defineStore('personagem', () => {
  const listaPersonagens = ref<Personagem[]>([]);
  const carregando = ref<boolean>(false);
  const exibirModal = ref<boolean>(false);
  const personagemSelecionado = ref<Personagem | null>(null);
  const informacoesPaginacao = ref<RespostaApiPersonagem['info'] | null>(null);

  const paginaAnteriorDisponivel = computed(() => {
    return !carregando.value && filtros.page > 1;
  });

  const proximaPaginaDisponivel = computed(() => {
    const totalPaginas = informacoesPaginacao.value?.pages ?? 0;
    return !carregando.value && filtros.page < totalPaginas;
  });

  const filtros = reactive<FiltrosBusca>({
    page: 1,
    name: '',
    status: '',
    species: '',
    gender: ''
  });

  async function buscarPersonagens(): Promise<void> {
    const tempoMinimo = new Promise(resolve => setTimeout(resolve, 650));
    carregando.value = true;
    try {
      const [dados] = await Promise.all([
        personagemService.listarPersonagens(filtros),
        tempoMinimo
      ]);
      listaPersonagens.value = dados.results;
      informacoesPaginacao.value = dados.info;
    } catch (erro) {
      console.error('Erro ao carregar personagens:', erro);
      listaPersonagens.value = [];
      informacoesPaginacao.value = null;
    } finally {
      carregando.value = false;
    }
  };

  function selecionarPersonagem(personagem: Personagem): void {
    personagemSelecionado.value = personagem;
    exibirModal.value = true;
  };

  function fecharModal(): void {
    exibirModal.value = false;
    personagemSelecionado.value = null;
  };

  function limparFiltros(): void {
    filtros.page = 1;
    filtros.name = '';
    filtros.status = '';
    filtros.species = '';
    filtros.gender = '';
  };

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
    exibirModal,
    personagemSelecionado,
    paginaAnteriorDisponivel,
    proximaPaginaDisponivel,
    buscarPersonagens,
    limparFiltros,
    selecionarPersonagem,
    fecharModal,
    proximaPagina,
    paginaAnterior
  };
});
