const map = new Map();
map.set('brand', 'Intel');
map.set('model', '4004');
map.set('year', 1971);

for (const [key, value] of map) {
  console.log(`Ключ — ${key}, значение — ${value}`);
}

