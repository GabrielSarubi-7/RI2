///telefone

function TelefoneCelular(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;

    this.getDDD = () => this.ddd;
    this.setDDD = (ddd) => this.ddd = ddd;

    this.getNumero = () => this.numero;
    this.setNumero = (numero) => this.numero = numero;

    this.toUpperCase = () => this.numero.toString().toUpperCase();
    this.toLowerCase = () => this.numero.toString().toLowerCase();
    this.toUpperCase = () => this.numero.toString().toUpperCase();
    this.toLowerCase = () => this.numero.toString().toLowerCase();

    this.descricao = () => `(${this.ddd}) ${this.numero}`;
}

///Endereço

function Endereco(estado, cidade, bairro, rua, numero) {
    this.estado = estado;
    this.cidade = cidade;
    this.bairro = bairro;
    this.rua = rua;
    this.numero = numero;

    this.getEstado = () => this.estado;
    this.getCidade = () => this.cidade;
    this.getBairro = () => this.bairro;
    this.getRua = () => this.rua;
    this.getNumero = () => this.numero;

    this.setEstado = (estado) => this.estado = estado;
    this.setCidade = (cidade) => this.cidade = cidade;
    this.setBairro = (bairro) => this.bairro = bairro;
    this.setRua = (rua) => this.rua = rua;
    this.setNumero = (numero) => this.numero = numero;


    this.toUpperCase = () => this.estado.toString().toUpperCase();
    this.toLowerCase = () => this.estado.toString().toLowerCase();

    this.toUpperCase = () => this.cidade.toString().toUpperCase();
    this.toLowerCase = () => this.cidade.toString().toLowerCase();

    this.toUpperCase = () => this.bairro.toString().toUpperCase();
    this.toLowerCase = () => this.bairro.toString().toLowerCase();

    this.toUpperCase = () => this.rua.toString().toUpperCase();
    this.toLowerCase = () => this.rua.toString().toLowerCase();

    this.toUpperCase = () => this.numero.toString().toUpperCase();
    this.toLowerCase = () => this.numero.toString().toLowerCase();

    this.descricao = () =>
        `${this.rua}, ${this.numero} - ${this.bairro}, ${this.cidade}/${this.estado}`;
}
///Cliente

function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome;
    this.telefoneCelular = telefoneCelular;
    this.email = email;
    this.endereco = endereco;

    this.getNome = () => this.nome;
    this.setNome = (nome) => this.nome = nome;

    this.getEmail = () => this.email;
    this.setEmail = (email) => this.email = email;

    this.getTelefoneCelular = () => this.telefoneCelular;
    this.setTelefoneCelular = (telefoneCelular) => this.telefoneCelular = telefoneCelular;

    this.getEndereco = () => this.endereco;
    this.setEndereco = (endereco) => this.endereco = endereco;

    this.toUpperCase = () => this.nome.toString().toUpperCase();
    this.toLowerCase = () => this.nome.toString().toLowerCase();

    this.toUpperCase = () => this.email.toString().toUpperCase();
    this.toLowerCase = () => this.email.toString().toLowerCase();

    this.toUpperCase = () => this.telefoneCelular.toString().toUpperCase();
    this.toLowerCase = () => this.telefoneCelular.toString().toLowerCase

    this.toUpperCase = () => this.endereco.toString().toUpperCase();
    this.toLowerCase = () => this.endereco.toString().toLowerCase();

    this.descricao = () =>
        "Nome do cliente: " + this.nome + "\n" +
        "Telefone: " + this.telefoneCelular.descricao() + "\n" +
        "Email: " + this.email + "\n" +
        "Endereço: " + this.endereco.descricao();
}

function ordenarClientesPorNome(listaClientes) {
    return listaClientes.sort((a, b) => a.getNome().localeCompare(b.getNome()));
}

///teste

let telefoneCelular = new TelefoneCelular("11", 999999999);
let endereco = new Endereco("SP", "São Paulo", "Centro", "Rua A", 123);
let cliente1 = new Cliente("Wesley", telefoneCelular, "Wesley@gmail.com", endereco);

let telefoneCelular2 = new TelefoneCelular("12", 988887777);
let endereco2 = new Endereco("RJ", "Rio de Janeiro", "Copacabana", "Av. Atlântica", 456);
let cliente2 = new Cliente("Ana", telefoneCelular2, "ana@gmail.com", endereco2);

let telefoneCelular3 = new TelefoneCelular("21", 977776666);
let endereco3 = new Endereco("MG", "Belo Horizonte", "seila", "Rua das Amarelas", 789);
let cliente3 = new Cliente("Bruno", telefoneCelular3, "bruno@gmail.com", endereco3);

let clientes = [cliente1, cliente2, cliente3];
console.log(cliente1.descricao());
console.log("\n" + cliente2.descricao());
console.log("\n" + cliente3.descricao());

console.log("\n--- Clientes Ordenados por Nome ---");
let clientesOrdenados = ordenarClientesPorNome(clientes);
clientesOrdenados.forEach(c => console.log(c.getNome()));


