import { expect, test } from "vitest";
import { pairs } from "./pairs";

test('pairs function', () => {
  expect(pairs([1, 2, 3, 4])).toEqual([2, 4]);
})