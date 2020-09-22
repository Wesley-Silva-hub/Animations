const logo = document.querySelectorAll('#logo path');

console.log(logo);

for(let i = 0; i < logo.length; i++) {
    console.log(`Letra ${i} é ${logo[i].getTotalLength()}`);
}