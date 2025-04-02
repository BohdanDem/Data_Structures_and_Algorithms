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
            this.root = newNode
            return this;
        }
        let temp = this.root;

        while (true) {
            if (newNode.value === temp.value) return undefined;
            if (newNode.value < temp.value) {
                if (!temp.left) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (!temp.right) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    #rInsert(value, currentNode = this.root) {
        if (currentNode == null) return new Node(value);

        if (value < currentNode.value) {
            currentNode.left = this.#rInsert(value, currentNode.left);
        } else if (value > currentNode.value) {
            currentNode.right = this.#rInsert(value, currentNode.right);
        }
        return currentNode;
    }

    rInsert(value) {
        if (this.root === null) this.root = new Node(value);
        this.#rInsert(value);
    }

}



function test() {

    let myBST = new BST();

    myBST.insert(2);
    myBST.insert(1);
    myBST.insert(3);

    /*
        THE LINES ABOVE CREATE THIS TREE:
                     2
                    / \
                   1   3
    */


    console.log("Root:", myBST.root.value);
    console.log("\nRoot->Left:", myBST.root.left.value);
    console.log("\nRoot->Right:", myBST.root.right.value);
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    Root: 2

    Root->Left: 1

    Root->Right: 3

*/
      
