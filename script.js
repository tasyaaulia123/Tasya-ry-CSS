const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const nis = document.getElementById('nis').value.trim();
    const mapel = document.getElementById('mapel').value.trim();
    const noHp = document.getElementById('no-hp').value.trim();

    if (nama === '' || nis === '' || mapel === '' || noHp === '') {
        alert('Harap lengkapi semua data!');
    } else {
        alert(`Data telah berhasil disimpan:\nNama: ${nama}\nNIS: ${nis}\nMata Pelajaran: ${mapel}\nNomor HP: ${noHp}`);
        form.reset();
    }
});