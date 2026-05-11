import { api } from './config/api.config';

export const personagemService = {
  async listarPersonagens(filtros: FiltrosBusca): Promise<RespostaApiPersonagem> {
    const { data } = await api.get<RespostaApiPersonagem>('/character', {
      params: filtros,
    });
    return data;
  }
};
