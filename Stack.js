// IMPLEMENTATION OF STACK
var Stack = function () {
    //this.count is var which will count the number of elements in the stack 
    this.count = 0;
    //this.storage is an object which will store the elements of stack with index
    this.storage = {};
    //push method will push the elements in the stack
    this.push = (item) => {
        this.storage[this.count + 1] = item;
        this.count = this.count + 1;
        return item;
    }
    //pop method will remove the last element from the stack
    this.pop = () => {
        if (this.count == 0) {
            return undefined;
        }
        let temp = this.storage[this.count];
        delete this.storage[this.count];
        this.count = this.count - 1;
        return temp;
    }
    //peek method will return the last element from the stack
    this.peek = () => {
        return this.storage[this.count];
    }
    //size method will return the size the stack
    this.size = () => {
        return this.count;
    }
}

var newStack = new Stack();
console.log(newStack.push(2)); //2
console.log(newStack.push(3)); //3
console.log(newStack.peek()); //3
console.log(newStack.size()); //2
console.log(newStack.pop());  //3
console.log(newStack.peek()); // 2
console.log(newStack.size()); // 1
console.log(newStack.pop());  //2
console.log(newStack.pop());  // undefined
console.log(newStack.peek()); // undefined
console.log(newStack.size()); // 0