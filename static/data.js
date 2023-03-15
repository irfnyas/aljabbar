export const navigationMenus = [
  {
    id: 1,
    title: 'Kajian',
    link: '/kajian',
    items: []
  },
  {
    id: 2,
    title: 'Kegiatan',
    link: '/kegiatan',
    items: []
  },
  {
    id: 3,
    title: 'Galeri Rasulullah',
    link: 'https://www.youtube.com/',
    items: []
  },
  {
    id: 4,
    title: 'Profil',
    link: '/profil',
    items: [
      {
        id: 1,
        title: 'Sejarah Masjid Raya Al Jabbar',
        description: 'Masjid Raya Al Jabbar mulai didesain tahun 2015 oleh Ridwan Kamil sebagai Masjid Raya tingkat Pemerintah Daerah Provinsi. Bangunan utama dirancang dengan luas lantai 99 x 99 m2 sesuai angka Asmaul Husna.',
        icon: '/icons/dome.svg',
        link: '/sejarah'
      },
      {
        id: 2,
        title: 'Keistimewaan Masjid Raya Al Jabbar',
        description: 'Masjid Al Jabbar memiliki keistimewaan seperti arsitektur ikonik, masjid terapung, empat menara, ruang shalat monumental, museum, tata cahaya, pusat edukasi dan rekreasi religi.',
        icon: '/icons/dome.svg',
        link: '/keistimewaan'
      },
      {
        id: 1,
        title: 'Fasilitas Masjid Raya Al Jabbar',
        description: 'Fasilitas yang terdapat di Masjid Al Jabbar meliputi tempat wudhu outdoor, area shalat utama, lantai mezanin, relung, museum Nabi Muhammad, koridor, jembatan Nabi Musa, patung Al Jabbar, perpustakaan, ruang edukasi, dll.',
        icon: '/icons/dome.svg',
        link: '/fasilitas'
      },
    ]
  }
]

export const profile = Object.freeze(
  {
    features: {
      title: 'Keistimewaan Masjid Raya Al Jabbar',
      subtitle: 'Masjid Raya Al Jabbar juga memiliki beberapa keistimewaan seperti arsitektur ikonik, masjid terapung, empat menara, ruang shalat monumental, museum, tata cahaya, pusat edukasi dan rekreasi edukasi.',
      data: [
        {
          id: 1,
          title: 'Arsitektur Ikonik',
          content: [
            'Arsitektur Masjid Raya Al Jabbar berbeda dari arsitektur masjid yang biasa ditemukan sehari-hari. Bentuknya seperti setengah bola raksasa yang berukuran 99 x 99 meter dengan tinggi 40 meter. Dengan bentuk yang sama dan konsisten dari sisi manapun membuat arsitektur masjid ini ikonik. Istimewanya lagi, masjid ini berdiri tanpa satupun kolom penyangga.'
          ],
          isImageFirst: false,
          image: '/images/features/arsitektur-ikonik.png',
        },
        {
          id: 2,
          title: 'Masjid Terapung',
          content: [
            'Apabila dilihat dari kejauhan, bangunan masjid akan tampak terapung di atas air. Namun, faktanya masjid ini dibangun dengan air yang mengelilinginya di empat sisi. Pantulan bentuk masjid yang sempurna di air danau pun semakin mendukung kesan terapung yang dihadirkan di Masjid Raya Al Jabbar.'
          ],
          isImageFirst: true,
          image: '/images/features/masjid-terapung.png'
        },
        {
          id: 3,
          title: 'Empat Menara',
          content: [
            'Tidak lengkap rasanya jika sebuah masjid tidak memiliki menara yang mendampinginya. Bangunan Masjid Raya Al Jabbar dikelilingi oleh empat menara yang menjulang setinggi 99 meter. Selubung yang membungkus menara ini membuatnya terlihat seperti tiang dengan tekukan-tekukan. Menariknya lagi, warna biru, kuning, dan ungu di menara bisa menyala di malam hari.'
          ],
          isImageFirst: false,
          image: '/images/features/empat-menara.png'
        },
        {
          id: 4,
          title: 'Ruang Shalat Monumental',
          content: [
            'Besar dan tingginya ruang salat, ditambah lagi tidak ada kolom-kolom yang menghalangi, membuat ruangan menjadi monumental. Ketika memasuki ruangan, kita akan merasa sangat kecil. Terlebih dengan adanya lafaz Allah yang berukuran besar tepat di atas kepala kita. Kehadirannya semakin meyakinkan kita akan kebesaran Allah SWT yang segala rahmat-Nya tidak akan berhenti untuk diberikan kepada tiap hamba-Nya.'
          ],
          isImageFirst: true,
          image: '/images/features/ruang-shalat-monumental.png'
        },
        {
          id: 5,
          title: 'Ekspresikan 27 Kabupaten/Kota Jawa Barat',
          content: [
            'Sebagai masjid milik warga Jawa Barat, area salat dikelilingi oleh 27 relung yang merepresentasikan jumlah kota dan kabupaten di Jawa Barat. Tiap relung akan mewakili tiap kota dan kabupaten melalui motif batiknya yang dibuat dari plat tembaga dan dipahat secara manual oleh para perajin lokal.'
          ],
          isImageFirst: false,
          image: '/images/features/ekspresikan-kab-kota-jabar.png'
        },
        {
          id: 6,
          title: 'Melibatkan Perajin Lokal',
          content: [
            'Masjid Raya Al Jabbar dipenuhi dengan beragam karya seni dari berbagai bahan. Pembuatan kerajinan tangan tersebut melibatkan ratusan perajin lokal. Ada mozaik untuk paviliun wudu dan di bawah lantai mezanin, lampu Gentur di bawah mezanin, kerajinan tembaga di relung, kaca patri untuk koridor, kuningan di bagian railing dan mihrab, kayu jati untuk railing dan rak Al-Quran, serta standing AC.'
          ],
          isImageFirst: true,
          image: '/images/features/melibatkan-perajin-lokal.png'
        },
        {
          id: 7,
          title: 'Masjid Dilengkapi Museum',
          content: [
            'Selain sebagai tempat ibadah, di bawah lantai salat Masjid Raya Al Jabbar juga akan menyuguhkan museum Rasulullah SAW serta sejarah Islam di Jawa Barat dengan penggunaan teknologi digital.'
          ],
          isImageFirst: false,
          image: '/images/features/masjid-dilengkapi-museum.png'
        },
        {
          id: 8,
          title: 'Tata Cahaya Berganti Warna',
          content: [
            'Pesona Masjid Raya Al Jabbar tidak akan ada kata selesai untuk dinikmati. Apalagi jika kamu berkesempatan untuk menikmati suasananya pada malam hari. Koridor masjid mulai memancarkan warna kekuningan. Lalu, tengoklah bangunan utama dan menaranya! Lampu-lampu juga mulai menyala dan tunggu hingga kamu akan bisa melihatnya berganti warna. Jangan ketinggalan pula, mendongaklah untuk melihat makara di atas bangunan, dia juga akan terus berganti warna!'
          ],
          isImageFirst: true,
          image: '/images/features/tata-cahaya-berganti-warna.png'
        },
        {
          id: 9,
          title: 'Pusat Edukasi Dan Rekreasi Religi',
          content: [
            'Dengan keragaman fasilitas menarik yang akan disediakan, Masjid Raya Al Jabbar dirancang untuk menjadi pusat edukasi dan rekreasi religi baru bagi masyarakat. Selain museum yang akan menampilkan sejarah Rasulullah SAW beliau dari lahir hingga wafat dan sejarah Islam di Jawa Barat, masjid juga akan menyediakan perpustakaan. Taman di luar area salat juga bisa menjadi sarana edukasi untuk anak-anak.'
          ],
          isImageFirst: false,
          image: '/images/features/pusat-edukasi-dan-rekreasi-religi.png'
        },
        {
          id: 10,
          title: 'Lantai Mezanin',
          content: [
            'Lantai yang berada di atas area salat utama ini dikhususkan untuk area salat jemaah perempuan. Dengan pemandangan yang berbeda, abadikan momen dengan latar lafaz Allah dan interior masjid yang indah.'
          ],
          isImageFirst: true,
          image: '/images/features/lantai-mezanin.png'
        },
        {
          id: 11,
          title: 'Relung',
          content: [
            'Sebelum meninggalkan area salat, berhentilah di tiap relung. Relung ini berjumlah 27 buah yang merepresentasikan 27 kota dan kabupaten di Jawa Barat. Tiap guratan dalam relung merupakan karya ratusan pengrajin lokal yang dikerjakan manual.'
          ],
          isImageFirst: false,
          image: '/images/features/relung.png'
        },
        {
          id: 12,
          title: 'Patung Al Jabbar',
          content: [
            'Siapa sangka bahwa karya seni yang menyambut kita di area depan adalah lafaz Al Jabbar yang dipelintir? Inilah karya salah satu seniman asal Bandung. Berlatarkan patung Al Jabbar sekaligus bangunan masjid secara utuh, ini bisa spot foto terbaikmu!'
          ],
          isImageFirst: true,
          image: '/images/features/patung-al-jabbar.png'
        },
        {
          id: 13,
          title: 'Minaret',
          content: [
            'Empat minaret yang berada di sudut-sudut masjid didesain dengan kulit yang dibuat seolah terpelintir. Kulit minaret dihiasi dengan warna-warna yang senada dengan kaca bangunan masjid.'
          ],
          isImageFirst: false,
          image: '/images/features/minaret.png'
        },
        {
          id: 14,
          title: 'Makara',
          content: [
            'Bagian puncak masjid didesain dengan elemen tusuk sate seperti yang terdapat pada Kantor Gubernur Jawa Barat. Lima bola pada tusuk sate melambangkan lima rukun Islam.'
          ],
          isImageFirst: true,
          image: ''
        },
        {
          id: 15,
          title: 'Royal Crown',
          content: [
            'Royal Crown berada di puncak plafon area salat masjid. “Mahkota” ini berupa kaligrafi lafaz “Allah” yang berukuran sangat besar dan menggantung ke bawah.'
          ],
          isImageFirst: false,
          image: '/images/features/royal-crown.png'
        },
        {
          id: 16,
          title: 'Kaca Warna Warni',
          content: [
            'Kulit masjid dibuat dari kaca warna-warni: biru, kuning, dan ungu. Cahaya matahari yang menembus kaca memberikan pemandangan yang menarik di dalam lantai ruang salat.'
          ],
          isImageFirst: true,
          image: '/images/features/kaca-warna-warni.png'
        },
      ]
    },
    facilities: {
      title: 'Fasilitas Masjid Raya Al Jabbar',
      subtitle: 'Fasilitas yang terdapat di Masjid Raya Al Jabbar meliputi tempat wudhu outdoor, area shalat utama, lantai mezanin, relung, museum Rasulullah, koridor, jembatan nabi musa, patung Al Jabbar, perpustakaan, ruang edukasi dan danau wisata.',
      data: [
        {
          id: 1,
          title: 'Tempat Wudhu Outdoor',
          content: [
            'Salah satu pengalaman yang harus dicoba di sini adalah mengambil air wudu di area halaman masjid. Arsitek membuat paviliun wudu yang terinspirasi dari masjid-masjid besar di Turki.'
          ],
          isImageFirst: false,
          image: '/images/facilities/tempat-wudhu-outdoor.png'
        },
        {
          id: 2,
          title: 'Tempat Wudhu Indoor',
          content: [
            'Bagi jemaah yang merasa kurang nyaman untuk berwudu di area terbuka, masjid ini juga menyediakan tempat wudu tertutup di area ma’rodh lantai dasar.'
          ],
          isImageFirst: true,
          image: '/images/facilities/tempat-wudhu-indoor.png'
        },
        {
          id: 3,
          title: 'Area Shalat Utama',
          content: [
            'Area salat Masjid Raya Al Jabbar dibuat dengan sentuhan indah dan jemaah dapat merasakan sensasi salat di ruangan yang sangat megah. Jika memungkinkan, spot foto terbaik berada di depan mihrab dan arahkan kamera agak ke atas sehingga lafaz Allah dan keindahan plafon pun akan terlihat.'
          ],
          isImageFirst: false,
          image: '/images/facilities/area-shalat-utama.png'
        },
        {
          id: 4,
          title: 'Koridor',
          content: [
            'Koridor Masjid Raya Al Jabbar dibuat mengelilingi halaman utama. Kita akan disuguhkan sudut pandang yang berlainan saat memandang masjid. Sebelum terlewat, berhentilah sejenak tepat di tengah-tengah koridor dan nikmatilah pemandangan masjid 180 derajat.'
          ],
          isImageFirst: true,
          image: '/images/facilities/koridor.png'
        },
        {
          id: 5,
          title: 'Jembatan Nabi Musa',
          content: [
            'Jembatan Nabi Musa menjadi penghubung antara plaza dengan halaman utama masjid. Jembatan ini berkisah tentang salah satu mukjizat Nabi Musa AS, yaitu dapat membelah lautan. Berjalan di antara air mancur yang tingginya hampir 2x manusia normal membuat kita seakan berjalan di antara lautan.'
          ],
          isImageFirst: false,
          image: ''
        },
        {
          id: 6,
          title: 'Taman Tematik Nabi',
          content: [
            'Kawasan masjid menghadirkan taman Nabi Adam, taman Nabi Nuh, taman Nabi Ibrahim, taman Nabi Yunus, dan taman Nabi Isa. Kelima taman memiliki desain yang berbeda sesuai dengan kisah masing-masing nabi serta menghadirkan keanekaragaman tanaman di Jawa Barat.'
          ],
          isImageFirst: true,
          image: ''
        },
        {
          id: 7,
          title: 'Gerbang Pelataran',
          content: [
            'Bagian koridor yang terhubung langsung dengan jembatan Nabi Musa diberikan aksen yang sedikit berbeda. Kanopi pada titik ini ditinggikan sehingga membentuk elemen seperti gerbang.'
          ],
          isImageFirst: false,
          image: ''
        },
        {
          id: 8,
          title: 'Akses Kursi Roda',
          content: [
            'Sejak awal desain masjid dibuat agar lebih inklusif dan ramah pengunjung. Tidak perlu khawatir bagi jemaah yang datang menggunakan kursi roda, akses menuju lantai salat juga dilengkapi dengan ramp di kanan-kiri tangga utama.'
          ],
          isImageFirst: true,
          image: '/images/facilities/akses-kursi-roda.png'
        },
        {
          id: 9,
          title: 'Selasar Pelataran',
          content: [
            'Bangunan masjid berdiri di depan pelataran besar yang dapat diakses melalui jembatan Nabi Musa. Pelataran menjadi ruang tambahan yang dapat menampung jemaah di hari-hari raya.'
          ],
          isImageFirst: false,
          image: ''
        },
        {
          id: 10,
          title: 'Tangga Utama',
          content: [
            'Tangga utama masjid didesain sangat lebar dengan hiasan pot-pot bunga berwarna ungu. Tangga ini terdapat di area pelataran dan merupakan akses langsung menuju ruang salat.'
          ],
          isImageFirst: true,
          image: '/images/facilities/tangga-utama.png'
        },
        {
          id: 11,
          title: 'Mihrab',
          content: [
            'Mihrab di bagian depan area salat digunakan untuk imam memimpin salat dan sebagai penunjuk arah kiblat jemaah yang akan beribadah.'
          ],
          isImageFirst: false,
          image: '/images/facilities/mihrab.png'
        },
        {
          id: 12,
          title: 'Plaza Depan',
          content: [
            'Plaza depan yang berada dekat dengan area drop-off ini dirancang berupa taman melingkar dengan patung berbentuk kaligrafi Al-Jabbar di tengahnya.'
          ],
          isImageFirst: true,
          image: ''
        },
        {
          id: 13,
          title: 'Ruang Temporer Marodh',
          content: [
            'Ruangan di bagian bawah area salat utama ini berfungsi sebagai ruangan serba guna yang dapat dimanfaatkan oleh jemaah dalam pelaksaan majelis taklim dan acara keagamaan lainnya.'
          ],
          isImageFirst: false,
          image: '/images/facilities/ruang-temporer-marodh.png'
        },
        {
          id: 14,
          title: 'Lampu Kinetik',
          content: [
            'Lampu di langit-langit area marodh dengan desain yang menampilkan 99 asmaul husna berfungsi sebagai penerangan juga memperlihatkan keindahan asma Alla SWT.'
          ],
          isImageFirst: true,
          image: '/images/facilities/lampu-kinetik.png'
        },
        {
          id: 15,
          title: 'Retail',
          content: [
            'Ruangan yang disewakan untuk para pengusaha lokal menjalankan usahanya. Berdekatan dengan area cafetaria, jemaah yang hadir bisa sekaligus berbelanja dengan lebih nyaman.'
          ],
          isImageFirst: false,
          image: ''
        },
        {
          id: 16,
          title: 'Cafetaria',
          content: [
            'Area khusus bagi para jemaah untuk beristirahat dan menikmati santapan yang dipesan dan dimasak langsung dengan konsep dapur terbuka.'
          ],
          isImageFirst: true,
          image: ''
        },
        {
          id: 17,
          title: 'Air Mancur Plaza',
          content: [
            'Air mancur di area jembatan dapat meng-highlight momen penting kisah Nabi Musa yang membelah lautan atas kuasa Allah SWT.'
          ],
          isImageFirst: false,
          image: '/images/facilities/air-mancur-plaza.png'
        },
        {
          id: 18,
          title: 'Kolam Reflektif',
          content: [
            'Kolam yang mengelilingi keempat sisi masjid akan memperlihatkan pantulan Masjid Raya Al Jabbar terutama dengan keindahan cahayanya di malam hari. Di balik itu, keberadaan kolam reflektif mengingatkan kita sebagai manusia untuk terus berefleksi diri.'
          ],
          isImageFirst: true,
          image: '/images/facilities/kolam-reflektif.png'
        },
        {
          id: 19,
          title: 'Lift Eskalator',
          content: [
            'Dengan desain masjid yang dibuat lebih inklusif, tersedia lift dan eskalator di dua sisi jalan masuk area salat utama demi memberikan kemudahan akses bagi seluruh jamaah.'
          ],
          isImageFirst: false,
          image: '/images/facilities/lift-eskalator.png'
        },
        {
          id: 20,
          title: 'Multimedia permanen dan temporer',
          content: [
            'Seluruh area dilengkapi dengan perangkat multimedia dengan teknologi terkini untuk memberikan pengalaman terbaik bagi jemaah selama mengunjungi masjid.'
          ],
          isImageFirst: true,
          image: ''
        },
        {
          id: 21,
          title: 'Ruang Edukasi',
          content: [
            'Ruangan khusus untuk melakukan diskusi, rapat, dan keperluan lainnya. Di dalamnya tersedia meja, kursi, dan infocus yang bisa dimanfaatkan selama penggunaan ruangan.'
          ],
          isImageFirst: false,
          image: '/images/facilities/ruang-edukasi.png'
        },
        {
          id: 22,
          title: 'Classroom',
          content: [
            'Terdapat 4 ruang kelas yang bisa digunakan dalam rangka pembelajaran dan diskusi keagamaan.'
          ],
          isImageFirst: true,
          image: ''
        },
        {
          id: 23,
          title: 'Perpustakaan',
          content: [
            'Dapatkan akses gratis ke ratusan buku dan literatur islam yang tersedia di area perpustakaan yang terletak di dekat area cafetaria.'
          ],
          isImageFirst: false,
          image: '/images/facilities/perpustakaan.png'
        },
        {
          id: 24,
          title: 'Ruang Control Room',
          content: [
            'Ruangan pusat dalam mengontrol seluruh area Masjid Raya Al-Jabbar sekaligus menjadi pusat informasi bagi jemaah.'
          ],
          isImageFirst: true,
          image: '/images/facilities/control-room.png'
        },
        {
          id: 25,
          title: 'Ruang Pengamanan Masjid',
          content: [
            'Ruangan di area depan masjid dengan bentuk menyerupai mesjid kecil yang untuk mendapatkan informasi dan tempat pengumpulan barang yang hilang.'
          ],
          isImageFirst: false,
          image: ''
        },
        {
          id: 26,
          title: 'Wifi Gratis',
          content: [
            'Terdapat wifi gratis yang bisa jemaah manfaatkan di seluruh area masjid.'
          ],
          isImageFirst: true,
          image: ''
        },
        {
          id: 27,
          title: 'Ruang Naskah Tua Galery Rasulullah',
          content: [
            'Ruangan yang berisikan replika naskah-naskah di jaman Rasulullah SAW.'
          ],
          isImageFirst: true,
          image: '/images/facilities/naskah-tua.png'
        },
      ]
    },
    histories: {
      title: 'Sejarah Masjid Raya Al Jabbar',
      subtitle: 'Masjid Raya Al Jabbar mulai didesain tahun 2015 oleh Ridwan Kamil sebagai Masjid Raya tingkat Pemerintah Daerah Provinsi. Bangunan utama dirancang dengan luas lantai 99 x 99 m2 sesuai angka Asmaul Husna.',
      data: [
        {
          id: 1,
          title: '',
          content: [
            'Arsitektur Masjid Raya Al Jabbar dirancang dari perpaduan arsitektur modern kontemporer dengan aksentuasi masjid Turki yang dihiasi seni dekoratif khas Jawa Barat. Bangunan utama masjid tidak memisahkan dinding, atap, dan kubah, melainkan hasil peleburan ketiganya menjadi satu bentuk setengah bola raksasa.',
            'Ketiga sisi bangunan masjid dikelilingi sebuah danau besar yang, ibarat cermin, merefleksikan masjid menjadi berbentuk bulat utuh. Pada malam hari, kerlip tata cahaya menambah keindahan masjid. Selain keindahan, danau memiliki fungsi penting lain; sebagai retensi banjir sekaligus penyimpan air. Semua hal tersebut memang direncanakan dengan sangat seksama oleh sang arsitek, Mochamad Ridwan Kamil.'
          ],
          isImageFirst: true,
          image: '/images/histories/history-1.png'
        },
        {
          id: 2,
          title: 'Mochammad Ridwan Kamil, Sang Arsitek Masjid Raya Al Jabbar',
          content: [
            'Masjid Raya Al Jabbar mulai didesain tahun 2015 oleh Ridwan Kamil, sebuah kesempatan berharga yang disambut dengan gembira. Selain berlatar belakang arsitek, Ridwan Kamil juga selalu berkeinginan dapat menunaikan wasiat sang ayahanda yang berpesan agar jangan pernah berhenti mendesain masjid. Usulan pendirian masjid didasari beberapa alasan. Pertama, Jawa Barat sebagai sebuah provinsi belum memiliki Masjid Raya tingkat Pemerintah Daerah Provinsi. Kedua, Jawa Barat adalah sebuah provinsi dengan jumlah penduduk pemeluk agama Islam terbanyak di Indonesia. Ketiga, Jawa Barat juga memerlukan masjid besar yang dapat membanggakan warganya.'
          ],
          isImageFirst: false,
          image: '/images/histories/history-2.png'
        },
        {
          id: 3,
          title: '',
          content: [
            'Luas dan tingginya lantai salat dihiasi 27 relung terbuat dari relief tembaga yang ditempa dengan halus oleh tangan-tangan terampil para perajin yang sangat tekun. Relief berupa motif batik ini mewakili tiap kota dan kabupaten yang sekaligus mengekspresikan kekayaan seni masyarakat Jawa Barat. Lantai di bawah mezanin diterangi lampu kuningan karya perajin Gentur, Cianjur, dengan warna keemasannya yang mampu memberi rasa mewah. Di bagian dinding sisi barat, terdapat mihrab yang terhubung hingga mahkota di pucuk langit-langit yang melambangkan bahwa hanya kepada Allah SWT kita meminta.',
            'Keistimewaan lainnya ada pada lantai dasar atau ma’rodh yang berisi museum sejarah Rasulullah SAW, sejarah perkembangan Islam di tanah air, dan sejarah Islam di Jawa Barat. Hal ini menjadikan Masjid Raya Al Jabbar sebagai satu-satunya masjid di Indonesia yang memiliki pusat edukasi berupa museum dengan penggunaan teknologi digital terkini.'
          ],
          isImageFirst: true,
          image: ''
        },
        {
          id: 4,
          title: 'Fungsi Masjid Raya Al jabbar sebagai Tempat Ibadah, Pusat Edukasi dan Wisata Religi',
          content: [
            'Selain bangunan masjid dan danau, di lahan seluas 26 Ha ini juga terdapat taman-taman tematik tentang kenabian yang menarik untuk dikunjungi oleh berbagai kalangan. Di sisi timur masjid, berdiri sebuah patung kaligrafi “Al Jabbar” berwarna emas karya seniman terkemuka. Patung ini berdiri di atas plaza bundar yang permukaannya dilapisi teraso buatan tangan dengan motif Wadasan berwarna biru dan kuning cerah yang memberikan kesan elegan. Kemudian, di sisi timur ini juga terdapat beberapa aksentuasi khas masjid Turki yaitu pelataran besar dikelilingi koridor dengan naungan dihiasi kaca patri warna-warni, serta paviliun wudu dengan keran air bertempat duduk yang berhiaskan mozaik cantik karya tangan perajin Jawa Barat.'
          ],
          isImageFirst: false,
          image: ''
        },
        {
          id: 5,
          title: '',
          content: [
            'Tidak salah bila dikatakan pembangunan Masjid Raya Al Jabbar telah membuka lapangan kerja yang tidak hanya melibatkan ribuan tukang bangunan berpengalaman, tetapi juga ratusan tangan-tangan terampil perajin lokal yang telah memperindah Masjid Raya Al Jabbar ini.',
            'Pada masa mendatang, semua yang sudah terbangun di Masjid Raya Al Jabbar; seperti museum, danau, plaza, dan taman-taman, akan membuat masjid ini tidak hanya memiliki fungsi ibadah, tetapi juga fungsi edukasi dan berpotensi sebagai pusat wisata religi Jawa Barat. Kedua fungsi terakhir ini terbuka untuk semua kalangan masyarakat yang ingin belajar dan menikmati wisata religi. Selain itu, fungsi-fungsi ini pun diharapkan dapat berdampak positif untuk mendongkrak ekonomi masyarakat lokal serta memakmurkan Masjid Raya Al Jabbar sendiri.'
          ],
          isImageFirst: true,
          image: '/images/histories/history-3.png'
        },
      ]
    },
  },
)

export const activities = Object.freeze(
  {
    title: 'Kegiatan Masjid Raya Al Jabbar',
    subtitle: 'Masjid Raya Al-Jabbar memiliki agenda rutin harian dan juga agenda yang diadakan oleh organisasi masyarakat dan agenda publik.'
  }
)

export const filterActivities = Object.freeze(
  {
    status: [
      'Belum Dimulai',
      'Sedang Berlangsung',
      'Telah Selesai'
    ],
    type: [
      'Offline',
      'Online',
      'Hybrid'
    ],
    variety: [
      'Taklim Rutin DKM',
      'Taklim dari Masyarakat',
      'Program Ramadhan',
      'Hari Besar Islam',
      'Bisnis dan Partnership',
      'Kunjungan Studi Banding',
      'Kunjungan Riset',
      'Kunjungan Wisata Religi',
      'Rapat DKM Al jabbar'
    ]
  }
)
