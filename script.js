const ekran = document.getElementById('ekran');
let ifade = '';

// Butonlara tıklanınca
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const deger = button.getAttribute('data-deger');
    const id = button.id;

    if (id === 'sil') {
      // Son karakteri sil
      ifade = ifade.slice(0, -1);
    } else if (id === 'temizle') {
      // İfadeyi temizle
      ifade = '';
    } else if (id === 'esittir') {
      try {
        // Güvenli şekilde hesapla
        ifade = eval(ifade) + '';
      } catch {
        ifade = 'Hata';
      }
    } else if (deger) {
      // Diğer butonlar (sayı ve işlem)
      ifade += deger;
    }

    // Eğer boşsa 0 göster
    ekran.textContent = ifade || '0';
  });
});
