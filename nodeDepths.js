class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) Time and O(h) Space Complexity
// where h is the height of the tree
// const nodeDepths = (root, depth = 0) => {
//   if (!root) {
//     return 0;
//   }

//   return (
//     depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
//   );
// };

// O(n) Time and O(h) Space Complexity
// where h is the height of the tree
const nodeDepths = (root) => {
  let sum = 0;
  let stack = [{ node: root, depth: 0 }];
  while (stack.length) {
    let { node, depth } = stack.pop();
    if (!node) {
      continue;
    }
    sum += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return sum;
};
