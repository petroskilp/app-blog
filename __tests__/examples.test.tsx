//__tests/example.test.tsx
import { test, expect, assert } from "vitest";

function sum(a, b) {
  return a + b
}

test("assert 1===1", async () => {
  assert(1 === 1)
});

test("add 2 numbers", () => {
  expect(sum(2,3)).toEqual(5);
})

test("Math sqrt", () => {
  const result = Math.sqrt(4);
  expect(result).toEqual(2);
})

test('expect soft test', () => {
  expect.soft(1+1).toBe(2)
})

test("Math sqrt not", () => {
  const result = Math.sqrt(25);
  expect(result).not.toEqual(4);
})

const stock = {
  type: 'apples',
  count: 13,
}

test('stock has 13 apples', () => {
  expect(stock.type).toBe('apples')
  expect(stock.count).toBe(13)
})

test('stocks are the same', () => {
  const refStock = stock // same reference

  expect(stock).toBe(refStock)
})

test.fails('decimals are not equal in javascript', () => {
  expect(0.2 + 0.1).toBe(0.3) // 0.2 + 0.1 is 0.30000000000000004
})

test('decimals are rounded to 5 after the point', () => {
  // 0.2 + 0.1 is 0.30000 | "000000000004" removed
  expect(0.2 + 0.1).toBeCloseTo(0.3, 5)
  // nothing from 0.30000000000000004 is removed
  expect(0.2 + 0.1).not.toBeCloseTo(0.3, 50)
})

function getApples() {
  return 3
}

test('function returned something', () => {
  expect(getApples()).toBeDefined()
})

function getApplesFromStock(stock: string) {
  if (stock === 'Bill')
    return 13
}

test('mary doesn\'t have a stock', () => {
  expect(getApplesFromStock('Mary')).toBeUndefined()
})

function apples() {
  return null
}

test('we don\'t have apples', () => {
  expect(apples()).toBeNull()
})

let apple_counts = 0

function getApplesCount() {
  return apple_counts >= 1 ? apple_counts: Number.NaN
}
function setApplesCount( count: number) {
  apple_counts = count
}

test('getApplesCount has some unusual side effects...', () => {
  setApplesCount(10)
  expect(getApplesCount()).not.toBeNaN()
  setApplesCount(0)
  expect(getApplesCount()).toBeNaN()
})

const actual = 'stock'

test('stock is type of string', () => {
  expect(actual).toBeTypeOf('string')
})