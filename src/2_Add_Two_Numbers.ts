
class ListNode{
	val: number;

	next: ListNode | null;

	constructor(val?: number, next?: ListNode | null){
		this.val = (val === undefined ? 0 : val);
		this.next = (next === undefined ? null : next);
	}
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null{
	if (l1 == null && l2 == null) return null;
	if (l1 == null) return l2;
	if (l2 == null) return l1;
	const result: ListNode = new ListNode();
	let node:ListNode = result;
	let l1next: ListNode | null = l1;
	let l2next: ListNode | null = l2;
	let remainder = 0;
	// eslint-disable-next-line no-constant-condition
	while (true){
		const l1val = l1next == null ? 0 : l1next.val;
		const l2val = l2next == null ? 0 : l2next.val;
		const addition = l1val + l2val + remainder;
		const res_digit = addition % 10;
		remainder = Math.floor(addition / 10);
		node.val += res_digit;
		if (l1next?.next == null && l2next?.next == null && remainder == 0){
			node.val += remainder;
			break;
		}

		l1next = l1next?.next == null ? null : l1next!.next;
		l2next = l2next?.next == null ? null : l2next!.next;
		const next:ListNode = new ListNode();
		node.next = next;
		node = node.next;
	}
	return result;
}

const l1 = make_node_out_of_list([ 9, 9, 9, 9 ]);
const l2 = make_node_out_of_list([ 9, 9, 9, 9, 9, 9, 9 ]);

function print_list_nodes(head:ListNode){
	const res = [ head.val ];
	let next = head.next!;
	while (next.next != null){
		res.push(next.val);
		next = next.next!;
	}
	res.push(next.val);
	return res;
}
function make_node_out_of_list(arr: number[]){
	const head:ListNode = new ListNode(arr[ 0 ]);
	let next:ListNode = head;
	for (let i = 1; i < arr.length; i++){
		const num = arr[ i ];
		next.next = new ListNode(num);
		next = next.next;
	}
	return head;
}
console.log(print_list_nodes(l1));
console.log(print_list_nodes(l2));
console.log(print_list_nodes(addTwoNumbers(l1, l2)!));