function cekKhodam() {
  const nameInput = document.getElementById("nameInput").value.trim();
  if (nameInput === "") {
    alert("Masukkan nama untuk memeriksa Hero.");
    return;
  }
  const khodams = [
    {
      name: "Cyclops",
      meaning:
        "Kamu dapat hero mata 1 ini bisa jadi kamu adalah keturunan... ytta aja",
    },
    {
      name: "Natalia",
      meaning: "Sering Menghilang Jika mendapatkan masalah besar.",
    },
    {
      name: "Kagura",
      meaning:
        "Seorang yang sangat bersemangat dalam kerja keras, salah satunya yaitu ojek payung :v",
    },
    {
      name: "Lolita",
      meaning:
        "Seseorang yang gagah berani, tetapi selalu gagal dalam segala rencana hidup.",
    },
    {
      name: "Minsitthar",
      meaning:
        "Tusukan mu dapat membuat orang terluka, tetapi bisa jadi dapat membuat orang nyaman juga.",
    },
    {
      name: "Sun",
      meaning: "Hahahahahaha Monyet!!!",
    },
    {
      name: "Harley",
      meaning:
        "Seseorang yang ahli dalam segala hal, dan kamu adalah seorang Dewa Judi :v",
    },
    {
      name: "Argus",
      meaning:
        "Jangan takut dalam menjalani kehidupan karena kamu memiliki banyak nyawa.",
    },
    {
      name: "Moskov",
      meaning:
        "Memiliki Senjata yang sangat berguna sekali, tetapi bisa juga jadi senjata yang membawamu ke kematian.",
    },
    {
      name: "Vexana",
      meaning: "Seorang yang memiliki Khodam Robot berwarna Pink.",
    },
    {
      name: "Thamuz",
      meaning:
        "Jika kamu bisa bertahan lebih lama di kehidupan ini maka kamulah pemenangnya.",
    },
    {
      name: "Hylos",
      meaning: "Manusia yang memili sifat setengah Binatang.",
    },
    {
      name: "Hanzo",
      meaning: "Seseorang yang memiliki 2 Wajah di satu waktu yang sama.",
    },
    {
      name: "Zhuxin",
      meaning: "Orang paling ngeselin, yang sering memutar balikkan arah.",
    },
    {
      name: "Uranus",
      meaning: "Badanmu kalau di kiloin bakalan laku mungkin hahaha.",
    },
    {
      name: "Lesley",
      meaning:
        "Seorang penembak jitu, tetapi jika sudah menembak cinta dia pasti menghilang.",
    },
    {
      name: "Helcurt",
      meaning:
        "Kamu orangnya suka main gelap gelapan yaa hayooo waduhh aduhaiii",
    },
    {
      name: "Aldous",
      meaning:
        "Semakin lama waktu yang diberikan maka kamu akan membuktikan bahwa kamu emang tidak berguna.",
    },
    {
      name: "Kimmy",
      meaning: "Setiap ucapanmu menyakitkan hati lawan bicaramu.",
    },
    {
      name: "Zhask",
      meaning: "Si Biji Pler",
    },
    {
      name: "Belerick",
      meaning: "Terlalu sering mengikat/mengekang dalam sebuah hubungan.",
    },
    {
      name: "Martis",
      meaning:
        "Jika kamu marah maka tidak ada satu orang pun yang berani mendekatimu.",
    },
    {
      name: "Badang",
      meaning: "Pukulanmu memang pelan tapi bisa membuat orang tewas.",
    },
    {
      name: "Phoveus",
      meaning:
        "Terlalu sering mencari Lompatan karir dalam hidup, yang membuatmu akhirnya gagal lagi dan lagi.",
    },
    {
      name: "Marsha",
      meaning:
        "Terlalu sering mengejar orang yang dicintai, padahal sudah jelas orang itu ga suka kamu loh.",
    },
    {
      name: "Wanwan",
      meaning:
        "Terlalu berat dan sulit hidup mu untuk mencapai kesuksesan jika begini terus lohh",
    },
    {
      name: "Esmeralda",
      meaning: "Jodohmu adalah seorang Janda!",
    },
    {
      name: "Baxia",
      meaning:
        "Putaran kehidupanmu emang berat tapi percayalah bahwa kamu akan gagal lagi hehe",
    },
    {
      name: "Cecilion",
      meaning:
        "Kamu orang yg terlalu sulit untuk didekati, makanya banyak yg gak suka liat kamu.",
    },
    {
      name: "Luo Yi",
      meaning:
        "Sering berpindah hati secara langsung jika ada yg merasa tertarik.",
    },
    {
      name: "Barats",
      meaning:
        "Terlalu sering menelan mentah mentah omongan orang tanpa cari tahu kebenarannya.",
    },
    {
      name: "Carmilla",
      meaning: "Terlalu rumit hubungan percintaan mu.",
    },
    {
      name: "Atlas",
      meaning:
        "Tipe orang yg terlalu mengikat pasangan dalam suatu hubungan yang dapat membuat rusaknya sebuah hubungan tersebut.",
    },
    {
      name: "Ixia",
      meaning:
        "Kamu adalah orang yang jika sering disakiti dapat memulihkan kembali jiwa dan daya tahan tubuhmu seperti semula tanpa bantuan orang lain.",
    },
    {
      name: "Granger",
      meaning: "Seorang yang selalu berhasil dalam sebuah target kehidupan.",
    },
    {
      name: "Gloo",
      meaning: "Terlalu sering mengikuti kehidupan orang lain.",
    },
    {
      name: "Aamon",
      meaning: "Sering datang kepada seseorang hanya untuk menyakitinya ya?",
    },
    {
      name: "Natan",
      meaning:
        "Setiap perlakuan mu kepada orang lain, lebih sering menyakitkan dibanding menyenangkannya.",
    },
    {
      name: "Aulus",
      meaning:
        "Seorang yang nafsuan dalam segala hal baik itu halal atau haram.",
    },
    {
      name: "Mathilda",
      meaning:
        "Terlalu sering melompat ke tubuh orang lain hanya untuk dapat apresiasi darinya.",
    },
    {
      name: "Paquito",
      meaning: "Postur tubuh yang bagus tetapi tidak dengan alur kehidupannya.",
    },
    {
      name: "Melissa",
      meaning: "Udah sulit didekatin malah nyakitin lagi",
    },
    {
      name: "Joy",
      meaning:
        "kamu datang hanya untuk lewat lewat dan nyakitin doang ke orang lain.",
    },
    {
      name: "Floryn",
      meaning:
        "Sering membuat orang nyaman karena adanya keberadaan mu disisi nya.",
    },
    {
      name: "Karina",
      meaning:
        "Gabisa di sindir dalam segi fisik atau cacian, kamu orang hebat",
    },
    {
      name: "Rafaela",
      meaning:
        "Selalu berusaha membuat orang senang, tetapi dia lupa dirinya juga butuh Kebahagiaan.",
    },
    {
      name: "Saber",
      meaning: "Pemberani dalam segala hal, apalagi makan temen waduhhhh",
    },
    {
      name: "Tigreal",
      meaning:
        "Si paling melindungi orang lain padahal diri dia juga butuh perlindungan.",
    },
    {
      name: "Miya",
      meaning:
        "Orang yang hebat dalam penyamaran dan menghilang, dalam sebuah sebuah hubungan hayooo.",
    },
    {
      name: "Alucar",
      meaning: "Dingin tetapi tidak kejam waowkaokwoak",
    },
    {
      name: "Zilong",
      meaning:
        "Terlalu berisik jika sedang masa berproses mencapai sebuah hal atau keinginan.",
    },
    {
      name: "Clint",
      meaning:
        "Prediksi dalam menebak selalu benar untuk orang lain tetapi tidak untuk dirinya sendiri wkwk.",
    },
    {
      name: "Gord",
      meaning:
        "Terlalu lambat dalam mengambil keputusan dalam menghadapi masalah.",
    },
    {
      name: "Franco",
      meaning: "Tukang nyari masalah",
    },
    {
      name: "Akai",
      meaning:
        "Sadar diri bro lu tuh harus sukses udah gak ada waktu buat malas malasan lagi aduhhhh",
    },
    {
      name: "Layla",
      meaning: "Kau terlalu beban untuk orang di sekitarmu",
    },
    {
      name: "Eudora",
      meaning: "seringnya buat kaget orang sampe orang tersebut jantungan.",
    },
    {
      name: "Nana",
      meaning:
        "Kamu orang yg tidak berguna di beberapa hal, tapi percayalah suatu saat kamu akan berguna kok, contohnya di epic :v",
    },
    {
      name: "Balmond",
      meaning:
        "Kamu terlalu percaya diri bahwa dirimu tampan dan goodlooking padahal aslinya emang iya (kayaknya :v)",
    },
    {
      name: "Bane",
      meaning: "Terlalu sering gegabah hingga akhirnya gagal lagi.",
    },
    {
      name: "Minotaur",
      meaning: "Badan besar tetapi nyali ga ada",
    },
    {
      name: "Alice",
      meaning:
        "Kamu terlalu sering menghabiskan energi untuk hal yang tidak penting.",
    },
    {
      name: "Bruno",
      meaning:
        "Jika memiliki sebuah impian maju terus dan terjang semua halangan yg menghalangimu.",
    },
    {
      name: "Roger",
      meaning:
        "Kamu atau orang di dekatmu bisa saja adalah serigala berbulu domba lohh hati hati.",
    },
    {
      name: "Karrie",
      meaning: "Hanya kamu yang mengerti jati diri kamu sendiri.",
    },
    {
      name: "Angela",
      meaning: "Alamak kalau ini apa ya masa iya ku ketik angela D3s4h wkwkwk",
    },
    {
      name: "Aurora",
      meaning:
        "teralu sering bersikap dingin kepada orang sekitar hingga akhirnya, orang sekitar menjauhimu",
    },
    {
      name: "Diggie",
      meaning:
        "Sering gagal dalam kehidupan ini, tapi kamu bukanlah orang yg gampang menyerah.",
    },
    {
      name: "Hilda",
      meaning:
        "Suka banget ngejer orang lain buat dapetin hatinya padahal udh jelas orang itu ga suka sama kamu.",
    },
    {
      name: "Estes",
      meaning: "Bapak kau solo lord pake estes",
    },
    {
      name: "Fanny",
      meaning:
        "Terlalu sering terbang dalam berangan angan, hingga akhirnya gagal lagi.",
    },
    {
      name: "Chou",
      meaning:
        "Gampang kabur jika ada masalah, tetapi kalau gabisa kabur biasanya akan nendang pintu.",
    },
    {
      name: "Freya",
      meaning:
        "Ketika Kamu marah maka dunia ini berasa berguncang, karena kamu marahnya (gagal melanjutkan kata)",
    },
    {
      name: "Julian",
      meaning:
        "Untuk saat ini jika kamu merasa yg terbaik, harus hati hati karena kamu dapat disingkirkan semudah debu oleh orang lain.",
    },
    {
      name: "Silvanna",
      meaning:
        "Selalu gagal dalam lompatan hidup, dan sering tertusuk kekejaman dunia.",
    },
    {
      name: "Yu Zhong",
      meaning:
        "Sering berubah menjadi Binatang buas kalau sedang marah, baik itu ke musuh ke temen atau ke pasangan.",
    },
    {
      name: "Popo & Kupa",
      meaning:
        "Orang terdekatmu sekarang kemungkinan akan meninggal dalam waktu dekat, jadi sayangilah dia ya",
    },
    {
      name: "Benedetta",
      meaning: "Waduh kamu adalah Atmin Gaot Sigma Skibidi Rizz +999 Aura.",
    },
    {
      name: "Lylia",
      meaning:
        "Selalu berandai bisa balik kemasa lalu untuk memperbaiki kehidupan saat ini.",
    },
    {
      name: "Dyrroth",
      meaning:
        "Sistem pemulihan dirimu emang kuat tapi, kamu juga butuh healing lohhh",
    },
    {
      name: "X.borg",
      meaning: "Sering kompor kalau orang lain ada masalah.",
    },
    {
      name: "Ling",
      meaning:
        "Sering disukai oleh orang lain tetapi kamu selalu telat untuk sadar",
    },
    {
      name: "Guinevere",
      meaning: "Orang yg gampang kabur kalau lagi ada masalah",
    },
    {
      name: "Terizla",
      meaning:
        "Sering mengikat orang sekitar agar tetap dekat denganmu, padahal mereka gak suka hal itu.",
    },
    {
      name: "Khaleed",
      meaning: "Cieee rajin ngaji ya kamu pasti wkwk",
    },
    {
      name: "Brody",
      meaning: "Kalau kamu merasa diri kamu jelek ya berarti emang bener.",
    },
    {
      name: "Nolan",
      meaning: "Seorang yang tangguh dalam mencuri sebuah Kesempatan.",
    },
    {
      name: "Arlott",
      meaning: "Selalu memikirkan move kedepannya akan bagaimana.",
    },
    {
      name: "Xavier",
      meaning: "Selalu sering dibelakang dan pada akhirnya selalu ketinggalan.",
    },
    {
      name: "Novaria",
      meaning:
        "Terlalu sering melempar masalah ke orang terdekat supaya dia kena juga.",
    },
    {
      name: "Khufra",
      meaning: "Suka yang mentul mentul gitu yaa waaduhhh",
    },
    {
      name: "Freedrin",
      meaning: "Terlalu kuat dalam menyelesaikan masalah.",
    },
    {
      name: "Yin",
      meaning:
        "Sering membawa orang lain ke dalam masalahmu padahal dia gak mau terlibat",
    },
    {
      name: "Valentina",
      meaning:
        "Sering meniru gaya hidup orang lain padahal gak cocok sama style kamu.",
    },
    {
      name: "Edith",
      meaning: "Selalu maju paling depan kalau ada masalah.",
    },
    {
      name: "Yve",
      meaning: "Semua orang sering kamu jadikan budak caturmu",
    },
    {
      name: "Beatrix",
      meaning:
        "Terlalu sering bingung dalam memilih pilihan yg ada dalam hidup.",
    },
    {
      name: "Faramis",
      meaning:
        "Senang menolong orang lain, padahal dirimu sendiri juga butuh pertolongan.",
    },
    {
      name: "Jawhead",
      meaning:
        "Suka banget ngelempar temen atau pasangan dalam masalah kamu agar diri kamu selamat.",
    },
    {
      name: "Harith",
      meaning: "Orang yg selalu sat set dalam melakukan semua hal GG.",
    },
    {
      name: "Irithel",
      meaning: "Senang dengan hewan peliharaan yg lucu dan comel.",
    },
    {
      name: "GatotKaca",
      meaning:
        "Seseorang yg selalu membantu menyelesaikan masalah orang lain, tapi gak pernah dianggap ada.",
    },
    {
      name: "Grock",
      meaning: "Sering jadi badan jika orang lain terjebak dalam masalah.",
    },
    {
      name: "Odette",
      meaning:
        "Suka nya sama yg bermobil, dan sering memilih kasta orang lain.",
    },
    {
      name: "Lancelot",
      meaning:
        "Suka banget kalau ngomong kata katanya nya selalu menusuk atau nyakitin.",
    },
    {
      name: "Lapu Lapu",
      meaning: "Sering maju paling depan kalau ada keributan.",
    },
    {
      name: "Yi Sun-shin",
      meaning:
        "Kalau kemana mana selalu pengen naik motor, dan sering mencari keberadaan seseorang.",
    },
    {
      name: "Hayabusa",
      meaning:
        "Sering menjadi bayang bayang untuk orang yg kamu benci lalu kamu menusuk nya dari belakang.",
    },
    {
      name: "Johnson",
      meaning:
        "Kaya dalam ekonomi tetapi sering merasa kesepian karena keluarga gak cemara.",
    },
    {
      name: "Alpha",
      meaning:
        "Selalu menjadi tegar meskipun sudah kehilangan orang yg disayangin berkali kali.",
    },
    {
      name: "Ruby",
      meaning:
        "Sering banget narik masalah baru ke dalam hidup, padahal masalah kemarin belum selesai.",
    },
    {
      name: "Kadita",
      meaning:
        "Suka berenang tapi lupa caranya menyelamatkan diri dalam bahaya.",
    },
    {
      name: "Pharsa",
      meaning:
        "Memiliki rekan yg hebat dalam segala hal, tapi malah kamu gak punya keahlian apa apa.",
    },
    {
      name: "Gusion",
      meaning: "Sering membuntuti masalah orang lain padahal kenal aja enggak.",
    },
    {
      name: "Vale",
      meaning:
        "Suka banget keluar rumah hanya untuk sekedar nyari angin atau cuma nongkrong sendirian.",
    },
    {
      name: "Claude",
      meaning: "Selalu datang diwaktu yang tepat cihuyy",
    },
    {
      name: "Leomord",
      meaning: "Orang yang selalu suka naik Kuda dalam hal mistis.",
    },
    {
      name: "Lunox",
      meaning:
        "Kamu memiliki 2 kepribadian yg selalu bisa menyesuiakan dalam keadaan.",
    },
    {
      name: "Cici",
      meaning: "Suka banget sama mainan anak anak",
    },
    {
      name: "Selena",
      meaning:
        "Mungkin kamu adalah calon orang sukses, kalau kamu mulai mencoba ternak lele.",
    },
    {
      name: "Chang'e",
      meaning: "Selalu memilih jalan cepat dalam segala hal.",
    },
    {
      name: "Kaja",
      meaning:
        "Suka menarik orang lain ke dalam kehidupan, hanya untuk bahan agar masalahmu tertutupi.",
    },
    {
      name: "Valir",
      meaning: "Suka kompor kalau ada orang yg lagi berdebat.",
    },
    {
      name: "Hanabi",
      meaning:
        "Selalu kebal dalam hinaan dan cacian yg diberikan, tetapi tidak pintar dalam menyelesaikan masalah.",
    },
    {
      name: "Chip",
      meaning:
        "Sukanya ngajak temen kalau ada masalah sama satu orang (penakut)",
    },
    // Tambahkan khodam lainnya sesuai kebutuhan
  ];

  const randomIndex = Math.floor(Math.random() * khodams.length);
  const khodam = khodams[randomIndex];
  document.getElementById("nameInput").value = "";
  document.getElementById("khodamName").innerText = `Hero: ${khodam.name}`;
  document.getElementById("khodamMeaning").innerText = khodam.meaning;
  document.getElementById("result").style.display = "block";
}

function resetForm() {
  document.getElementById("nameInput").value = "";
  document.getElementById("result").style.display = "none";
}
