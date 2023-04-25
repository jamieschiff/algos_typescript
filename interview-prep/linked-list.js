/* MERGE TWO LISTS */

//recursive
const mergeTwoListsRecursive = (l1, l2) => {
  //edge case
  if (!l1 || !l2) {
    return !l1 ? l2 : l1;
  }
  //l1 current val is smaller
  else if (l1.val <= l2.val){
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    //l2 current val is smaller
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
};
//iterative
const mergeTwoListsIterative = (l1, l2)=> {
  let tempNode = new ListNode(null);
  let currentNode = tempNode;
  
  while (l1 && l2) {
      if(l1.val < l2.val) {
          currentNode.next = l1;
          l1 = l1.next
      } else {
          currentNode.next = l2;
          l2 = l2.next
      }
      currentNode = currentNode.next;
  }
  currentNode.next = l1 || l2;
  return tempNode.next;
};