// NOMOR WA JUNZ (088213968704)
const NOMOR_WA = '6288213968704';

// Fungsi pilih paket
function pilihPaket(nama, harga) {
    bukaModal(nama, harga);
}

// Fungsi buka modal
function bukaModal(namaPaket = '', hargaPaket = '') {
    if (namaPaket) {
        document.getElementById('paketPilih').value = namaPaket;
        document.getElementById('hargaPilih').value = 'Rp ' + hargaPaket.toLocaleString('id-ID');
    }
    document.getElementById('modalOrder').style.display = 'block';
}

// Fungsi buka modal langsung tanpa paket
function bukaModalLangsung() {
    document.getElementById('paketPilih').value = '- (Pilih nanti di chat)';
    document.getElementById('hargaPilih').value = '-';
    document.getElementById('modalOrder').style.display = 'block';
}

// Fungsi tutup modal
function tutupModal() {
    document.getElementById('modalOrder').style.display = 'none';
}

// Fungsi kirim ke WhatsApp
function kirimKeWA() {
    // Ambil data dari form
    const paket = document.getElementById('paketPilih').value;
    const harga = document.getElementById('hargaPilih').value;
    const nama = document.getElementById('namaUser').value;
    const discord = document.getElementById('discordUser').value;
    const link = document.getElementById('linkServer').value;
    const catatan = document.getElementById('catatanUser').value;

    // Validasi
    if (!nama || !discord || !link) {
        alert('🐱 Isi dulu ya: Nama, Username Discord, dan Link Server!');
        return;
    }

    // Format pesan lucu
    const pesan = `🐱 *HALO JUNZ!* Ada customer nih! 🐱%0A%0A` +
        `══════════════════%0A` +
        `📦 *PAKET:* ${paket}%0A` +
        `💰 *HARGA:* ${harga}%0A` +
        `👤 *NAMA:* ${nama}%0A` +
        `🆔 *USERNAME DISCORD:* ${discord}%0A` +
        `🔗 *LINK SERVER:* ${link}%0A` +
        `📝 *CATATAN:* ${catatan || '-'}%0A` +
        `══════════════════%0A%0A` +
        `Siap transfer kak, meow! 🐾`;

    // Buka WhatsApp
    window.open(`https://wa.me/${NOMOR_WA}?text=${pesan}`, '_blank');

    // Tampilkan toast
    const toast = document.getElementById('toastNotif');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);

    // Tutup modal
    tutupModal();

    // Reset form
    setTimeout(() => {
        document.getElementById('namaUser').value = '';
        document.getElementById('discordUser').value = '';
        document.getElementById('linkServer').value = '';
        document.getElementById('catatanUser').value = '';
    }, 500);
}

// Tutup modal kalo klik di luar
window.onclick = function(event) {
    const modal = document.getElementById('modalOrder');
    if (event.target == modal) {
        tutupModal();
    }
}
