function rounding(n) {
  let factor = 10 ** n;
  return Math.round(Math.random() * factor) / factor;
}

console.log(`随机数保留两位小数: ${rounding(2)}`);
console.log(`随机数保留三位小数: ${rounding(3)}`);