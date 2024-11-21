var Person = /** @class */ (function () {
    function Person(_a) {
        var name = _a.name, surname = _a.surname, email = _a.email, password = _a.password;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }
    Person.prototype.getInfo = function () {
        console.log({
            name: this.name,
            surname: this.surname,
            email: this.email
        });
    };
    Person.prototype.changeEmail = function (newEmail) {
        this.email = newEmail;
    };
    return Person;
}());
var person = new Person({
    name: 'Rubab',
    surname: 'Huseynova',
    email: 'rubabhuseynova013@gmail.com',
    password: 'password123'
});
person.getInfo();
person.changeEmail('rubabhuseynova022@gmail.com');
person.getInfo();
