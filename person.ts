interface PersonProperties {
    name: string;
    surname: string;
    email: string;
    password: string;
  }
  
  class Person implements PersonProperties {
    public name: string;
    public surname: string;
    public email: string;  
    public password: string;
  
    constructor({ name, surname, email, password }: PersonProperties) {
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.password = password;
    }
  
    getInfo() {
      console.log({
        name: this.name,
        surname: this.surname,
        email: this.email
      });
    }
  
    changeEmail(newEmail: string) {
      this.email = newEmail;
    }
  }
  
  const person = new Person({
    name: 'Rubab',
    surname: 'Huseynova',
    email: 'rubabhuseynova013@gmail.com',
    password: 'password123'
  });
  
  person.getInfo(); 
  person.changeEmail('rubabhuseynova022@gmail.com'); 
  person.getInfo(); 