/*3. Dado o seguinte diagrama:

Identifique os atributos e comportamentos que são comuns entre os
3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
comportamento diferente para cada animal.*/

class Animal {
    public nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public getNome(): string {
        return this.nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public comer(): void {
        console.log(`${this.nome} está comendo.`);
    }

    public dormir(): void {
        console.log(`${this.nome} está dormindo.`);
    }
}

class Cachorro extends Animal {
    public latido(): void {
        console.log(`${this.nome} está latindo.`);
    }
}

class Gato extends Animal {
    public miado(): void {
        console.log(`${this.nome} está miando.`);
    }
}

class Peixe extends Animal {
    public nada(): void {
        console.log(`${this.nome} está nadando.`);
    }
}
// Criando instâncias de animais
const meuCachorro = new Cachorro("Thor", 8);
const meuGato = new Gato("Whiskers", 2);
const meuPeixe = new Peixe("Nemo", 1);

// Usando os métodos e comportamentos dos animais
console.log(`Nome do cachorro: ${meuCachorro.getNome()}`);
console.log(`Idade do cachorro: ${meuCachorro.getIdade()}`);
meuCachorro.comer();
meuCachorro.dormir();
meuCachorro.latido();

console.log(`Nome do gato: ${meuGato.getNome()}`);
console.log(`Idade do gato: ${meuGato.getIdade()}`);
meuGato.comer();
meuGato.dormir();
meuGato.miado();

console.log(`Nome do peixe: ${meuPeixe.getNome()}`);
console.log(`Idade do peixe: ${meuPeixe.getIdade()}`);
meuPeixe.comer();
meuPeixe.dormir();
meuPeixe.nada();