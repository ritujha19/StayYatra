const listings = [
  {
    title: "Araku Valley, Andhra Pradesh",
    description:
      "A serene hill station known for coffee plantations, tribal culture, and scenic train routes. Ideal for eco-tourism and homestays in bamboo cottages.",
    image:
      "https://img.hwnstatic.com/500/350/80/false/S9z7b46NbIHgqGh5rZKzJ7DshaFQJ:88R:pHDQnO02bWliMFMWFtx5NjO0E5Ur2sA7ovwxMg:XJous1HSSZlmLqIxMhuw60njN5HM6HSN67nqCxLS5pe6JM2Fv5ktINdKC.4KuwVov8J6NNtnBZEv2WxV5klazb7jFiv396V:8o_",
    price: 1200,
    location: "Araku Valley, Andhra Pradesh",
    addons: [
      "Free Wi-Fi",
      "Complimentary Breakfast",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "In-room Entertainment (TV/Streaming)",
    ],
  },
  {
    title: "Ziro Valley, Arunachal Pradesh",
    description:
      "Surrounded by pine hills and rice fields, Ziro offers tribal homestays, local Apatani culture, and a unique nature retreat.",
    image:
      "https://static.wixstatic.com/media/b81d60_440b210606fe48c794395699d3a2ad6a~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b81d60_440b210606fe48c794395699d3a2ad6a~mv2.jpg",
    price: 1800,
    location: "Ziro Valley, Arunachal Pradesh",
    addons: [
      "Free Wi-Fi",
      "Complimentary Breakfast",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "Airport Pickup & Drop",
      "In-room Entertainment (TV/Streaming)",
    ],
  },
  {
    title: "Majuli Island, Assam",
    description:
      "The world’s largest river island, offering bamboo huts, river views, Vaishnavite monasteries, and unique Mishing tribal hospitality.",
    image:
      "https://www.tourmyindia.com/states/assam/images/Majuli-Island-1.jpg",
    price: 1100,
    location: "Majuli, Assam",
    addons: [
      "Complimentary Breakfast",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "Airport Pickup & Drop",
      "In-room Entertainment (TV/Streaming)",
    ],
  },
  {
    title: "Valmiki National Park, Bihar",
    description:
      "A peaceful jungle retreat on the Indo-Nepal border offering forest eco-lodges, wildlife safaris, and rural village experiences.",
    image:
      "https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1708085023_balmiki_ashram_2.jpg.webp",
    price: 1300,
    location: "Valmiki Tiger Reserve, Bihar",
    addons: [
      "Free Wi-Fi",
      "Complimentary Breakfast",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "Airport Pickup & Drop",
      "In-room Entertainment (TV/Streaming)",
    ],
  },
  {
    title: "Kanger Valley National Park, Chhattisgarh",
    description:
      "Known for underground caves, waterfalls, and dense forest, the park offers tribal-run eco cottages and guided nature walks.",
    image:
      "https://media.assettype.com/newindianexpress%2F2025-03-12%2Ffmhyz9ez%2FKanger-Valley-National-Park-1.jpg?rect=0%2C106%2C600%2C315&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
    price: 1400,
    location: "Kanger Valley, Chhattisgarh",
    addons: [
      "Free Wi-Fi",
      "Complimentary Breakfast",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "In-room Entertainment (TV/Streaming)",
    ],
  },
  {
    title: "Saraya Ecostay, Goa",
    description:
      "A tranquil eco-resort in North Goa featuring treehouses, organic gardens, and an art café, away from the typical party crowd.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOtX5vfdDaShmLi6XfMbJ5OXw9cmrxWw16rWEoltyQ1ARDrSdWvM7lCxQyxehH9DsJ4ojrxa94S027_Os8GbrbdlwzAYhRStl2IfAiiDO_9UdboowOUWiN2QxmbS5In2aSwVGXvKKNuJIXiMv8CrM9ZgcuOwaHvz2K44avSfkw5Fuuf3OWJPdaAL03/s800/Entrance%20to%20Saraya%20Eco%20Stay%20Goa.jpg",
    price: 1900,
    location: "Sangolda, Goa",
    addons: [
      "Free Wi-Fi",
      "Complimentary Breakfast",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "Airport Pickup & Drop",
      "In-room Entertainment (TV/Streaming)",
    ],
  },
  {
    title: "Gir National Park, Gujarat",
    description:
      "Home to the Asiatic lion, Gir offers eco camps and forest lodges where guests can enjoy wildlife safaris and local food.",
    image: "https://r1imghtlak.mmtcdn.com/320b46304f5111eba4a90242ac110002.jpg",
    price: 1200,
    location: "Gir, Gujarat",
    addons: [
      "Free Wi-Fi",
      "Complimentary Breakfast",
      "24/7 Room Service",
      "Airport Pickup & Drop",
      "In-room Entertainment (TV/Streaming)",
    ],
  },
  {
    title: "Morni Hills, Haryana",
    description:
      "The only hill station in Haryana offering peaceful pine forests, nature trails, and farmstays with authentic Haryanvi meals.",
    image: "https://gos3.ibcdn.com/f0e7df99-bbdd-45f6-8bb1-d6f46b790c08.jpg",
    price: 1600,
    location: "Morni Hills, Haryana",
    addons: [
      "Free Wi-Fi",
      "Complimentary Breakfast",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "Airport Pickup & Drop",
      "In-room Entertainment (TV/Streaming)",
    ],
  },
  {
    title: "Jibhi, Himachal Pradesh",
    description:
      "A hidden gem in the Tirthan Valley offering rustic wooden cottages, Himalayan views, and forest trekking routes.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/270x200/512287339.jpg?k=f51cc5a61f4415c274e61d4de91158d05eb0e98d04a62cd563abd58f4f465a12&o=",
    price: 2000,
    location: "Jibhi, Himachal Pradesh",
    addons: [
      "Free Wi-Fi",
      "Complimentary Breakfast",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
    ],
  },
  {
    title: "Netarhat, Jharkhand",
    description:
      "A quiet hill station surrounded by forests, offering colonial-era bungalows, tribal hospitality, and sunset viewpoints.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/ce/ed/57/caption.jpg?w=900&h=500&s=1",
    price: 1200,
    location: "Netarhat, Jharkhand",
    addons: [
      "Free Wi-Fi",
      "Complimentary Breakfast",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "Airport Pickup & Drop",
      "In-room Entertainment (TV/Streaming)",
    ],
  },
  {
    title: "Chikmagalur, Karnataka",
    description:
      "Famous for coffee plantations and hill retreats. Enjoy lush greenery, homestays, and hiking in the Western Ghats.",
    image:
      "https://ik.imagekit.io/xoxqszf3k/wp-content/uploads/2015/08/Exotic-Mudigere-Resort12.jpg",
    price: 1100,
    location: "Chikmagalur, Karnataka",
    addons: [
      "Free Wi-Fi",
      "2 Bedroom, 1 hall and 1 Kitchen ",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "Airport Pickup & Drop",
      "In-room Entertainment (TV/Streaming)",
    ],
  },
  {
    title: "Alleppey Backwaters, Kerala",
    description:
      "Stay on houseboats and waterfront homestays amidst the tranquil canals of the Kerala backwaters.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/f3/1b/4a/alleppey-backwater-cruise.jpg?w=900&h=500&s=1",
    price: 1800,
    location: "Alleppey, Kerala",
    addons: [
      "Free Wi-Fi",
      "3 Bedroom, 1 hall and 1 Kitchen ",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "Airport Pickup & Drop",
      "In-room Entertainment (TV/Streaming)",
    ],
  },
  {
    title: "Kanha jungle camp, Madhya Pradesh",
    description:
      "Tiger reserve with forest lodges and tribal villages offering wildlife safaris and eco-tourism stays.",
    image: "https://www.kanhajunglecamp.com/images/slider-1.jpg",
    price: 1000,
    location: "Kanha, Madhya Pradesh",
    addons: [
      "Free Wi-Fi",
      "Complimentary Breakfast",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "Airport Pickup & Drop",
      "In-room Entertainment (TV/Streaming)",
    ],
  },
  {
    title: "Karjat FarmStay, Maharashtra",
    description:
      "An eco-friendly farmstay destination surrounded by mountains, waterfalls, and organic living.",
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-36286997/original/3ea0559f-5643-40af-98b4-dff9292330ce.jpeg",
    price: 1600,
    location: "Karjat, Maharashtra",
    addons: [
      "Free Wi-Fi",
      "2 Bedroom, 1 hall, terrace and 1 Kitchen ",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "Airport Pickup & Drop",
      "In-room Entertainment (TV/Streaming)",
    ],
  },
  {
    title: "Floating homestay in Loktak Lake, Manipur",
    description:
      "Explore floating homestays on Loktak Lake’s unique phumdis with scenic views and bird watching.",
    image:
      "https://static.wixstatic.com/media/762265_e9e2fb871cd94f099e2aa2319bc07406~mv2.jpg/v1/fill/w_980,h_871,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/762265_e9e2fb871cd94f099e2aa2319bc07406~mv2.jpg",
    price: 1800,
    location: "Loktak Lake, Manipur",
    addons: [
      "1 bedroom with bathroom , terrace and 1 Kitchen ",
      "Complimentary Breakfast",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "Airport Pickup & Drop",
      "In-room Entertainment (TV/Streaming)",
    ],
  },
  {
    title: "Cherrapunji, Meghalaya",
    description:
      "The land of living root bridges and waterfalls, with Khasi homestays and breathtaking monsoon landscapes.",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/double-decker-living-root-bridge-cherrapunjee-meghalaya-city-ff?qlt=82&ts=1742165333655",
    price: 2000,
    location: "Cherrapunji, Meghalaya",
    addons: [
      "Complimentary Breakfast",
      "2 bedroom, 1 hall and 1 Kitchen ",
      "Flexible Check-in/Check-out",
      "Airport Pickup & Drop",
      "In-room Entertainment (TV/Streaming)",
    ],
  },
  {
    title: "Daringbadi, Odisha",
    description:
      "Known as the Kashmir of Odisha, this hill town offers pine forests, waterfalls, and nature cottages.",
    image: "https://ocean6holidays.com/wp-content/uploads/2024/04/1-26.jpg",
    price: 1900,
    location: "Daringbadi, Odisha",
    addons: [
      "Free Wi-Fi",
      "Complimentary Breakfast",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "Airport Pickup & Drop",
      "In-room Entertainment (TV/Streaming)",
    ],
  },
  {
    title: "Amritsar Village Stay, Punjab",
    description:
      "Experience rural Punjabi life with mustard farms, traditional homes, and local meals near the Golden Temple.",
    image: "https://punjabvillagefarm.com/wp-content/uploads/2024/05/05-1.jpg",
    price: 1000,
    location: "Amritsar, Punjab",
    addons: [
      "Free Wi-Fi",
      "Complimentary Breakfast",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "field trips of punjab farms",
    ],
  },
  {
    title: "Jaisalmer Desert Camp, Rajasthan",
    description:
      "Camp under the stars in the Thar Desert with camel rides, Rajasthani folk shows, and sand dune sunsets.",
    image:
      "https://www.tourpackagejaisalmer.com/blog/wp-content/uploads/2024/03/An-Unforgettable-Evening-at-a-Jaisalmer-Desert-Camp.jpg",
    price: 2500,
    location: "Jaisalmer, Rajasthan",
    addons: [
      "tent with 1 bed for 2 person",
      "bonafire and folk dance",
      "camel safari",
      "Complimentary Breakfast",
      "Flexible Check-in/Check-out",
    ],
  },
  {
    title: "Khecheopalri, Sikkim",
    description:
      "Sacred lake and peaceful homestays with views of the Himalayas. Perfect for meditation and nature lovers.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62F6xld-9jkDgtl7bVJMVip7TfCqOQHJjYg&s",
    price: 2000,
    location: "Khecheopalri, Sikkim",
    addons: [
      "Free Wi-Fi",
      "2 bedroom, 1 hall and 1 Kitchen ",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "In-room Entertainment (TV/Streaming)",
      "terrace with mountain view and lake view",
    ],
  },
  {
    title: "Nilgiris hill retreat , Tamil Nadu",
    description:
      "Green tea gardens, colonial cottages, tribal culture, and the Nilgiri Mountain Railway make it a perfect hill retreat.",
    image: "https://wildplanetresort.com/frontend/img/preview.jpg",
    price: 1800,
    location: "Nilgiris, Tamil Nadu",
    addons: [
      "Free Wi-Fi",
      "Complimentary Breakfast",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "Airport Pickup & Drop",
      "In-room Entertainment (TV/Streaming)",
    ],
  },
  {
    title: "Miyawaki Forest Stay, Telangana",
    description:
      "A forest resort in Wargal based on sustainable Miyawaki techniques with tents and nature trails.",
    image:
      "https://growbilliontrees.com/cdn/shop/collections/gbt-esg-tree-plantation.png?v=1735303163&width=1500",
    price: 1700,
    location: "Wargal, Telangana",
    addons: [
      "Free Wi-Fi",
      "Complimentary Breakfast",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "forest trekking and bird watching",
    ],
  },
  {
    title: "Jampui Hills, Tripura",
    description:
      "Scenic tribal homestays surrounded by orange orchards and pine forests with panoramic sunrise views.",
    image:
      "https://xplro.com/wp-content/uploads/2024/07/Xplro-2024-07-17T012602.996.jpg.webp",
    price: 1200,
    location: "Jampui Hills, Tripura",
    addons: [
      "Complimentary Breakfast",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "pine forest trek",
      "tribal dance and music",
    ],
  },
  {
    title: "Dudhwa National Park, Uttar Pradesh",
    description:
      "Explore tiger habitats with jungle lodges and riverside eco-tourism in the Terai region.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/be/36/5b/jaagir-lodge-dudhwa.jpg?w=1200&h=-1&s=1",
    price: 1500,
    location: "Dudhwa, Uttar Pradesh",
    addons: [
      "Complimentary Breakfast",
      "24/7 Room Service",
      "cabin with 2 bedroom and 1 Kitchen ",
      "balcony with forest view",
      "Flexible Check-in/Check-out",
      "forest trekking and bird watching",
    ],
  },
  {
    title: "Chopta, Uttarakhand",
    description:
      "Known as the mini Switzerland of India, offers cedar forests, camping, and treks to Tungnath Temple.",
    image:
      "https://www.manchalamushafir.com/chopta-uttarakhand-unveiling-the-serene-paradise-of-the-himalayas/images/chopta%20image.jpg",
    price: 1900,
    location: "Chopta, Uttarakhand",
    addons: [
      "Free Wi-Fi",
      "Complimentary Breakfast",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "room with mountain view",
      "terrace to feel switzerland in india",
    ],
  },
  {
    title: "Darjeeling Hills, West Bengal",
    description:
      "Stay in cozy cottages amidst tea gardens, with views of Kangchenjunga and access to heritage toy trains.",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/2-summer-capital-of-India-darjeeling-west-bengal-city-ff?qlt=82&ts=1726643695016",
    price: 2100,
    location: "Darjeeling, West Bengal",
    addons: [
      "Free Wi-Fi",
      "Complimentary Breakfast",
      "24/7 Room Service",
      "Flexible Check-in/Check-out",
      "day trips to tea gardens",
      "In-room Entertainment (TV/Streaming)",
    ],
  },
  {
    title: "Spiti Valley Stone Cottage",
    description: "Experience raw Himalayan beauty in a traditional stone cottage, with local meals and mountain views.",
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-2828795/original/dbcd1851-5fb0-456f-ab1d-9c255b7be168.jpeg?im_w=720",
    price: 900,
    location: "Kaza, Himachal Pradesh",
    addons: [
      "Guided Monastery Visits", "Traditional Meals", "Heater", "Mountain View", "Wi-Fi", "Free Parking"
    ]
  },
  {
    title: "Coorg Coffee Estate Homestay",
    description: "Stay on a beautiful coffee plantation in Coorg with fresh local brews and scenic walks.",
    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/93835d10-ba38-5242-8640-d05e63637aa9/d1d3938e-c060-561f-b224-1e83e6d54654.jpg",
    price: 1200,
    location: "Coorg, Karnataka",
    addons: [
      "Coffee Tour", "Local Cuisine", "Fireplace", "Eco Walks", "Wi-Fi", "Free Parking"
    ]
  },
  {
    title: "Rishikesh Riverside Hostel",
    description: "Budget hostel on the Ganges riverbank, ideal for backpackers and yoga lovers.",
    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/052570ac-7d2c-5b97-b519-0457f27fc12c/7cf24867-08c1-5cd1-9e59-d7b5266921ad.jpg",
    price: 800,
    location: "Rishikesh, Uttarakhand",
    addons: [
      "Daily Yoga", "Shared Kitchen", "Wi-Fi", "Lockers", "River View", "Tour Desk"
    ]
  },
  {
    title: "Shillong Cozy Homestay",
    description: "Warm homestay in the hills of Shillong with homemade meals and a beautiful garden.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f8b7885",
    price: 1100,
    location: "Shillong, Meghalaya",
    addons: [
      "Breakfast Included", "Wi-Fi", "Garden Access", "Laundry Service", "Family Friendly", "Local Guide"
    ]
  },
  {
    title: "Sunderbans Eco Retreat",
    description: "Live close to nature in eco cottages at the edge of the Sunderbans rainforest.",
    image: "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3",
    price: 1000,
    location: "Sundarbans, West Bengal",
    addons: [
      "Boat Safari", "Organic Meals", "Night Watch Tower", "Solar Power", "Wi-Fi", "Guided Walks"
    ]
  },
  {
    title: "Auroville Earth House",
    description: "Sustainable earth houses with meditation space and access to community activities.",
    image: "https://images.unsplash.com/photo-1499696011215-16b732d1d132",
    price: 900,
    location: "Auroville, Tamil Nadu",
    addons: [
      "Community Kitchen", "Yoga Classes", "Eco Workshops", "Bicycle Rent", "Wi-Fi", "Meditation Space"
    ]
  },
  {
    title: "Hampi Heritage Guest House",
    description: "Stay among Hampi’s ancient ruins, stone courtyards, and vibrant local life.",
    image: "https://images.unsplash.com/photo-1465101178521-c7f63495dfda",
    price: 950,
    location: "Hampi, Karnataka",
    addons: [
      "Guided Ruins Tour", "Traditional Meals", "Wi-Fi", "Bicycle Rentals", "Pet Friendly", "Garden"
    ]
  },
  {
    title: "Naggar Artist's Loft",
    description: "Art-filled mountain loft with private studio and home-cooked food.",
    image: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    price: 1300,
    location: "Naggar, Himachal Pradesh",
    addons: [
      "Mountain View", "Art Studio", "Wi-Fi", "Yoga Mats", "Homecooked Meals", "Balcony"
    ]
  },
  {
    title: "Cherrapunji Rainforest Retreat",
    description: "Sleep to the sound of rain with lush green views near living root bridges.",
    image: "https://images.unsplash.com/photo-1444065381814-865dc9da92ba",
    price: 950,
    location: "Cherrapunji, Meghalaya",
    addons: [
      "Waterfall Trek", "Rainforest View", "Homecooked Meals", "Guided Tours", "Wi-Fi", "Nature Walks"
    ]
  },
  {
    title: "Kolkata Heritage Hostel",
    description: "Budget-friendly hostel with colonial architecture, close to museums and markets.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 650,
    location: "Park Street, Kolkata",
    addons: [
      "Wi-Fi", "Breakfast", "Lockers", "Tour Desk", "Reading Room", "Laundry Service"
    ]
  },
  {
    title: "Gokarna Beach Tent",
    description: "Simple beach tent steps from the Arabian Sea, great for surfers and solo travelers.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 700,
    location: "Gokarna, Karnataka",
    addons: [
      "Beach Access", "Breakfast", "Wi-Fi", "Surf Rentals", "Campfire", "Shower Facility"
    ]
  },
  {
    title: "Udaipur Homestay",
    description: "Family-run budget homestay near Lake Pichola, walkable to city sights.",
    image: "https://images.unsplash.com/photo-1465156799763-2c087c332922",
    price: 950,
    location: "Udaipur, Rajasthan",
    addons: [
      "Free Breakfast", "Wi-Fi", "Lake View", "Laundry Service", "Tour Desk", "Garden"
    ]
  },
  {
    title: "Pune Youth Hostel",
    description: "Central hostel for students and backpackers, with workstations and games.",
    image: "https://images.unsplash.com/photo-1445346366695-ed3f3111e2a0",
    price: 600,
    location: "Shivaji Nagar, Pune",
    addons: [
      "Wi-Fi", "Shared Kitchen", "Game Room", "Study Area", "Lockers", "Breakfast"
    ]
  },
  {
    title: "Jodhpur Blue City Guest House",
    description: "Cosy guesthouse in the heart of the blue city, steps from the fort.",
    image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1",
    price: 850,
    location: "Old City, Jodhpur",
    addons: [
      "Rooftop Dining", "Wi-Fi", "City Tours", "Pet Friendly", "Breakfast", "Laundry Service"
    ]
  },
  {
    title: "Darjeeling Tea Estate Hostel",
    description: "Backpackers’ hostel surrounded by tea gardens and mountain air.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    price: 1200,
    location: "Darjeeling, West Bengal",
    addons: [
      "Tea Tasting", "Wi-Fi", "Breakfast", "Mountain View", "Shared Kitchen", "Lockers"
    ]
  },
  {
    title: "Ajmer Dargah Budget Lodge",
    description: "Simple lodge near the Ajmer Sharif Dargah, welcoming pilgrims and tourists.",
    image: "https://images.unsplash.com/photo-1505691723518-43b9ef9fd2d8",
    price: 700,
    location: "Ajmer, Rajasthan",
    addons: [
      "Wi-Fi", "Breakfast", "Tour Desk", "Fan Room", "Laundry Service", "Family Rooms"
    ]
  },
  {
    title: "Bandipur Forest Camp",
    description: "Wildlife camp near Bandipur Tiger Reserve, with guided safaris and bonfires.",
    image: "https://images.unsplash.com/photo-1442888498266-38ffec3eaf0a",
    price: 1300,
    location: "Bandipur, Karnataka",
    addons: [
      "Safari Booking", "Campfire", "Breakfast", "Wi-Fi", "Nature Walks", "Parking"
    ]
  },
  {
    title: "Pushkar Backpacker Hostel",
    description: "Boho hostel close to Pushkar Lake and temple, popular with international travelers.",
    image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1",
    price: 900,
    location: "Pushkar, Rajasthan",
    addons: [
      "Wi-Fi", "Yoga Class", "Shared Kitchen", "Breakfast", "City Walks", "Roof Terrace"
    ]
  },
  {
    title: "Amritsar Golden Stay",
    description: "Restful rooms a stroll away from the Golden Temple, perfect for low-budget pilgrims.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a",
    price: 800,
    location: "Amritsar, Punjab",
    addons: [
      "Wi-Fi", "Breakfast", "Tour Desk", "Fan Room", "Parking", "Laundry Service"
    ]
  },
  {
    title: "Mahabaleshwar Forest Cabin",
    description: "Secluded wood cabin in Mahabaleshwar forest, ideal for nature lovers.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
    price: 1400,
    location: "Mahabaleshwar, Maharashtra",
    addons: [
      "Nature Walks", "Wi-Fi", "Breakfast", "Fireplace", "Mountain View", "Parking"
    ]
  }
];

module.exports = { data: listings };
