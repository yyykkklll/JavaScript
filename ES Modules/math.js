export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
// 只能有一个默认导出
export default function multiply(a, b) {
  return a * b;
}
