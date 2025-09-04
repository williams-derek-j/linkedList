import Node from "./Node"

export default class LinkedList {
    constructor() {
        this.root = null
    }

    set(key, value) {
        const node = this.getNode(key)

        if (node) {
            node.value = value
        } else {
            return new Error("Key not found!")
        }
    }

    append(key, value) {
        if (this.contains(key)) {
            this.set(key, value)

            return new Error("Tried to append already-existing key! Setting new value on key instead...")
        } else {
            const node = new Node(key, value)

            if (this.root) {
                let prev = this.root

                while (prev.nextNode) {
                    prev = prev.nextNode
                }
                prev.nextNode = node
            } else {
                this.root = node
            }
        }
    }

    prepend(key, value) {
        if (this.contains(key)) {
            this.set(key, value)

            return new Error("Tried to prepend already-existing key! Setting new value on key instead...")
        } else {
            const node = new Node(key, value)

            node.nextNode = this.root
            this.root = node
        }
    }

    insertAt(index, key, value) {
        if (this.contains(key)) {
            const node = this.getNode(key)

            let prev = this.root
            for (let i = 0; i < index - 1; i++) {
                if (prev.nextNode) {
                    prev = prev.nextNode
                } else {
                    return new Error("Tried to insert already-existing key with an index out of bounds! Key and its value are unchanged.")
                }
            }
            node.value = value
            node.nextNode = prev.nextNode
            prev.nextNode = node

            return new Error("Tried to insert already-existing key! Setting new value on key instead and updating index...")
        } else {
            const node = new Node(key, value)

            let prev = this.root
            for (let i = 0; i < index - 1; i++) {
                if (prev.nextNode) {
                    prev = prev.nextNode
                } else {
                    return new Error("Index out of bounds! Key not set.")
                }
            }
            node.nextNode = prev.nextNode
            prev.nextNode = node
        }
    }

    removeAt(index) {
        let prev
        let target = this.root

        for (let i = 0; i < index; i++) {
            prev = target
            target = target.nextNode
        }
        if (target) {
            prev.nextNode = target.nextNode
            target.nextNode = null
            target.key = null
            target.value = null
        } else {
            return new Error("Index out of bounds!")
        }
        target = null
    }

    remove(key) {
        let got = this.get(key) // returns [index, {key, value, nextNode}]

        if (node) {
            const index = got[0]
            let node = got[1]

            const prev = this.getNodeAt(index - 1)
            prev.nextNode = node[1].nextNode

            node.nextNode = null
            node.key = null
            node.value = null
            node = null
        } else {
            return new Error("Key not found!")
        }
        got = null
    }

    get(key) {
        let i = 0
        let node = this.root

        while (node) {
            if (node.key === key) {
                return [i, node]
            }
            node = node.nextNode
            i++
        }
        return null
    }

    getNode(key) {
        let node = this.root

        while (node) {
            if (node.key === key) {
                return node
            }
            node = node.nextNode
        }
        return null
    }

    getNodeAt(index) {
        let node = this.root

        for (let i = 0; i < index; i++) {
            if (node) {
                node = node.nextNode
            } else {
                return new Error("Index out of bounds!")
            }
        }
        return node
    }

    contains(key) {
        let node = this.root

        while (node) {
            if (node.key === key) {
                return true
            }
            node = node.nextNode
        }
        return false
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
                node = node.nextNode
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
                node = node.nextNode
            }
            return node
        } else {
            return null
        }
    }

    pop() {
        let prev
        let node = this.root

        while (node.nextNode) {
            prev = node
            node = node.nextNode
        }
        if (prev) {
            prev.nextNode = null
        }
        return node
    }

    keys() {
        let node = this.root
        let keys = []

        while (node) {
            keys.push(node.key)

            node = node.nextNode
        }
        return keys
    }

    values() {
        let node = this.root
        let values = []

        while (node) {
            values.push(node.value)

            node = node.nextNode
        }
        return values
    }

    entries() {
        let node = this.root
        let entries = []

        while (node) {
            entries.push([node.key, node.value])

            node = node.nextNode
        }
        return entries
    }

    clear() {
        let prev
        let node = this.root

        if (node) {
            while (node.nextNode) {
                prev = node
                node = node.nextNode
                prev.nextNode = null
            }
            node = null
        }
    }

    toString() {
        let string = ''

        let node = this.root

        while (node) {
            string += `( ${node.value} ) -> `

            node = node.nextNode
        }
        return string
    }
}