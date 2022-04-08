export interface ContaAPagar {
  idConta: string;
  ehFixa: boolean;
  descricao: string;
  dataPagamento: Date;
  valor: number;
  tipoServico: string;
}
