# PlaneScape-MERN
-Projede React, Tailwind, HTML5, Node.js, Express.js, MongoDB Atlas kullanılmıştır(MERN). 

-Proje 3 sayfadan oluşmaktadır.Bunlar; Home.jsx, FlightDetails.jsx, MyFlights.jsx

-API sorgusu çekerken sorun yaşadığım için bütün uçuş verilerini kendi oluşturduğum veritabanından çektim. Backend -> controllers klasörü içindeki flightController.js içinde bütün CRUD işlemleri yapılabilmektedir. Aynı şekilde myFlightController.js klasörü içinde ise Create ve Read işlemleri yapılabilmektedir.

-Veriler cloud'da tutulmuş backend sorguları başarıyla gerçekleştirilebilmektedir.

-Veritabanı sorguları önce ThunderClient kullanılarak doğrulanmıştır.

-Şablona çok benzeyen proje geliştirilmiş olup sade ve şık buton efektleri verilmiştir.

<h1>Anasayfa (Home.jsx):</h1>

- Filtreleme yapmadan önce kullanıcıdan filtrelemek için veri girişi isteniyor.Program kesinlikle çalışıyor ancak filtrelemede sorun yaşarsanız sayfayı yenileyin ve tekrar filtreleyin. 
  
![Home1](https://github.com/user-attachments/assets/fcc8c82a-7429-4240-b6d8-64cb0632f169)

<h1>Anasayfa Filtreleme (Home.jsx):</h1>

-Kullanıcının gidiş-varış yerine ve gireceği tarih aralığı içine uygun olan uçuş biletlerini Show Flights butonuna basılınca karşımıza getiriyor. (Ankara-İzmir veya Ankara-İstanbul arası sorgu yapınız. 20 Eylül-30 Eylül arası en çok veri bulunuyor)

-Burada bütün uçuş bilgileri veritabanından çekilmiştir.

-Eğer kullanıcı biletlerin üstündeki check the details butonuna basarsa daha detaylı bilgilerin gösterileceği FlightDetails.jsx sayfasına götürülüyor.

-Not: Bütün sorguları en geç 30 eylül'e kadar ekledim. Sorgu yaparken veri gözükmesi için en geç tarihi 30 eylül 2024 seçmelisiniz. Başlangıç tarihi önemli değildir. Sadece 30 eylül 2024 öncesi olması gerekir.

![Home2](https://github.com/user-attachments/assets/7ac2a15e-8bb9-4fe0-ac24-2e3be88b7ba6)

<h1>FlightDetails(FlightDetails.jsx):</h1>

-Basılan uçuş biletiyle ilgili daha detaylı bilgiler ve daha farklı bir tasarım burada görülebilir.

-Eğer kullanıcı Buy Ticket butonuna basarsa ekranın sol altında uçuş bileti satın alınmıştır şeklinde bir bildirim görülür ve MyFlights.jsx sayfasına götürülür.

![FlightDetails](https://github.com/user-attachments/assets/46459ac8-bad2-4a5d-b3f7-dca891788b46)

<h1>FlightDetails(FlightDetails.jsx):</h1>

-Kullanıcının FlightDetails.jsx sayfasından satın aldığı bütün uçuş biletleri tarihleriyle birlikte ve en son aldığı bilet en üstte görülecek şekilde görüntülenir.

-Yine bu sayfaya anasayfadaki My Flights butonundan da ulaşılabilir. Burdaki butonlarda da sade css tasarımları vardır.

![MyFlights](https://github.com/user-attachments/assets/5c3a7575-3518-461e-af8a-6b7fc3fdafa3)




