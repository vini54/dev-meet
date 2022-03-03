export interface Itipo {
  id: number;
  icon: string;
  text: string;
}

export interface Ievent {
  id: string;
  tipoId: number;
  dataInicio: string;
  dataPublicacao: Date;
  descricao: string;
  link: string;
  organizador: string;
  titulo: string;
}
