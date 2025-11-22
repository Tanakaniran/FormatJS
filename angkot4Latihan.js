let jumlahAngkot = 10;
let angkot_beroperasi = 6;
let noAngkot = 1;

for(noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++){
    if(noAngkot <= 6 && noAngkot !== 5 ) {
        console.log(`Angkot No. ${noAngkot} sedang beroperasi dengan baik!`);
    } else if(noAngkot === 8 || noAngkot === 10 || noAngkot == 5){
        console.log(`Angkot No. ${noAngkot} sedang lembur`);
    } else {
        console.log(`Angkot No. ${noAngkot} tidak beroperasi dengan baik`);
    }
}