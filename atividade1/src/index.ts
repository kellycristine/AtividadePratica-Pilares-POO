/*1. Crie uma classe abstrata chamada Ingresso que possui um valor
em reais e um método imprimeValor()
a. crie uma classe Normal, que herda Ingresso..
b. crie uma classe VIP, que herda Ingresso e possui um valor
adicional. Altere o método imprimeValor para mostrar o valor
do ingresso somado com o adicional.
c. crie uma classe Camarote, que herda ingresso e possui um
valor adicional. Altere o método imprimeValor para mostrar o
valor do ingresso somado com o adicional.*/


abstract class Ingresso {
    protected valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    imprimeValor() {
        console.log(`O valor do ingresso é R$${this.valor}`);

    }
}

class Normal extends Ingresso {
    constructor(valor: number) {
        super(valor);
    }
}

class Vip extends Ingresso {
    private adicional: number;

    constructor(valor: number, adicional: number) {
        super(valor);

        this.adicional = adicional;
    }

    imprimeValor() {
        console.log(
            `O valor do ingresso VIP é R$${this.valor + this.adicional}`
        );
    }
}

class Camarote extends Ingresso {
    private adicional: number;

    constructor(valor: number, adicional: number) {
        super(valor);

        this.adicional = adicional;
    }

    imprimeValor() {
        console.log(
            `O valor do ingresso VIP é R$${this.valor + this.adicional}`
        );
    }
}

const ingressoNormal = new Normal(50);
ingressoNormal.imprimeValor();

const ingressoVip = new Vip(50, 30);
ingressoVip.imprimeValor();

const ingressoCamarote = new Camarote(80, 30);
ingressoCamarote.imprimeValor();

