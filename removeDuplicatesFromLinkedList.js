class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) Time and O(1) Space Complexity
const removeDuplicatesFromLinkedList = (linkedList) => {
  let currentNode = linkedList;
  while (currentNode) {
    let lastSeenValue = currentNode.value;
    let nextNode = currentNode.next;
    while (nextNode && nextNode.value === lastSeenValue) {
      nextNode = nextNode.next;
    }
    currentNode.next = nextNode;
    currentNode = currentNode.next;
  }
  return linkedList;
};
