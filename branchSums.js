class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) Time and O(n) Space Complexity
const branchSums = (root) => {
  let sums = [];
  nodeSum(root, 0, sums);
  return sums;
};

const nodeSum = (tree, sum, sums) => {
  if (!tree) {
    return;
  }
  sum += tree.value;

  if (!tree.left && !tree.right) {
    sums.push(sum);
  }
  nodeSum(tree.left, sum, sums);
  nodeSum(tree.right, sum, sums);
};
