export const profile = (func: () => void): number => {
  const result = [];
  for (let i = 0; i < 50; i++) {
    const start = performance.now();
    func();
    const end = performance.now();
    result.push(end - start);
  }
  return result.reduce((a, b) => a + b) / result.length;
};
