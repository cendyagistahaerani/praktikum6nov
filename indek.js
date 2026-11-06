// operasi string
let dataMHS = "salim";

// charAt => mengambil karakter pada index tertentu
console.log(`karakter pada index ke-0: ${dataMHS.charAt(0)}`);
console.log(`karakter pada index ke-1: ${dataMHS.charAt(1)}`);
console.log(`karakter pada index ke-2: ${dataMHS.charAt(2)}`);
console.log(`karakter pada index ke-3: ${dataMHS.charAt(3)}`);

// concat => menggabungkan nilai string
let dataMHS2 = "cendy";
let mahasiswa = dataMHS.concat(" ", dataMHS2);
console.log(`data mahasiswa: ${mahasiswa}`);

// substring
console.log(`substring dari index ke-0 sampai ke-3: ${dataMHS.substring(0, 3)}`);
console.log(`substring dari index ke-0 sampai ke-3: ${dataMHS.substring(3, 0)}`);

//slice => mengambil sebagian karakter string
console.log(`slice index ke-0 sampai index ke-3: ${mahasiswa.slice(0, 3)}`);
console.log(`slice index ke-3 sampai index ke-0: ${mahasiswa.slice(3, 0)}`);

//indexOf() => mencari index dari karakter tertentu
console.log(`index dari karakter "d": ${mahasiswa.indexOf("d")}`);
console.log(`index dari karakter "o": ${mahasiswa.indexOf("o")}`);
console.log(`index dari karakter "n": ${mahasiswa.indexOf("n")}`);
console.log(`index dari karakter "i": ${mahasiswa.indexOf("i")}`);

//replace => mengganti karakter tertentu dengan karakter lain
console.log(`data mahasiwa sebelum replace: ${dataMHS}`);
let dataMhs3 = dataMHS.replace("doni", "dodi");
console.log(`data mahasiswa setelah replace: ${dataMhs3}`);

//toUpperCase() => mengubah karakter menjadi huruf besar
console.log (`data mahasiswa sebelum toUpperCase: ${mahasiswa}`);
let mahasiswa3 = mahasiswa.toUpperCase();
console.log (`data mahasiswa setelah toUpperCase: ${mahasiswa3}`);

//toLowerCase() => mengubah karakter menjadi huruf kecil
console.log (`data mahasiswa sebelum toLowerCase: ${mahasiswa}`);
let mahasiswa4 = mahasiswa.toLowerCase();
console.log (`data mahasiswa setelah toLowerCase: ${mahasiswa4}`);