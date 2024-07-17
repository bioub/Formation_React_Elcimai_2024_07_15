import { expect, test } from "vitest";
import { racineCarre } from "./racineCarre";

test('racineCarre returns 2 with 4 as a param', () => {
  expect(racineCarre(4)).toBe(2);
})

test('racineCarre throws with negative param', () => {
  expect(() => racineCarre(-1)).toThrow();
})