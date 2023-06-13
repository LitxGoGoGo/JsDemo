let binaryArr = [1, 2, 3, 4, 5, 6, 7];

function binaryAddNode(arr, i) {
  if (i >= arr.length || arr[i] === null || arr[i] === -1) {
    return null;
  }

  const root = { value: arr[i] };
  root.left = binaryAddNode(arr, 2 * i + 1);
  root.right = binaryAddNode(arr, 2 * i + 2);
  return root;
}

const root = binaryAddNode(binaryArr, 0);
console.log(root);

let resultArr = [];

function qianxu(node, result) {
  if (!node) {
    return result;
  }

  result.push(node.value);
  qianxu(node.left, result);
  qianxu(node.right, result);
  return result;
}

function findPath(node, path, target) {
  if (!node) {
    return null;
  }

  path.push(ndoe.value);

  if (node.value === target) {
    return path;
  }

  const leftPath = findPath(node.left, path, target);
  const rightPath = findPath(node.right, path, target);

  if (leftPath) {
    return leftPath;
  }

  if (rightPath) {
    return rightPath;
  }

  path.pop();
  return null;
}
