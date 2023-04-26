class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(log(n)) Time and O(1) Space Complexity
const findClosestValueInBST = (tree, target) => {
  let currentNode = tree;
  let closest = currentNode.value;
  while (currentNode) {
    if (Math.abs(target - currentNode.value) < Math.abs(target - closest)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }
  return closest;
};
