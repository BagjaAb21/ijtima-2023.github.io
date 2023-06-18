
// Set data waktu hitung mundur
var countDownDate = new Date("sept 23, 2022 05:00:00").getTime();

// Update waktu perhitungan hitung mundur setiap 1 detik
var x = setInterval(function() {

  // Get data hari ini data dan waktu
  var now = new Date().getTime();

  // mencari jarak waktu dari sekarang ke waktu yang akan di hitung mundur
  var distance = countDownDate - now;

  // perhitungan waktu untuk hari, jam, menit, dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // menampilkan element yang di panggil dengan id = "hitung_mundur"
  document.getElementById("hitung_mundur").innerHTML = days + " Hari " + hours + " Jam "
  + minutes + " Menit " + seconds + " Detik ";

  // jika perhitungan nya selesai maka akan menampilkan teks di bawah
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hitung_mundur").innerHTML = "SELAMAT MENGIKUTI IJTIMA NASIONAL 2022";
  }
}, 1000);