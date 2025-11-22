function checkGrade(grades) {
    for(let i = 0; i < grades.length; i++) {
        if(typeof grades[i] !== 'number') {
            throw new Error('Invalid input. Please provide an array of numbers.');
        };

        const nilai = grades[i];
        let predikat;

        if(nilai >= 90) {
            predikat = 'A';
        } else if(nilai >= 80) {
            predikat = 'B';
        } else if(nilai >= 70) {
            predikat = 'C';
        } else if(nilai >= 60) {
            predikat = 'D';
        } else {
            predikat = 'E';
        }

        console.log(`Grade ${i + 1}: ${nilai} (${predikat})`);
    };
};
try {
  const studentGrades = [ 95, 85, 65, 80, 70];
  checkGrade(studentGrades);
} catch (e) {
  console.error(e);
};