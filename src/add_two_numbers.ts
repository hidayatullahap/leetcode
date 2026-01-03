export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function listFactory(nodes: number[]): ListNode | null {
    let result: ListNode | null = null
    for (const node of nodes) {
        if (result === null) {
            result = new ListNode(node)
        } else {
            result = new ListNode(node, result)
        }
    }

    return result
}

// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// 
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const parseLinkedList = (node: ListNode) => {
        const l: number[] = []

        let curNode: ListNode | null = node
        while (curNode) {
            l.push(curNode.val)
            curNode = curNode.next
        }

        return l.toReversed()
    }

    const pl1 = parseLinkedList(l1!)
    const pl2 = parseLinkedList(l2!)
    const head = pl1.length >= pl2.length ? pl1 : pl2

    let hasExtra = false
    const result = []
    for (const [i, b] of head.entries()) {
        let addition = hasExtra ? b + 1 : b
        if (pl2[i]) {
            addition = addition + pl2[i]
        }

        if (addition >= 10) {
            hasExtra = true
            addition = addition - 10
        } else {
            hasExtra = false
        }

        result.push(addition)
    }

    if (hasExtra) {
        result.push(1)
    }

    return listFactory(result)
};