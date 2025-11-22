let yourNumber = prompt(`masukan angka`);
for(yourNumber = 0; yourNumber <= lineNumber; yourNumber++) {
    if(yourNumber % 2 == 1) {
    alert('angkanya Ganjil!');
    break;
} else if(yourNumber % 2 == 0) {
    alert('Angkanya Genap!');
    break;
} else{
    alert('periksa lagi masukan angka');
}
}
