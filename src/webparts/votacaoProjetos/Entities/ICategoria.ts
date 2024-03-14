import { IProjeto } from "./IProjeto";
export interface ICategoria {
  nome: string;
  id: number;
  projetos: IProjeto[];
}
