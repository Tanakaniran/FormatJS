// membuat function sesuai dengan Formula-nya
function jarakTempuhPerpindahan(a, t){
    const jarakTempuh = (1/2) * a * t**2;
    return jarakTempuh;
}

const Peny = jarakTempuhPerpindahan(3,4);
console.log(Peny + "meter");