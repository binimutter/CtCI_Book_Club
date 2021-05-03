// Given a linked list that may contain a loop, write an algorithm to return the node at the beginning of the loop or false if there is no loop

/*
Example:
ll1 = 1 -> 2 -> 3 -> 4 -> 2 (same 2 as before)
return 2 node
return false if there is no loop
*/

/*
Definition of a node in a linked list
function Node(val) {
  this.val = val;
  this.next = null;
}
*/
function Node(val) {
  this.val = val;
  this.next = null;
}

const loopDetection = (head) => {
  let tortoise = head;
  let hare = head;
  let cycle = false;

  while (hare && hare.next) {
    hare = hare.next.next;
    tortoise = tortoise.next;
    if (hare === tortoise) {
      cycle = true;
      break;
    }
  }
  if (cycle) {
    tortoise = head;
    while (tortoise !== hare) {
      tortoise = tortoise.next;
      hare = hare.next;
    }
  } else {
    return false;
  }
  return tortoise;
};


module.exports = loopDetection;
