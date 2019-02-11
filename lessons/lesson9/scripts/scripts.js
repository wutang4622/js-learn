// 'use strict';

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;

//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     }
// }

// User.prototype.exit = function(name) {
//     console.log('Пользователь ' + this.name + ' ушел');
// }

// let Ivan = new User('Ivan', 25),
//     Alex = new User('Alex', 20);

//     console.log(Ivan);
//     console.log(Alex);


//     Alex.exit();

    // теперь все тоже самое только в Es6

    // class User {
    //     constructor(name, id)  {
    //         this.name = name;
    //         this.id = id;
    //         this.human = true;
    //     }
        
    //     hello() {
    //         console.log(`Hello!  ${this.name}`);
    //     }

    //     exit() {
    //         console.log(`Пользователь!  ${this.name} ушел`);
    //     }
    // }
    
    // User.prototype.exit = function(name) {
    //     console.log('Пользователь ' + this.name + ' ушел');
    // }
    
    // let Ivan = new User('Ivan', 25),
    //     Alex = new User('Alex', 20);
    
    //     console.log(Ivan);
    //     console.log(Alex);
    
    
    //     Alex.exit();

    function showThis(a,b) {
        console.log(this);
        function sum() {
            console.log(this);
            return a + b;
        }
        console.log(sum());
    }

    showThis(4,5);
    showThis(5,5);