console.log(Boolean(0)); // Ожидала flase, результат совпал с ожиданием
console.log(Boolean('')); // Ожидала flase, результат совпал с ожиданием
console.log(Boolean('0')); // Ожидала true, результат совпал с ожиданием
console.log(Boolean(null)); // Ожидала flase, результат совпал с ожиданием
console.log(Boolean(undefined)); // Ожидала flase, результат совпал с ожиданием
console.log(Boolean(NaN)); // Ожидала flase, результат совпал с ожиданием
console.log(Boolean([])); // Ожидала true, результат совпал с ожиданием
console.log(Boolean({})); // Ожидала true, результат совпал с ожиданием
console.log(Boolean(' ')); // Ожидала true, результат совпал с ожиданием
console.log(Boolean(-1)); // Ожидала true, результат совпал с ожиданием