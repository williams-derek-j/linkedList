import LinkedList from './LinkedList'
import Node from './Node'

export default class Hashmap {
    constructor(capacity) {
        if (!capacity) {
            capacity = 16
        }
        this.data = []

        for (let i = 0; i < capacity; i++) {
            this.data[i] = new LinkedList()
        }

        this.capacity = capacity
        this.factor = 0.8
    }

    full() {
        if (this.length() > (this.capacity * this.factor)) {
            console.log('Hashmap full, expanding...')

            const data = this.entries()
            this.clear()

            for (let i = this.capacity; i < this.capacity * 2; i++) {
                this.data[i] = new LinkedList()
            }
            this.capacity *= 2

            data.forEach((entry) => {
                this.set(entry[0], entry[1])
            })

            return true
        } else {
            return false
        }
    }

    hash(key) {
        let hashCode = 0

        const primeNumber = 31
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
            hashCode = hashCode % this.capacity
        }
        return hashCode
    }

    set(key, value) {
        this.full()

        const hash = this.hash(key)
        const bucket = this.data[hash]

        if (bucket.contains(key)) {
            bucket.set(key, value)
            // const modified = bucket.getNode(key)
            // modified.value = value
        } else {
            bucket.append(key, value)
        }
    }

    getValue(key) {
        const hash = this.hash(key)
        const bucket = this.data[hash]

        if (bucket.contains(key)) {
            return bucket.getNode(key).value
        } else {
            return null
        }
    }

    remove(key) {
        const hash = this.hash(key)
        const bucket = this.data[hash]

        if (bucket.contains(key)) {
            bucket.remove(key)
            // bucket.removeAt(bucket.findIndex(key))
        }
    }

    has(key) {
        const hash = this.hash(key)
        const bucket = this.data[hash]

        return bucket.contains(key)
    }

    length() {
        let length = 0

        this.data.forEach((bucket) => {
            length += bucket.size()
        })
        return length
    }

    clear() {
        this.data.forEach((bucket) => {
            bucket.clear()
        })
    }

    keys() {
        let keys = []

        this.data.forEach((bucket) => {
            keys.push(...bucket.keys())
        })
        return keys
    }

    values() {
        let values = []

        this.data.forEach((bucket) => {
            values.push(...bucket.values())
        })
        return values
    }

    entries() {
        let entries = []

        this.data.forEach((bucket) => {
            entries.push(...bucket.entries())
        })
        return entries
    }
}