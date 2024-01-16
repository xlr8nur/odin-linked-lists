const Node = required('./Node');

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        if (!this.head) {
            this.head = new Node(value);
            return this;
        }
        let tmp = this.head();
        tmp.nextNode = new Node(value);
        return tmp;
    }

    prepend(value) {
        if (!this.head) {
            this.head = new Node(value);
        }
        const prevHead = this.head;
        this.head = new Node(value, prevHead);
    }

    size() {
        let count = 0;
        let tmp = this.head;
        while (tmp !== null) {
            count ++;
            tmp = tmp.nextNode;
        }
        return count;
    }

    head() {
            return this.head;
    }

    tail() {
        if (!this.head)
        return null;
        let tmp = this.head;
        while (tmp.nextNode !== null) {
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    at(index) {
        if (!this.head)
        return null;
        for (let i = 0; i < index; i++) {
            tmp = tmp.next;
        }
        return tmp ? tmp : null;
    }

    pop() {
        if (!this.head)
        return null;
        if (!this.head.next) {
           this.head = null;
           return;
        }
        let tmpBeforeTail = this.tail(this.size() - 2);
        tmpBeforeTail.next = null;
        return this.head;
    }

    contains(value) {
        if (!this.head)
        return null;
        let tmp = this.head;
        while (tmp.next !== null) {
          if (tmp.value === value)
          return true;
          tmp = tmp.next;
        }
        return tmp.value === value ? true : false;
    }

    find(value) {
        if (!this.head)
        return null;
        let count = 0;
        let tmp = this.head;
        while (tmp !== null) {
            if (tmp.value === value)
            return count;
            tmp = tmp.next;
            count++;
        }
        if (tmp.value === value)
        return count;
        return null;
    }

    toString() {
        if (!this.head)
        return '(null)';
        let tmp = this.head;
        let stringList = "";
        while (tmp !== null) {
            stringList += `( ${tmp.value} ) -> ` ;
            tmp = tmp.next;
        }
        return `${str} (${tmp.value}) -> (null)`;
    }
}

const myLinkedList = new LinkedList();

myLinkedList.append(2);
myLinkedList.append(1);
myLinkedList.append(3);
myLinkedList.prepend(4);
myLinkedList.pop();

// examples
console.log("LinkedList:", myLinkedList.toString());
console.log("Size:", myLinkedList.size());
console.log("Head:", myLinkedList.head().value);
console.log("Tail:", myLinkedList.tail().value);

const index = 2;
console.log(`Node at index ${index}:`, myLinkedList.at(index).value);

const poppedValue = myLinkedList.pop();
console.log(`Popped value: ${poppedValue}`);
console.log("LinkedList after pop:", myLinkedList.toString());

const searchValue = 2;
console.log(`Contains ${searchValue}:`, myLinkedList.contains(searchValue));

const searchValueNotFound = 5;
console.log(`Find index of ${searchValueNotFound}:`,
myLinkedList.find(searchValueNotFound));

console.log("Final Linked List:", myLinkedList.toString());