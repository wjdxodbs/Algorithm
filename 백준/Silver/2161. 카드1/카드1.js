const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString());

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  pop() {
    if (!this.head) return null;

    const head = this.head;
    this.head = head.next;

    if (!this.head) {
      this.tail = null;
    }

    return head.value;
  }

  back() {
    if (!this.head) return;

    const head = this.head;
    this.head = head.next;

    if (!this.head) {
      this.tail = null;
    }

    if (this.tail) {
      this.tail.next = head;
      this.tail = head;
      this.tail.next = null;
    } else {
      this.head = this.tail = head;
      this.head.next = null;
    }
  }
}

const queue = new Stack();

for (let i = 1; i <= n; i++) {
  queue.push(i);
}

const result = [];
while (queue.head) {
  result.push(queue.pop());
  if (queue.head) queue.back();
}

console.log(result.join(" "));
