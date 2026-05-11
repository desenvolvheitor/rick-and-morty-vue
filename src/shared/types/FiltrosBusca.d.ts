interface FiltrosBusca {
  page: number;
  name: string;
  status: 'alive' | 'dead' | 'unknown' | '';
  species: string;
  gender: 'female' | 'genderless' | 'male' | 'unknown' | '';
}
