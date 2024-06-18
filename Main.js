function kirimPesan() {

    var nama = document.getElementByI('nama');
    var email = document.getElementById('email');
    var pesan = document.getElementById('pesan');

    var gabungan = 'Nama%3A%0A' + nama.value + '%0AEmail%3A%0A' + email.value + '%0APesan%3A%0A' + pesan.value;

    var token = '7463181112:AAGkWXE5AVaXmF9MRdnNoP4z-rYlTEl3pwg';
    var grup = '6544933274';

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}
