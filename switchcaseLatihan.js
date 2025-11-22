let listMakanan = prompt('masukan Jenis makanan atau minuman');

switch (listMakanan) {
    case 'Nasi', 'nasi':
    case 'Daging', 'daging':
    case 'Sayur', 'sayur':
        alert('Makanan sehat');
    break;

    case 'gorengan', 'Gorengan':
    case 'hamburger', 'Hamburger':
        alert('Makanan "Tidak Sehat"');
    break;
    default:
        alert('Makanan Tidak ada');
}