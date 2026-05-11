interface Personagem {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface RespostaApiPersonagem {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Personagem[];
}

interface FiltrosBusca {
  page: number;
  name: string;
  status: 'alive' | 'dead' | 'unknown' | '';
  species: string;
  gender: 'female' | 'genderless' | 'male' | 'unknown' | '';
}
