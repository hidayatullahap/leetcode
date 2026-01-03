import { assertEquals } from "@std/assert";
import { addTwoNumbers, listFactory } from "./add_two_numbers.ts";

Deno.test(function addTwoNumberTest() {
    const tests = [
        { l1: [2, 4, 3], l2: [5, 6, 4], expected: [7, 0, 8] },
        { l1: [0], l2: [0], expected: [0] },
        { l1: [9, 9, 9, 9, 9, 9, 9], l2: [9, 9, 9, 9], expected: [8, 9, 9, 9, 0, 0, 0, 1] },
        { l1: [2, 4, 9], l2: [5, 6, 4, 9], expected: [7, 0, 4, 0, 1] },
    ]

    for (const t of tests) {
        const l1 = listFactory(t.l1)
        const l2 = listFactory(t.l2)
        const expected = listFactory(t.expected)
        const assert = addTwoNumbers(l1, l2)
        assertEquals(assert, expected)
    }
});