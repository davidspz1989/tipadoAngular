export class Usuario{

    static usuarioDeJson(obj:any){
        return new Usuario(
            obj['id'],
            obj['email'],
            obj['first_name'],
            obj['last_name'],
            obj['avatar']
         );
    }

    constructor(
        public id:         number,
        public email:      string,
        public first_name: string,
        public last_name:  string,
        public avatar:     string
    ){}
        
    get fullName():string{
        return `${this.first_name} ${this.last_name}`;
    }
}