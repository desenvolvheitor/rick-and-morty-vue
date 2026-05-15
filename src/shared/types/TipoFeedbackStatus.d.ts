type TipoFeedbackStatus = 'carregando' | 'erro' | 'vazio';

interface FeedbackConfig {
  imagem: string;
  texto: string;
  fallback: string;
}

