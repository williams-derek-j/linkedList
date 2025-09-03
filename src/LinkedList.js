import Node from "./Node";

export default class LinkedList {
    constructor() {
        //this.data = []
        this.root = null;
    }

    append(value) {
        const node = new Node(value)

        if (this.root) {
            let prev = this.root

            while (prev.nextNode) {
                prev = prev.nextNode;
            }
            prev.nextNode = node;
        } else {
            this.root = node;
        }

        // this.data.push(node)

        //            this.data[this.data.length - 1].nextNode = node
    }

    prepend(value) {
        const node = new Node(value)

        node.nextNode = this.root;
        this.root = node
        // node.nextNode = this.data[0]
        //
        // this.data.unshift(node)
    }

    insertAt(index, value) {
        const node = new Node(value)

        let prev = this.root
        for (let i = 0; i < index - 1; i++) {
            if (prev.nextNode) {
                prev = prev.nextNode
            } else {
                return new Error("Index out of bounds!")
            }
        }

        node.nextNode = prev.nextNode;
        prev.nextNode = node;
        // node.nextNode = this.data[index]
        //
        // this.data[index - 1].nextNode = node
        //
        // this.data.splice(index, 0, node)
    }

    removeAt(index) {
        let prev;
        let target = this.root

        for (let i = 0; i < index; i++) {
            prev = target
            target = target.nextNode
        }
        prev.nextNode = target.nextNode
        target = null
        // this.data[index - 1].nextNode = this.data[index + 1]
        //
        // this.data.slice(index, index + 1)
    }

    size() {
        let i = 0
        let node

        if (this.root) {
            node = this.root
            i = 1
        }

        if (node) {
            while (node.nextNode) {
                node = node.nextNode;
                i++
            }
        }
        return i
    }

    head() {
        return this.root
    }

    tail() {
        if (this.root) {
            let node = this.root

            while (node.nextNode) {
                node = node.nextNode;
            }
            return node
        } else {
            return null
        }
        // return this.data[this.data.length - 1]
    }

    at(index) {
        let node = this.root

        for (let i = 0; i < index; i++) {
            if (node) {
                node = node.nextNode
            } else {
                return new Error("Index out of bounds!")
            }
        }
        return node
        // return this.data[index]
    }

    pop() {
        let prev;
        let node = this.root

        while (node.nextNode) {
            prev = node
            node = node.nextNode;
        }
        if (prev) {
            prev.nextNode = null
        }

        return node
        // return this.data.pop()
    }

    contains(value) {
        let node = this.root

        while (node) {
            if (node.value === value) {
                return true
            }
            node = node.nextNode
        }
        return false
        // this.data.forEach((node) => {
        //     if (node.value === value) {
        //         return true
        //     }
        // })
    }

    find(value) {
        let i = 0
        let node = this.root

        while (node) {
            if (node.value === value) {
                return i
            }
            node = node.nextNode
            i++
        }
        return null
        // for (let i = 0; i < this.data.length; i++) {
        //     if (this.data[i].value === value) {
        //         return i
        //     }
        // }
        // return null
    }

    toString() {
        let string = ''

        let node = this.root

        while (node) {
            string += `( ${node.value} ) -> `

            node = node.nextNode
        }
        // this.data.forEach((node) => {
        //     string += `( ${node.value} ) -> `
        // })

        return string
    }
}