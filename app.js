document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Formun sayfayı yenilemesini engeller

    // Etkinlik adı ve tarihi al
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;

    if (eventName && eventDate) {
        // Yeni etkinlik oluştur
        const eventItem = document.createElement('li');
        eventItem.textContent = `${eventName} - ${eventDate}`;
        
        // Etkinlik listesine ekle
        document.getElementById('events').appendChild(eventItem);

        // Formu temizle
        document.getElementById('eventName').value = '';
        document.getElementById('eventDate').value = '';
    } else {
        alert('Lütfen tüm alanları doldurun!');
    }
});
