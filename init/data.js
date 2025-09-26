const listings = [
  {
    title: "Araku Valley, Andhra Pradesh",
    description: "A serene hill station known for coffee plantations, tribal culture, and scenic train routes. Ideal for eco-tourism and homestays in bamboo cottages.",
    image: "https://img.hwnstatic.com/500/350/80/false/S9z7b46NbIHgqGh5rZKzJ7DshaFQJ:88R:pHDQnO02bWliMFMWFtx5NjO0E5Ur2sA7ovwxMg:XJous1HSSZlmLqIxMhuw60njN5HM6HSN67nqCxLS5pe6JM2Fv5ktINdKC.4KuwVov8J6NNtnBZEv2WxV5klazb7jFiv396V:8o_",
    price: 2200,
    location: "Araku Valley, Andhra Pradesh",
    country: "India"
  },
  {
    title: "Ziro Valley, Arunachal Pradesh",
    description: "Surrounded by pine hills and rice fields, Ziro offers tribal homestays, local Apatani culture, and a unique nature retreat.",
    image: "https://static.wixstatic.com/media/b81d60_440b210606fe48c794395699d3a2ad6a~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b81d60_440b210606fe48c794395699d3a2ad6a~mv2.jpg",
    price: 2500,
    location: "Ziro Valley, Arunachal Pradesh",
    country: "India"
  },
  {
    title: "Majuli Island, Assam",
    description: "The world’s largest river island, offering bamboo huts, river views, Vaishnavite monasteries, and unique Mishing tribal hospitality.",
    image: "https://www.tourmyindia.com/states/assam/images/Majuli-Island-1.jpg",
    price: 2100,
    location: "Majuli, Assam",
    country: "India"
  },
  {
    title: "Valmiki National Park, Bihar",
    description: "A peaceful jungle retreat on the Indo-Nepal border offering forest eco-lodges, wildlife safaris, and rural village experiences.",
    image: "https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1708085023_balmiki_ashram_2.jpg.webp",
    price: 2300,
    location: "Valmiki Tiger Reserve, Bihar",
    country: "India"
  },
  {
    title: "Kanger Valley National Park, Chhattisgarh",
    description: "Known for underground caves, waterfalls, and dense forest, the park offers tribal-run eco cottages and guided nature walks.",
    image: "https://media.assettype.com/newindianexpress%2F2025-03-12%2Ffmhyz9ez%2FKanger-Valley-National-Park-1.jpg?rect=0%2C106%2C600%2C315&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
    price: 2400,
    location: "Kanger Valley, Chhattisgarh",
    country: "India"
  },
  {
    title: "Saraya Ecostay, Goa",
    description: "A tranquil eco-resort in North Goa featuring treehouses, organic gardens, and an art café, away from the typical party crowd.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOtX5vfdDaShmLi6XfMbJ5OXw9cmrxWw16rWEoltyQ1ARDrSdWvM7lCxQyxehH9DsJ4ojrxa94S027_Os8GbrbdlwzAYhRStl2IfAiiDO_9UdboowOUWiN2QxmbS5In2aSwVGXvKKNuJIXiMv8CrM9ZgcuOwaHvz2K44avSfkw5Fuuf3OWJPdaAL03/s800/Entrance%20to%20Saraya%20Eco%20Stay%20Goa.jpg",
    price: 2500,
    location: "Sangolda, Goa",
    country: "India"
  },
  {
    title: "Gir National Park, Gujarat",
    description: "Home to the Asiatic lion, Gir offers eco camps and forest lodges where guests can enjoy wildlife safaris and local food.",
    image: "https://r1imghtlak.mmtcdn.com/320b46304f5111eba4a90242ac110002.jpg",
    price: 2800,
    location: "Gir, Gujarat",
    country: "India"
  },
  {
    title: "Morni Hills, Haryana",
    description: "The only hill station in Haryana offering peaceful pine forests, nature trails, and farmstays with authentic Haryanvi meals.",
    image: "https://gos3.ibcdn.com/f0e7df99-bbdd-45f6-8bb1-d6f46b790c08.jpg",
    price: 3000,
    location: "Morni Hills, Haryana",
    country: "India"
  },
  {
    title: "Jibhi, Himachal Pradesh",
    description: "A hidden gem in the Tirthan Valley offering rustic wooden cottages, Himalayan views, and forest trekking routes.",
    image: "https://cf.bstatic.com/xdata/images/hotel/270x200/512287339.jpg?k=f51cc5a61f4415c274e61d4de91158d05eb0e98d04a62cd563abd58f4f465a12&o=",
    price: 2300,
    location: "Jibhi, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Netarhat, Jharkhand",
    description: "A quiet hill station surrounded by forests, offering colonial-era bungalows, tribal hospitality, and sunset viewpoints.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/ce/ed/57/caption.jpg?w=900&h=500&s=1",
    price: 2000,
    location: "Netarhat, Jharkhand",
    country: "India"
  },
  {
    title: "Chikmagalur, Karnataka",
    description: "Famous for coffee plantations and hill retreats. Enjoy lush greenery, homestays, and hiking in the Western Ghats.",
    image: "https://ik.imagekit.io/xoxqszf3k/wp-content/uploads/2015/08/Exotic-Mudigere-Resort12.jpg",
    price: 3000,
    location: "Chikmagalur, Karnataka",
    country: "India"
  },
  {
    title: "Alleppey Backwaters, Kerala",
    description: "Stay on houseboats and waterfront homestays amidst the tranquil canals of the Kerala backwaters.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/f3/1b/4a/alleppey-backwater-cruise.jpg?w=900&h=500&s=1",
    price: 2600,
    location: "Alleppey, Kerala",
    country: "India"
  },
  {
    title: "Kanha jungle camp, Madhya Pradesh",
    description: "Tiger reserve with forest lodges and tribal villages offering wildlife safaris and eco-tourism stays.",
    image: "https://www.kanhajunglecamp.com/images/slider-1.jpg",
    price: 2200,
    location: "Kanha, Madhya Pradesh",
    country: "India"
  },
  {
    title: "Karjat FarmStay, Maharashtra",
    description: "An eco-friendly farmstay destination surrounded by mountains, waterfalls, and organic living.",
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-36286997/original/3ea0559f-5643-40af-98b4-dff9292330ce.jpeg",
    price: 3700,
    location: "Karjat, Maharashtra",
    country: "India"
  },
  {
    title: "Floating homestay in Loktak Lake, Manipur",
    description: "Explore floating homestays on Loktak Lake’s unique phumdis with scenic views and bird watching.",
    image: "https://static.wixstatic.com/media/762265_e9e2fb871cd94f099e2aa2319bc07406~mv2.jpg/v1/fill/w_980,h_871,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/762265_e9e2fb871cd94f099e2aa2319bc07406~mv2.jpg",
    price: 2500,
    location: "Loktak Lake, Manipur",
    country: "India"
  },
  {
    title: "Cherrapunji, Meghalaya",
    description: "The land of living root bridges and waterfalls, with Khasi homestays and breathtaking monsoon landscapes.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/double-decker-living-root-bridge-cherrapunjee-meghalaya-city-ff?qlt=82&ts=1742165333655",
    price: 3600,
    location: "Cherrapunji, Meghalaya",
    country: "India"
  },
  {
    title: "Daringbadi, Odisha",
    description: "Known as the Kashmir of Odisha, this hill town offers pine forests, waterfalls, and nature cottages.",
    image: "https://ocean6holidays.com/wp-content/uploads/2024/04/1-26.jpg",
    price: 3300,
    location: "Daringbadi, Odisha",
    country: "India"
  },
  {
    title: "Amritsar Village Stay, Punjab",
    description: "Experience rural Punjabi life with mustard farms, traditional homes, and local meals near the Golden Temple.",
    image: "https://punjabvillagefarm.com/wp-content/uploads/2024/05/05-1.jpg",
    price: 2400,
    location: "Amritsar, Punjab",
    country: "India"
  },
  {
    title: "Jaisalmer Desert Camp, Rajasthan",
    description: "Camp under the stars in the Thar Desert with camel rides, Rajasthani folk shows, and sand dune sunsets.",
    image: "https://www.tourpackagejaisalmer.com/blog/wp-content/uploads/2024/03/An-Unforgettable-Evening-at-a-Jaisalmer-Desert-Camp.jpg",
    price: 2000,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Khecheopalri, Sikkim",
    description: "Sacred lake and peaceful homestays with views of the Himalayas. Perfect for meditation and nature lovers.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62F6xld-9jkDgtl7bVJMVip7TfCqOQHJjYg&s",
    price: 2600,
    location: "Khecheopalri, Sikkim",
    country: "India"
  },
  {
    title: "Nilgiris hill retreat , Tamil Nadu",
    description: "Green tea gardens, colonial cottages, tribal culture, and the Nilgiri Mountain Railway make it a perfect hill retreat.",
    image: "https://wildplanetresort.com/frontend/img/preview.jpg",
    price: 1800,
    location: "Nilgiris, Tamil Nadu",
    country: "India"
  },
  {
    title: "Miyawaki Forest Stay, Telangana",
    description: "A forest resort in Wargal based on sustainable Miyawaki techniques with tents and nature trails.",
    image: "https://growbilliontrees.com/cdn/shop/collections/gbt-esg-tree-plantation.png?v=1735303163&width=1500",
    price: 1700,
    location: "Wargal, Telangana",
    country: "India"
  },
  {
    title: "Jampui Hills, Tripura",
    description: "Scenic tribal homestays surrounded by orange orchards and pine forests with panoramic sunrise views.",
    image: "https://xplro.com/wp-content/uploads/2024/07/Xplro-2024-07-17T012602.996.jpg.webp",
    price: 2300,
    location: "Jampui Hills, Tripura",
    country: "India"
  },
  {
    title: "Dudhwa National Park, Uttar Pradesh",
    description: "Explore tiger habitats with jungle lodges and riverside eco-tourism in the Terai region.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/be/36/5b/jaagir-lodge-dudhwa.jpg?w=1200&h=-1&s=1",
    price: 2400,
    location: "Dudhwa, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Chopta, Uttarakhand",
    description: "Known as the mini Switzerland of India, offers cedar forests, camping, and treks to Tungnath Temple.",
    image: "https://www.manchalamushafir.com/chopta-uttarakhand-unveiling-the-serene-paradise-of-the-himalayas/images/chopta%20image.jpg",
    price: 1900,
    location: "Chopta, Uttarakhand",
    country: "India"
  },
  {
    title: "Darjeeling Hills, West Bengal",
    description: "Stay in cozy cottages amidst tea gardens, with views of Kangchenjunga and access to heritage toy trains.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/2-summer-capital-of-India-darjeeling-west-bengal-city-ff?qlt=82&ts=1726643695016",
    price: 1800,
    location: "Darjeeling, West Bengal",
    country: "India"
  }
];

module.exports = { data: listings };