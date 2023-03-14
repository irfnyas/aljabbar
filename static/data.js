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
            'Salah satu pengalaman yang harus dicoba di sini adalah mengambil air wudu di area halaman masjid. Arsitek membuat paviliun wudu yang terinspirasi dari masjid-masjid besar di Turki. Kapan lagi kan mencoba berwudu ala masjid Turki tanpa harus terbang ke sana.'
          ],
          isImageFirst: false,
          image: ''
        },
        {
          id: 2,
          title: 'Area Shalat Utama',
          content: [
            'Bersiaplah untuk terpesona dengan keindahan area salat Masjid Raya Al Jabbar, dan rasakan sensasinya untuk salat di ruangan yang sangat megah ini! Jika memungkinkan, spot foto terbaik berada di depan mihrab dan arahkan kameramu agak ke atas sehingga lafaz Allah dan keindahan plafon pun akan terlihat.'
          ],
          isImageFirst: true,
          image: ''
        },
        {
          id: 3,
          title: 'Museum Rasulullah',
          content: [
            'Salah satu fasilitas yang dihadirkan di Masjid Raya Al Jabbar adalah museum Nabi Muhammad SAW. Uniknya, semua konten akan dihadirkan secara digital, dengan tampilan visual yang menarik. Jangan khawatir juga, museum ini terbuka untuk umum ya!'
          ],
          isImageFirst: false,
          image: ''
        },
        {
          id: 4,
          title: 'Koridor',
          content: [
            'Koridor Masjid Raya Al Jabbar dibuat mengelilingi halaman utama. Kita akan disuguhkan sudut pandang yang berlainan saat memandang masjid. Sebelum terlewat, berhentilah sejenak tepat di tengah-tengah koridor dan nikmatilah pemandangan masjid 180 derajat!'
          ],
          isImageFirst: true,
          image: ''
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
          title: '5 Taman Nabi',
          content: [
            'Selain jembatan Nabi Musa, kawasan masjid juga menghadirkan taman Nabi Adam, taman Nabi Nuh, taman Nabi Ibrahim, taman Nabi Yunus, dan taman Nabi Isa. Kelima taman memiliki desain yang berbeda sesuai dengan kisah masing-masing nabi, serta menghadirkan keanekaragaman tanaman di Jawa Barat.'
          ],
          isImageFirst: false,
          image: ''
        },
        {
          id: 7,
          title: 'Spot Foto Menarik',
          content: [
            'Kurang lengkap rasanya kalau mengunjungi masjid ini tanpa mengabadikannya di kamera atau ponsel pintar kamu. Jangan bingung, semua sisi dan bagian bangunan punya kecantikannya tersendiri yang bisa menjadi spot foto terbaikmu!'
          ],
          isImageFirst: true,
          image: ''
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
            'Arsitektur Masjid Raya Al Jabbar sangat unik, perpaduan arsitektur modern kontemporer dengan aksentuasi masjid turki yang dihiasi seni dekoratir khas Jawa Barat. Bangunan utama masjid tidak memisahkan dinding, atap, kubah, melainkan meleburkan ketiganya menjadi satu bentuk setengah bola raksasa.',
            'Ketiga sisi bangunan masjid dikelilingin sebuah danau besar, yang ibarat cermin, merefleksikan masjid menjadi berbentuk bulat utuh. Pada malam hari, kerlip tata cahaya menambahkan keindahan masjid. Selain keindahan, sesungguhnya danau memiliki fungsi penting lain; sebagai retensi banjir sekaligus penyimpan air. Semua hal tersebut memang direncanakan dengan sangat seksama oleh arsiteknya, Mochammad Ridwan Kamil.'
          ],
          isImageFirst: true,
          image: ''
        },
        {
          id: 2,
          title: 'Mochammad Ridwan Kamil, Sang Arsitek Masjid Raya Al Jabbar',
          content: [
            'Masjid Raya Al Jabbar mulai didesain tahun 2015 oleh Ridwan Kamil, sebuah kesempatan berharga yang disambut gembira. Sebab, selain berlatar belakang arsitek, Ridwan Kamil juga selalu berkeinginan dapat menunaikan wasiat sang ayahanda yang berpesan agar jangan pernah berhenti mendesain masjid. Usulan pendirian masjid didasari pada beberapa alasan. Pertama, Jawa Barat sebagai provinsi belum memiliki Masjid Raya tingkat Pemrintah Daerah Provinsi. Kedua, Jawa Barat adalah sebuah provinsi dengan jumlah penduduk pemeluk agama Islam terbanyak di Indonesia. Ketiga, Jawa Barat juga memerlukan masjid besar yang dapat membanggakan warganya.'
          ],
          isImageFirst: false,
          image: ''
        },
        {
          id: 3,
          title: '',
          content: [
            'Luas dan tingginya lantai salat dihiasi 27 relung dari relief tembaga yang ditempa dengan halus oleh tangan-tangan terampil para perajin yang sangat tekun. Relief berupa motif batik ini mewakili tiap kota/kabupaten. Motif pun dipilih cermat untuk mengekspresikan kekayaan seni masyarakat Jawa Barat. Lantai di bawah mezanin diterangi lampu kuningan karya perajin Gentur, Cianjur. Warna keemasannya mampu memberi rasa mewah. Sedangkan, dinding sisi barat terdapat mihrab yang menerus ke mahkota di pucuk langin-langit melambangkan bahwa hanya kepada Allah SWT kita meminta.',
            'Hal lain yang istimewa disini adalah adanya lantai dasar atau ma’rodh yang berisi museum sejarah Rasulullah, sejarah perkembangan Islam di tanah air, dan sejarah Islam di Jawa Barat. Hal ini menjadikan Masjid Raya Al jabbar sebagai satu-satunya masjid di Indonesia yang memiliki pusat edukasi berupa museum dengan penyajian menggunakan teknologi digital terkini yang canggih.'
          ],
          isImageFirst: true,
          image: ''
        },
        {
          id: 4,
          title: 'Fungsi Masjid Raya Al jabbar sebagai Tempat Ibadah, Pusat Edukasi dan Wisata Religi',
          content: [
            'Selain bangunan masjid dan danau, di lahan seluas 26 Ha ini juga terdapat taman-taman tematik tentang kenabian yang sangat menarik untuk dikunjungi oleh segala kalangan. Sedangkan, di sisi timur masjid berdiri sebuah patung kaligrafi “Al Jabbar” berwarna emas karya seniman terkemuka. Patung ini berdiri di atas plaza bundar yang permukaannya dilapisi teraso buatan tangan. Motif Wadasan berwarna biru dan kuning cerah dari teraso juga memberikan tampilan yang sungguh elegan. Kemudian, di sisi timur ini juga terdapat beberapa aksentuasi khas masjid Turki, yaitu pelataran besar dikelilingi koridor dengan naungan dihiasi kaca patri warna-warni indah, serta paviliun wudu dengan keran air bertempat duduk berhiaskan mozaik cantik karya tangan perajin Jawa Barat'
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
          image: ''
        },
      ],
      footnote: 'Bangunan utama masjid dirancang dengan luas 99 x 99 m2 sesuai angka Asmaul Husan atau 99 nama-nama Allah yang indah dan baik dengan ketinggian puncaknya hampir mencapai 40 meter. Sedangkan, badan masjid dirancang dengan rumus matematika berulang sehingga menghasilkan bentuk sederhana setengah lingkaran namun sangat ikonik. Sebagian kulit bangunan masjid dilapisi kaca. Pada siang hari, kaca warna-warni ini membiaskan sinar matahari ke lantai shalat.'
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
