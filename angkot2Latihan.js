let jmlAngkot = 10;
let angkotBeroperasi = 6;
let nomorAngkot = 1;

while(nomorAngkot <= angkotBeroperasi) {
    console.log(`Angkot No. ${nomorAngkot} beroperasi dengan baik!.`);
    nomorAngkot++;
};

for(nomorAngkot = angkotBeroperasi + 1; nomorAngkot <= 10; nomorAngkot++) {
    console.log(`Angkot No. ${nomorAngkot} tidak beroperasi dengan baik!.`);
}