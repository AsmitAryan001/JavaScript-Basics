class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase() //variable names are changed so that call stack size is not exceeded
    }
    set email(value){
        this._email = value //setters are never returned
    }


    get password(){
        return `${this._password}asmit`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
} 

const asmit = new User("asm@yash.com", "abc")
console.log(asmit.email);
