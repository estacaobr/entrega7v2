export class Usuario{
    public id: number;
    public nome: string;
    public sobrenome: string;
    public endereco: any;
    public idade: number;
    public sexo: string;
    public email: string;
    public senha: string;

    constructor()
    constructor(id?: number, nome?: string, sobrenome?: string, endereco?: any, idade?: number, sexo?: string, email?: string, senha?: string){
        this.id = (id)? id : 0;
        this.nome = (nome)? nome : '';
        this.sobrenome = (sobrenome)? sobrenome : '';
        this.endereco = (endereco)? endereco : [];
        this.idade = (idade)? idade : 0;
        this.sexo = (sexo)? sexo : '';
        this.email = (email)? email : '';
        this.senha = (senha)? senha : '';
    }
}