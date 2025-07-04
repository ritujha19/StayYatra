const listings = [
  {
    title: "Araku Valley, Andhra Pradesh",
    description: "A serene hill station known for coffee plantations, tribal culture, and scenic train routes. Ideal for eco-tourism and homestays in bamboo cottages.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Araku_Valley_Valley_View.jpg/1200px-Araku_Valley_Valley_View.jpg",
    price: 1200,
    location: "Araku Valley, Andhra Pradesh",
    country: "India"
  },
  {
    title: "Ziro Valley, Arunachal Pradesh",
    description: "Surrounded by pine hills and rice fields, Ziro offers tribal homestays, local Apatani culture, and a unique nature retreat.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Ziro_Valley.jpg",
    price: 1500,
    location: "Ziro Valley, Arunachal Pradesh",
    country: "India"
  },
  {
    title: "Majuli Island, Assam",
    description: "The world’s largest river island, offering bamboo huts, river views, Vaishnavite monasteries, and unique Mishing tribal hospitality.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Majuli_island.jpg",
    price: 1000,
    location: "Majuli, Assam",
    country: "India"
  },
  {
    title: "Valmiki National Park, Bihar",
    description: "A peaceful jungle retreat on the Indo-Nepal border offering forest eco-lodges, wildlife safaris, and rural village experiences.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Valmiki_National_Park_Bihar.jpg",
    price: 1300,
    location: "Valmiki Tiger Reserve, Bihar",
    country: "India"
  },
  {
    title: "Kanger Valley National Park, Chhattisgarh",
    description: "Known for underground caves, waterfalls, and dense forest, the park offers tribal-run eco cottages and guided nature walks.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kanger_Valley_National_Park.jpg",
    price: 1400,
    location: "Kanger Valley, Chhattisgarh",
    country: "India"
  },
  {
    title: "Saraya Ecostay, Goa",
    description: "A tranquil eco-resort in North Goa featuring treehouses, organic gardens, and an art café, away from the typical party crowd.",
    image: "https://www.sarayagoa.com/assets/images/tree-house-eco-stay-goa.jpg",
    price: 2500,
    location: "Sangolda, Goa",
    country: "India"
  },
  {
    title: "Gir National Park, Gujarat",
    description: "Home to the Asiatic lion, Gir offers eco camps and forest lodges where guests can enjoy wildlife safaris and local food.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Gir_Lion.jpg",
    price: 1800,
    location: "Gir, Gujarat",
    country: "India"
  },
  {
    title: "Morni Hills, Haryana",
    description: "The only hill station in Haryana offering peaceful pine forests, nature trails, and farmstays with authentic Haryanvi meals.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Morni_hills1.jpg",
    price: 1200,
    location: "Morni Hills, Haryana",
    country: "India"
  },
  {
    title: "Jibhi, Himachal Pradesh",
    description: "A hidden gem in the Tirthan Valley offering rustic wooden cottages, Himalayan views, and forest trekking routes.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Jibhi_Himachal.jpg",
    price: 2000,
    location: "Jibhi, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Netarhat, Jharkhand",
    description: "A quiet hill station surrounded by forests, offering colonial-era bungalows, tribal hospitality, and sunset viewpoints.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Netarhat_hill.jpg",
    price: 1100,
    location: "Netarhat, Jharkhand",
    country: "India"
  },
  {
    title: "Chikmagalur, Karnataka",
    description: "Famous for coffee plantations and hill retreats. Enjoy lush greenery, homestays, and hiking in the Western Ghats.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Chikmagalur_View.jpg",
    price: 1800,
    location: "Chikmagalur, Karnataka",
    country: "India"
  },
  {
    title: "Alleppey Backwaters, Kerala",
    description: "Stay on houseboats and waterfront homestays amidst the tranquil canals of the Kerala backwaters.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Alleppey_Backwaters.jpg",
    price: 2200,
    location: "Alleppey, Kerala",
    country: "India"
  },
  {
    title: "Kanha National Park, Madhya Pradesh",
    description: "Tiger reserve with forest lodges and tribal villages offering wildlife safaris and eco-tourism stays.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Kanha_National_Park.jpg",
    price: 2000,
    location: "Kanha, Madhya Pradesh",
    country: "India"
  },
  {
    title: "Karjat, Maharashtra",
    description: "An eco-friendly farmstay destination surrounded by mountains, waterfalls, and organic living.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Karjat_farmstay.jpg",
    price: 1700,
    location: "Karjat, Maharashtra",
    country: "India"
  },
  {
    title: "Loktak Lake, Manipur",
    description: "Explore floating homestays on Loktak Lake’s unique phumdis with scenic views and bird watching.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Loktak_Lake.jpg",
    price: 1500,
    location: "Loktak Lake, Manipur",
    country: "India"
  },
  {
    title: "Cherrapunji, Meghalaya",
    description: "The land of living root bridges and waterfalls, with Khasi homestays and breathtaking monsoon landscapes.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Living_root_bridge_cherrapunjee.jpg",
    price: 1600,
    location: "Cherrapunji, Meghalaya",
    country: "India"
  },
  {
    title: "Daringbadi, Odisha",
    description: "Known as the Kashmir of Odisha, this hill town offers pine forests, waterfalls, and nature cottages.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Daringbadi.jpg",
    price: 1300,
    location: "Daringbadi, Odisha",
    country: "India"
  },
  {
    title: "Amritsar Village Stay, Punjab",
    description: "Experience rural Punjabi life with mustard farms, traditional homes, and local meals near the Golden Temple.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Punjab_farmhouse.jpg",
    price: 1400,
    location: "Amritsar, Punjab",
    country: "India"
  },
  {
    title: "Jaisalmer Desert Camp, Rajasthan",
    description: "Camp under the stars in the Thar Desert with camel rides, Rajasthani folk shows, and sand dune sunsets.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Thar_Desert_Camp.jpg",
    price: 2000,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Khecheopalri, Sikkim",
    description: "Sacred lake and peaceful homestays with views of the Himalayas. Perfect for meditation and nature lovers.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Khecheopalri_Lake.jpg",
    price: 1600,
    location: "Khecheopalri, Sikkim",
    country: "India"
  },
  {
    title: "Nilgiris, Tamil Nadu",
    description: "Green tea gardens, colonial cottages, tribal culture, and the Nilgiri Mountain Railway make it a perfect hill retreat.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Nilgiris.jpg",
    price: 1800,
    location: "Nilgiris, Tamil Nadu",
    country: "India"
  },
  {
    title: "Miyawaki Forest Stay, Telangana",
    description: "A forest resort in Wargal based on sustainable Miyawaki techniques with tents and nature trails.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Miyawaki_Forest_Telangana.jpg",
    price: 1700,
    location: "Wargal, Telangana",
    country: "India"
  },
  {
    title: "Jampui Hills, Tripura",
    description: "Scenic tribal homestays surrounded by orange orchards and pine forests with panoramic sunrise views.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Jampui_Hills.jpg",
    price: 1300,
    location: "Jampui Hills, Tripura",
    country: "India"
  },
  {
    title: "Dudhwa National Park, Uttar Pradesh",
    description: "Explore tiger habitats with jungle lodges and riverside eco-tourism in the Terai region.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Dudhwa_National_Park.jpg",
    price: 1400,
    location: "Dudhwa, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Chopta, Uttarakhand",
    description: "Known as the mini Switzerland of India, offers cedar forests, camping, and treks to Tungnath Temple.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Chopta_Tungnath.jpg",
    price: 1500,
    location: "Chopta, Uttarakhand",
    country: "India"
  },
  {
    title: "Darjeeling Hills, West Bengal",
    description: "Stay in cozy cottages amidst tea gardens, with views of Kangchenjunga and access to heritage toy trains.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Darjeeling_Tea_Garden.jpg",
    price: 1600,
    location: "Darjeeling, West Bengal",
    country: "India"
  }
];

module.exports = { data: listings };