// Telefone 
function Telefone(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;

    this.getDDD = function() { 
        return this.ddd; 
    };
    this.getNumero = function() {
        return this.numero; 
    };


    this.setDDD = function(ddd) { 
        this.ddd = ddd; 
    };
    this.setNumero = function(numero) { 
        this.numero = numero; 
    };

    this.getNumeroMaiusculo = function() { 
        return String(this.numero).toUpperCase(); 
    };
    this.getNumeroMinusculo = function() { 
        return String(this.numero).toLowerCase(); 
    };


    this.descricao = function() {
        return "----------------\n" +
               "Telefone:\n" +
               "DDD: " + this.ddd + "\n" +
               "Número: " + this.numero + "\n" +
               "----------------";
    };
}

// Endereco 
function Endereco(estado, cidade, bairro, rua, numero) {
    this.estado = estado;
    this.cidade = cidade;
    this.bairro = bairro;
    this.rua = rua;
    this.numero = numero;

    this.getEstado = function() { 
        return this.estado; 
    };
    this.getCidade = function() { 
        return this.cidade; 
    };
    this.getBairro = function() { 
        return this.bairro; 
    };
    this.getRua = function() { 
        return this.rua; 
    };
    this.getNumero = function() { 
        return this.numero; 
    };

    this.setEstado = function(estado) { 
        this.estado = estado; 
    };
    this.setCidade = function(cidade) { 
        this.cidade = cidade; 
    };
    this.setBairro = function(bairro) { 
        this.bairro = bairro; 
    };
    this.setRua = function(rua) { 
        this.rua = rua; 
    };
    this.setNumero = function(numero) { 
        this.numero = numero; 
    };

    this.getEstadoMaiusculo = function() { 
        return this.estado.toUpperCase(); 
    };
    this.getEstadoMinusculo = function() { 
        return this.estado.toLowerCase(); 
    };

    this.descricao = function() {
        return "----------------\n" +
               "Endereço:\n" +
               "Rua: " + this.rua + "\n" +
               "Número: " + this.numero + "\n" +
               "Cidade: " + this.cidade + "\n" +
               "Estado: " + this.estado + "\n" +
               "----------------";
    };
}

// Cliente 
function Cliente(nome, telefone, endereco, email) {
    this.nome = nome;
    this.telefone = telefone;
    this.endereco = endereco;
    this.email = email;

    this.getNome = function() { return this.nome; };
    this.getTelefone = function() { return this.telefone; };
    this.getEndereco = function() { return this.endereco; };
    this.getEmail = function() { return this.email; };

    this.setNome = function(nome) { 
        this.nome = nome; 
    };
    this.setTelefone = function(telefone) { 
        this.telefone = telefone; 
    };
    this.setEndereco = function(endereco) { 
        this.endereco = endereco; 
    };
    this.setEmail = function(email) { 
        this.email = email; 
    };

    this.getNomeMaiusculo = function() { 
        return this.nome.toUpperCase(); 
    };
    this.getNomeMinusculo = function() { 
        return this.nome.toLowerCase(); 
    };

    this.descricao = function() {
        return "----------------\n" +
               "Informações do Cliente:\n" +
               this.nome + "\n" +
               "----------------\n" +
               this.telefone.descricao() + "\n" +
               this.endereco.descricao();
    };
}

// ordenar clientes por nome 
function ordenarClientesPorNome(lista) {
    return lista.sort(function(a, b) {
        return a.getNome().localeCompare(b.getNome());
    });
}

// Testes com inserts 
let tel1 = new Telefone("11", "999999999");
let end1 = new Endereco("SP", "São Paulo", "Centro", "Av. Paulista", 987);
let cliente1 = new Cliente("Carlos Conrado Heinz", tel1, end1, "carlos@gmail.com");

let tel2 = new Telefone("21", "988887777");
let end2 = new Endereco("RJ", "Rio de Janeiro", "Copacabana", "Av. Atlântica", 456);
let cliente2 = new Cliente("Ana Beatriz", tel2, end2, "ana@gmail.com");

let tel3 = new Telefone("31", "977776666");
let end3 = new Endereco("MG", "Belo Horizonte", "Savassi", "Rua das Amarelas", 789);
let cliente3 = new Cliente("Bruno Almeida", tel3, end3, "bruno@gmail.com");

let tel4 = new Telefone("47", "966665555");
let end4 = new Endereco("SC", "Florianópolis", "Trindade", "Rua das Flores", 101);
let cliente4 = new Cliente("Wesley Santos", tel4, end4, "wesley@gmail.com");

let clientes = [cliente1, cliente2, cliente3, cliente4];

clientes.forEach(c => console.log(c.descricao()));

console.log("\n--- Clientes Ordenados por Nome ---");
ordenarClientesPorNome(clientes).forEach(c => console.log(c.getNome()));
