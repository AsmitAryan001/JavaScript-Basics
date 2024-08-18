class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email       
        this.password = password 
    }
    
    addCourse(){
        console.log(`new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.addCourse()

const coffee = new User("coffee")

coffee.logMe()
// coffee.addCourse() //here the coffee cannot use addCourse fucntion because it doesn't has access to it neither is inheriting it .

chai.logMe() //here the chai can use logMe despite not having declared it within the Teacher's class is because the Tecahe class is inheriting features from the User class

console.log(chai instanceof User); // here the output would be true beacuse Teacher is inheriting from User and chai is the instance of Teacher and Teacher is the instance of User so chai is also an instance of User.