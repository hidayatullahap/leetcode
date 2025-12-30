import { assertEquals } from "@std/assert";
import { twoSum1 } from "./twosum.ts";

Deno.test(function addTest() {
  assertEquals(twoSum1([2, 7, 11, 15], 9), [0, 1]);
  assertEquals(twoSum1([3, 2, 4], 6), [1, 2]);
  assertEquals(twoSum1([3, 3], 6), [0, 1]);
  assertEquals(twoSum1([3, 2, 3], 6), [0, 2]);
});
