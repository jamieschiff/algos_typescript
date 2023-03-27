class TreeNode{
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number){
    this.value = val
    this.left = null
    this.right = null
  }
}

const bst_min_max = (root: TreeNode) : number => {
  //traverse the left subtree to find the minimum value
  const min = (node: TreeNode): number => {
    if(node.left){
      return min(node.left)
    } else {
      return node.value
    }
  }
  //traverse the right subtree to find the maximum value
  const max = (node: TreeNode): number => {
    if (node.right){
      return max(node.right)
    } else{
      return node.value
    }
  }
  //return the difference of the maximum and minimum value
  return max(root) - min(root)
}