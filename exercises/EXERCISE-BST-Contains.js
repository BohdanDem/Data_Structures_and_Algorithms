class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
 
class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (newNode.value === temp.value) return undefined;
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    contains(value) {
        if (!this.root) return false;
        let temp = this.root;
        while (temp) {
            if (value === temp.value) return true;
            if (value < temp.value) {
                temp = temp.left;
            } else temp = temp.right;
        }
        return false;
    }

    rContains(value, currentNode = this.root) {
        if (currentNode === null) return false;

        if (value === currentNode.value) return true;

        if (value < currentNode.value) {
            return this.rContains(value, currentNode.left)
        } else {
            return this.rContains(value, currentNode.right)
        }
    }

    // #deleteNode(value, currentNode) {
    //     if (currentNode === null) return null;
    //
    //     if (value < currentNode.value) {
    //         currentNode.left = this.#deleteNode(value, currentNode.left);
    //     } else if (value > currentNode.value) {
    //         currentNode.right = this.#deleteNode(value, currentNode.right);
    //     } else {
    //
    //     }
    //     return currentNode;
    // }

    // deleteNode(value) {
    //     this.#deleteNode(value, this.root)
    // }

    #deleteNode(value, currentNode) {
        if (value < currentNode.value) {
            currentNode.left = this.#deleteNode(value, currentNode.left);
        } else {
            if (currentNode.left === null && currentNode.right === null) {
                return null;
            }
            else if (currentNode.left === null) {
                currentNode = currentNode.right;
            } else if (currentNode.right === null) {
                currentNode = currentNode.left;
            } else {
                let subTreeMin = this.minValue(currentNode.right);
                currentNode.value = subTreeMin;
                currentNode.right = this.#deleteNode(subTreeMin, currentNode.right);
            }
        }
        return currentNode;
    }

    deleteNode(value) {
        this.root = this.#deleteNode(value, this.root)
    }

    minValue(currentNode) {
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }
}



function test() {
    let myBST = new BST();

    myBST.insert(47);
    myBST.insert(21);
    myBST.insert(76);
    myBST.insert(18);
    myBST.insert(27);
    myBST.insert(52);
    myBST.insert(82);


    console.log("BST Contains 27:");
    console.log(myBST.contains(27));
    console.log(myBST.rContains(27));

    console.log("\nBST Contains 17:");
    console.log(myBST.contains(17));
    console.log(myBST.rContains(17));
    console.log(myBST.minValue(myBST.root));
    console.log(myBST.minValue(myBST.root.right));
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    BST Contains 27:
    true
    
    BST Contains 17:
    false

*/