var mySet = function () {
    let collections = [];
    //this method will check whether the element is already present or not 
    this.has = (element) => {
        if (collections.indexOf(element) == -1) {
            return false;
        }
        return true;
    }
    //this method will return the all values of set
    this.values = () => {
        return collections;
    }
    //this method will add a new value to set only if it does not exist before
    this.add = (element) => {
        if (!this.has(element)) {
            collections.push(element);
            return true;
        }
        return false;
    }
    //this method will delete a value from set only if it do exist
    this.delete = (element) => {
        if (this.has(element)) {
            let index = collections.indexOf(element);
            collections.splice(index, 1);
            return true;
        }
        return false;
    }
    //size of set
    this.size = () => {
        return collections.length;
    }
    //the method will return the union of two sets as a new set
    this.union = (otherSet) => {
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(element => {
            unionSet.add(element);
        });
        secondSet.forEach(element => {
            unionSet.add(element);
        });
        return unionSet;
    }
    //the method will return the intersection of two sets as a new set
    this.intersection = (otherSet) => {
        let intersectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(element => {
            if (otherSet.has(element)) {
                intersectionSet.add(element);
            }

        });
        return intersectionSet;
    }
    //the method will return the difference between two sets as a new set
    this.difference = (otherSet) => {
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(element => {
            if (!otherSet.has(element)) {
                differenceSet.add(element);
            }

        });
        return differenceSet;
    }
    //the method will test if the set is a subset of different set
    this.subSet = (otherSet) => {
        let firstSet = this.values();
        return firstSet.every((value) => {
            return otherSet.has(value);
        });
    }
}

let setA = new mySet();
let setB = new mySet();
setA.add(1);
setA.add(3);
setA.add(4);
setA.add(6);
setB.add(6);
setB.add(5);

console.log(setA.union(setB).values());
console.log(setA.intersection(setB).values());
console.log(setA.difference(setB).values());
console.log(setA.subSet(setB));
let setC = new mySet();
let setD = new mySet();
setC.add(1);
setD.add(1);
setC.add(2);
setD.add(2);
setD.add(3);
setD.add(4);
console.log(setC.subSet(setD));
