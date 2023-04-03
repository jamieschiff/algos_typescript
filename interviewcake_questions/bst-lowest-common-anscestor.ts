// class TreeNode{
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val: number){
//     this.val = val
//     this.left = null
//     this.right = null
//   }
// }

const bst_lowest_common_ancestor = (root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null => {
  //base case : if the root is null, return null
  if(root === null){
    return null
  }
  //if both p and q are less than the current node, the LCA is in the left subtree
  if(root.value > p.value && root.value > q.value){
    return bst_lowest_common_ancestor(root.left, p, q)
  }
  //if both p and q are greater than the current node, the LCA is in the right subtree
  if(root.value < p.value && root.value < q.value){
    return bst_lowest_common_ancestor(root.right, p, q)
  }
  //if p and q are on different sides of the current node, the current node is the LCA
  return root
} 

