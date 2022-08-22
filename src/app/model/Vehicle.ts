export class Vehicle {
  identificador!: string;
  status!: string;
  placa!: string;
  cor!: string;
  marca!: string;
  modelo!: string;
  valor!: number;
  kmAtual!: number;
  anoFabricacao!: number;
  anoModelo!: number;

  constructor(identificador: string, status: string, placa: string, cor: string, marca: string, modelo: string, valor: number, kmAtual: number, anoFabricacao: number, anoModelo: number) {
    this.identificador = identificador;
    this.status = status;
    this.placa = placa;
    this.cor = cor;
    this.marca = marca;
    this.modelo = modelo;
    this.valor = valor;
    this.modelo = modelo;
    this.kmAtual = kmAtual;
    this.anoFabricacao = anoFabricacao;
    this.anoModelo = anoModelo;
  }
}
