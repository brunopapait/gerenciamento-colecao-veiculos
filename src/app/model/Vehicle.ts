export class Vehicle {
  id!: string;
  status!: string;
  placa!: string;
  cor!: string;
  marca!: string;
  modelo!: string;
  valor!: number;
  kmAtual!: number;
  anoFabricacao!: number;
  anoModelo!: number;

  constructor(id: string, status: string, placa: string, cor: string, marca: string, modelo: string, valor: number, kmAtual: number, anoFabricacao: number, anoModelo: number) {
    this.id = id;
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
