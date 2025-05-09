import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, ShoppingBagOutlined, StyleOutlined, LocalShippingOutlined, CheckroomOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
 
    url: "/styleTips",
    text: "StyleTips",
  },
  {
    url: "/shop",
    text: "Shop",
    dropdown: [
      { url: "/shop/seasonal-collections", text: "Seasonal Collections" },
      { url: "/shop/best-sellers", text: "Best Sellers" },
      { url: "/shop/limited-edition", text: "Limited Edition" }, 
    ],
  },
  {
    url: "/lifeStyle",
    text: "LifeStyle",
  }, 
  {
    url: "/outfitStyler",
    text: "OutfitStyler"
  },
   {
    url: "/aboutus",
    text: "AboutUs",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "Welcome to Fashion & Lifestyle",
    name: "fashion tips",
    post: "lifestyle hacks",
    design: "latest trends",
    desc: "Your ultimate destination for trendy fashion tips, lifestyle hacks, and the latest trends. Stay ahead in the style game with our curated content, designed to inspire and empower your unique identity. Explore the latest in fashion, beauty, and living.",
  },
]
export const AboutUs = [
  {
    desc: "At Fashion & Lifestyle, we believe in celebrating individuality and empowering everyone to express themselves through style. From exclusive fashion collections to practical lifestyle advice, we aim to provide a platform that caters to modern trends and timeless classics alike. Join us in exploring the vibrant world of fashion and living your best life.",
    desc1: "magni dolores eos qui ratiYour ultimate destination for trendy fashion tips, lifestyle hacks, and the latest trends. Stay ahead in the style game with our curated content, designed to inspire and empower your unique identity. Explore the latest in fashion, beauty, and living.one voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
    cover: require('../data/images/man.png'),
  },
]
// export const styleTips = [
//   {
//     id: 1,
//     icon: <Settings />,
//     title: "Creative Design",
//     desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
//   },
//   {
//     id: 2,
//     icon: <CropRotate />,
//     title: "Clean Code",
//     desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
//   },
//   {
//     id: 3,
//     icon: <ViewInAr />,
//     title: "Responsive Design",
//     desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
//   },
//   {
//     id: 4,
//     icon: <PieChart />,
//     title: "Material UI	",
//     desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
//   },
//   {
//     id: 5,
//     icon: <Code />,
//     title: "Material UI Icons",
//     desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
//   },
//   {
//     id: 6,
//     icon: <BarChart />,
//     title: "Awesome Support",
//     desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
//   },
// ]

export const fashionBlogs = [
  {
    id: 1,
    title: "The Power of Black: Chic and Timeless Fashion",
    excerpt: "3 Words To Describe Your Style",
    image: require('../data/images/black_shirt.jpg'),
    content: [
      "Nothing speaks sophistication and timeless style quite like an all-black ensemble. This effortlessly chic look featuring a classic black oversized shirt, bold red lips, and statement cat-eye sunglasses is the perfect blend of edgy and elegant.",
      "A black shirt is more than just a staple—it's a statement piece that exudes confidence and mystery. Whether styled casually or dressed up, it remains an iconic choice for those who love understated luxury."
    ],
    con:[
      "A black shirt is a wardrobe essential that never goes out of style. It exudes confidence, sophistication, and effortless charm, making it the perfect choice for any occasion. Whether you're dressing up for a night out or keeping it casual for a day in the city, a black shirt provides versatility like no other. This look, featuring an oversized black shirt paired with bold accessories and red lips, captures the essence of modern elegance."
    ],
    conn:[
      "When styling a black shirt, the key is to play with textures, accessories, and silhouettes. For a chic and effortless look, pair it with high-waisted jeans and ankle boots. If you’re aiming for an office-appropriate outfit, tuck it into tailored trousers and add statement earrings for a polished effect. Want to embrace a bold and glamorous aesthetic? Pair it with leather pants, strappy heels, and cat-eye sunglasses for that ultimate 'boss babe' energy.A black shirt is more than just a piece of clothing—it's a statement. Its neutral tone allows for endless styling possibilities, making it suitable for both minimalists and fashion risk-takers."
    ],
    title_para:"3 Words For My Personal Style",
    paragraph: [
      "Classic : This one was fairly easy for me. I’ve always been drawn to pieces that were considered classic A trench coat, a cashmere sweater, a stripe t-shirt, a button down shirt. You get the idea. I love incorporating these pieces where I can. I also think I associate classic pieces with things that are timeless, things I’ll wear again and again and again…like a good pair of jeans. These are the pieces that I usually build my outfits around. Classic style is definitely my most defining word.",
    ],
    para:[
      "Fun : I do like to dabble in trends that I think are right for my personal style, and also ones that I just genuinely think are fun. So “fun” is my second word. That’s where things like mesh flats come into play. Sure, trends are trends for a reason – they’re going to come and go. But I love looking at trends, especially when they actually really compliment my classic style."
    ],
    text:[
      "Approachable : And finally, I like to describe my personal style as approachable. I think anyone can take a look at the outfits I put together and either recreate them in their own way, or completely do the same look head to toe wearing pieces within their closet. I also like to think that my personal style is pretty affordable. And in this day and age, affordable is approachable. Sure, I like to invest in pieces like bags, shoes, or premium denim, but again an investment is also an approachable way to look at fashion."
    ],
    extraImage: require('../data/images/blakk_shirt.avif'),
  },
  {
    id: 2,
    title: "Bold & Beautiful: The Ultimate Color-Block Statement",
    excerpt: "Elevate your style with this vibrant tiered maxi dress—where bold hues meet effortless elegance!!🌈✨",
    image: require('../data/blogs/color_full.jpg'),
    content: [
      "Nothing says effortless style quite like a flowy color-block maxi dress. This stunning piece blends bold summer hues—white, orange, blush, and pastel yellow—into a breezy, relaxed silhouette that radiates pure joy. Whether you're strolling through city streets, hitting the beach, or simply embracing a casual day out, this dress is your ultimate fashion statement.",
      "Pair this eye-catching dress with sleek white sandals and oversized sunglasses for a chic, modern look. Accessorize with a minimalist handbag to balance the vibrant colors, or opt for playful jewelry to enhance the fun, youthful vibe. Want a sporty twist? Throw on white sneakers for a fresh street-style approach.",
    ],
    con:[
      "Step into summer with confidence in this effortlessly stylish color-block maxi dress. The perfect blend of elegance and playfulness, this dress embraces a bold mix of hues—crisp white, energetic orange, soft blush, and a warm pastel yellow. Whether you're heading to a brunch, a beach vacation, or a casual weekend stroll, this dress makes sure all eyes are on you."
    ],
    conn:[
      "Color-block fashion is a timeless trend that blends contrasting hues into one striking outfit. This particular maxi dress exudes positivity and radiance, making it a standout choice for anyone looking to make a fashion statement. The tiered design adds a touch of femininity and movement, while the lightweight fabric ensures breathability and comfort all day long."
    ],
    title_para:"How to Style a Bold Color-Block Maxi Dress Like a Trendsetter",
    paragraph: [
      "If you're looking to turn heads and make a bold fashion statement, a vibrant color-block maxi dress is your ultimate go-to. With its eye-catching mix of hues and flowing silhouette, this dress effortlessly combines comfort with high fashion. Whether you're heading to a summer brunch, a tropical getaway, or a casual day out, here’s how you can style this show-stopping outfit like a true trendsetter.Since a color-block maxi dress already brings a splash of color, it's best to keep accessories chic and minimal. Opt for neutral-toned or metallic jewelry, such as gold hoops or pearl drop earrings, to enhance the outfit without overwhelming it.",
    ],
    para:[
      "Keep Your Hair & Makeup Fresh - A flowy maxi dress pairs beautifully with loose waves or a sleek ponytail. For a more relaxed and carefree look, a messy bun or soft curls create the perfect balance. As for makeup, a fresh and dewy finish with a pop of color on the lips—think coral, nude pink, or a bold red—completes the look effortlessly.Oversized sunglasses are a must-have for a confident and stylish look. Go for classic black frames for a timeless appeal or opt for trendy geometric or cat-eye sunglasses for a fashion-forward edge."
    ],
    text:[
      "Final Touch: Confidence is Key - No matter how you style your color-block maxi dress, the key to rocking it is confidence.If the weather is slightly chilly, layering your maxi dress with a cropped denim jacket or a lightweight blazer can add a touch of sophistication. Own your look, embrace the colors, and walk with a statement-making attitude. Fashion is all about expressing yourself, and this dress is the perfect way to do just that!!"
    ],
    extraImage: require('../data/blogs/WhiteOrange_onepice.jpg'),
    styleClass: "black-style",
  },
  {
    id: 3,
    title: "Edgy Chic: The Ultimate Rocker Street Style",
    excerpt: "Unleash your inner rockstar with a bold mix of a leather jacket, graphic tee, and distressed denim-effortlessly cool with an attitude!!",
    image: require('../data/blogs/black_Denim.jpg'),
    content: [
      "Denim never goes out of style, and this look proves just that! A mix of vintage rock vibes and boho-chic elements, this outfit is a lesson in mastering effortless streetwear. The oversized felt hat adds a touch of free-spirited charm, while the distressed denim and band tee create an edgy, laid-back aesthetic. It’s the perfect balance between rugged and refined—ideal for the modern trendsetter.",
      "Denim and band tees are the ultimate go-to for an effortlessly cool and rebellious style. This outfit is the perfect blend of vintage rock vibes with a modern boho twist, making it a must-have look for fashion-forward trendsetters. Whether you’re heading out for a casual day in the city or making a statement at a music festival, this look is all about confidence and attitude.",
    ],
    con:[
      "Layering is the key to nailing this look. The light-washed denim jacket draped casually over the shoulders brings a relaxed, undone feel, while accessories like round sunglasses and a simple pendant necklace add a touch of sophistication. The distressed jeans, cinched with a statement belt, complete the outfit with a rebellious yet polished edge."
    ],
    conn:[
      "This outfit isn’t just about fashion—it’s about attitude. Whether you’re heading to a festival, coffee date, or a casual stroll through the city, it’s the kind of style that turns heads. The best part? It’s versatile, comfortable, and undeniably cool. Pair it with ankle boots or sneakers, and you’ve got yourself a look that’s effortlessly Instagram-worthy.Embrace the fusion of boho and rock chic, and let your outfit do the talking!!"
    ],
    title_para: "Power Dressing, But Make It Edgy!!",
    paragraph: [
      "The fusion of rebellious rockstar energy and effortless street-style chic has never looked better! This edgy yet polished look is all about exuding confidence, individuality, and an unmistakable 'cool girl' vibe. If you're all about bold fashion that speaks volumes without trying too hard, then this outfit formula is your ultimate go-to.",
      "Whether styled with ankle boots for a rocker-chic vibe or white sneakers for a more relaxed, casual aesthetic, the right footwear can make all the difference. Want to dress it up? Swap in pointed-toe heels for a night-out-ready transformation.",
    ],
    para:[
      "The Leather Jacket: A Timeless Statement Piece - A well-fitted black leather jacket is more than just an outer layer—it's an attitude. This classic staple instantly elevates any outfit, giving off that fearless, bad-girl energy. Whether thrown over the shoulders for an effortlessly cool effect or fully zipped up for a sleek silhouette, a leather jacket is the ultimate power move in fashion.",
      "What takes this outfit to the next level? The accessories! Oversized sunglasses add an air of mystery and sophistication, while stacked metallic bangles bring in a touch of glam. ",
    ],
    text:[
      "Final Thoughts: Own Your Attitude - The beauty of this look isn’t just in the clothes—it’s in how you wear them. Style is about confidence, and when you step out in a leather jacket, ripped denim, and a killer band tee, you're making a statement that says, “I’m here, and I own it.” So go ahead—embrace the edge, mix up your accessories, and most importantly, wear your attitude with pride!!"
    ],
    extraImage: require('../data/blogs/denim_style.jpg'),
    styleClass: "sustainable-style",
  },
  {
    id: 4,
    title: "Zebra & Terracotta: The Perfect Contrast",
    excerpt: "A mix of neutral prints and warm tones creates the ultimate stylish harmony.",
    image: require('../data/images/orange_top.jpg'),
    content: [
      "When it comes to warm-weather fashion, striking the perfect balance between comfort and statement-making style is key. This look is all about vibrant confidence, mixing earthy tones with bold prints for an effortlessly chic vibe that turns heads.",
      "This rust-colored, cinched-waist blouse is the definition of easy elegance. With its billowy sleeves and lightweight fabric, it’s the ultimate piece for staying cool while looking polished. The flattering drawstring waist enhances the silhouette, making it both relaxed and sophisticated.",
    ],
    con:[
      "The oversized wooden bangles and gold statement earrings add a touch of boho-luxe, while the structured wicker handbag balances the playfulness with a refined, vintage-inspired touch. Strappy nude sandals keep the focus on the outfit, elongating the legs without overwhelming the look."
    ],
    conn:[
      "A pair of chic white-framed sunglasses adds the perfect retro flair, making this outfit vacation-ready.Fashion isn’t just about what you wear—it’s about how you wear it. This outfit radiates confidence, playfulness, and effortless sophistication, making it perfect for those who love standing out while embracing comfort. Whether you’re strolling through a tropical resort, enjoying an alfresco brunch, or capturing the perfect Instagram moment, this look is your ultimate fashion-forward ally. Dare to mix prints, play with textures, and let your style do the talking!!"
    ],
    title_para:"The Power of Prints & Playful Textures!!",
    paragraph: [
      "Animal prints have made a strong comeback, and they’re here to stay. A pair of zebra-striped pants isn’t just a style choice—it’s a statement. Paired with earthy tones, the contrast is striking yet effortlessly harmonious. The flowy, cinched-waist blouse enhances the silhouette, adding a feminine softness that complements the bold lower half. This balance is what makes the look work: an edgy yet refined outfit that transitions seamlessly from brunch to beachside soirées.",
    ],
    para:[
      "No standout outfit is complete without the right accessories, and this look is the epitome of curated simplicity. Oversized white cat-eye sunglasses add a touch of vintage glamour, while stacked gold bangles and a woven handbag introduce boho-chic vibes. The nude strappy sandals ground the look, keeping the focus on the statement pieces without overcomplicating the aesthetic. It’s all about blending textures and silhouettes in a way that feels luxurious yet effortless."
    ],
    text: [
      "Fashion isn’t just about what you wear—it’s about how you wear it. This outfit radiates confidence, playfulness, and effortless sophistication, making it perfect for those who love standing out while embracing comfort. Whether you’re strolling through a tropical resort, enjoying an alfresco brunch, or capturing the perfect Instagram moment, this look is your ultimate fashion-forward ally. Dare to mix prints, play with textures, and let your style do the talking!!"
    ],
    extraImage: require('../data/images/orange_top2.jpg'),
    styleClass: "accessories-style",
  },
  {
    id: 5,
    title: "The Chic Brown & White Aesthetic",
    excerpt: "A blend of coffee tones and neutrals for a refined, modern look.",
    image: require('../data/blogs/brown_t-shirt.jpg'),
    content: [
      "Fashion in 2025 is all about refined simplicity, bold minimalism, and quiet luxury. The latest trend taking over the streets, social media, and high-end fashion runways? The effortless combination of rich brown and crisp white. This neutral pairing exudes confidence, class, and a touch of European summer aesthetic that fits seamlessly into the evolving world of modern fashion.",
      "Whether you're curating a capsule wardrobe or looking for a statement outfit, brown and white are the power duo redefining contemporary elegance.",
    ],
    con:[
      "In a world of ever-changing fashion trends, some color combinations stand the test of time while effortlessly evolving with modern aesthetics. One such timeless duo making waves in 2025? Rich chocolate brown paired with crisp white.This minimalist yet luxurious pairing exudes sophistication, making it a favorite among fashion enthusiasts who love clean lines, neutral tones, and a polished yet relaxed vibe. Whether you’re dressing for a chic brunch, a summer getaway, or a city-strolling day, brown and white offer the perfect blend of refinement and effortlessness."
    ],
    conn:[
      "one-shoulder brown top and pairs it with flowy white shorts, creating a soft yet striking silhouette. The matching brown handbag and sandals with gold embellishments elevate the outfit, giving it a luxe summer vibe. The one-shoulder design adds an element of asymmetry, making it an eye-catching, statement-making choice."
    ],
    title_para:"How to Style Brown & White Like a Pro!!",
    paragraph: [
      "Play with Texture for a Luxe Look - For a modern yet effortless vibe, try pairing a ribbed brown top with crisp white tailored shorts. If you’re looking for something more sophisticated, go for a silky brown blouse tucked into white linen trousers—this mix of soft and structured fabrics adds instant elegance.To complete the look, leather accessories like a brown tote bag, a slim belt, or a pair of chic sandals bring an extra touch of luxury.",
    ],
    para:[
      "Elevate Your Look with Accessories - Accessories can make or break an outfit, so choosing the right ones is crucial. When styling brown and white, opt for gold, brown, or neutral-toned accessories to maintain a sophisticated look.Gold jewelry is a perfect match for brown’s warmth, so go for chunky gold hoops, layered necklaces, or statement rings. A brown leather handbag or structured tote complements the outfit beautifully, adding a touch of elegance. If you want to enhance your face, sunglasses with brown-tinted or tortoiseshell frames will elevate your style effortlessly. "
    ],
    text: [
      "Make the Look Your Own - Fashion is all about personal expression, and while brown and white create a timeless base, you can adapt them to suit your unique style. Whether you prefer a minimalist, edgy, or feminine aesthetic, there are many ways to make this combination work for you.If you love minimalist fashion, keep your outfit clean and structured with sleek silhouettes and delicate accessories. For an edgy twist, throw on an oversized brown blazer, chunky boots, or a statement belt. If you lean towards soft and feminine, opt for flowy brown skirts paired with crisp white tops for a dreamy, romantic vibe."
    ],
    extraImage: require('../data/blogs/brown.jpg'),
    styleClass: "brown-style",
  },
  {
    id: 6,
    title: "Ocean Breeze Outfit",
    excerpt: "Stay trendy and comfortable with this stunning blue and white fashion statement.",
    image: require('../data/blogs/blue_skirt.jpg'),
    content: [
      "Fashion meets comfort in this effortlessly stylish ensemble, featuring a royal blue tiered midi skirt paired with a relaxed white graphic tee. The striking blue hue brings a vibrant and confident touch, making it a standout piece for any occasion. The lightweight, flowy fabric adds movement and grace, ensuring both style and comfort throughout the day.",
      "",
    ],
    con:[
      "Step into effortless elegance with this stunning royal blue midi skirt paired with a chic white graphic tee. The bold hue of the skirt adds a touch of sophistication, while the relaxed silhouette ensures comfort throughout the day. The airy, flowy fabric makes it a perfect pick for casual outings, brunch dates, or even a stylish work-from-home look. Styled with strappy blue sandals and a vibrant mini handbag, this outfit is a true testament to modern femininity with a hint of playfulness. Whether you're looking to make a statement or simply embrace vibrant fashion, this ensemble is the perfect blend of bold and beautiful."
    ],
    conn:[
      "Accessorized with a trendy green mini handbag and matching blue strappy heels, this look is perfect for casual outings, brunch dates, or even a vacation-ready wardrobe. The balance between bold color and simplicity creates a timeless fashion statement that blends sophistication with a playful, modern vibe. Whether you're stepping out for a coffee run or capturing the perfect Instagram-worthy moment, this outfit is sure to turn heads with its effortless charm!!"
    ],
    title_para:"How to Style This Vibrant Yellow & Blue Skirt for Every Occasion",
    paragraph: [
      "Casual Chic for Day Outings - Pair this yellow skirt with a simple white graphic tee, just like in the image, for a relaxed and stylish daytime look. Complete the outfit with comfy flats or embellished sandals, and carry a woven or neutral-toned handbag for a breezy, effortless vibe. This look is ideal for brunch dates, casual shopping trips, or summer strolls.To give this feminine skirt a modern, edgy twist, layer it with a cropped denim jacket and a fitted tank top. Finish the look with chunky sneakers or ankle boots, and accessorize with oversized sunglasses and a crossbody bag. ",
    ],
    para:[
      "Office-Ready Elegance - Transform this bright skirt into a work-friendly outfit by pairing it with a fitted blouse or a structured top in a neutral shade like beige, white, or light blue. Tuck in your top for a polished appearance, and add pointed-toe heels or stylish loafers. A sleek handbag and minimal jewelry will elevate your office ensemble while keeping it sophisticated yet lively.If you're in the mood for a relaxed boho-inspired look, wear this skirt with a flowy peasant top or a lace-trimmed tank top. Layer some beaded or shell jewelry, opt for comfortable espadrilles or gladiator sandals, and carry a rattan bag for the ultimate bohemian aesthetic."
    ],
    text: [
      "Final Styling Tip - The beauty of a vibrant yellow skirt lies in its versatility. Whether you prefer a playful, classic, or bold style, you can easily mix and match tops, accessories, and footwear to create a look that reflects your personality. Don’t be afraid to experiment with different colors and textures to keep your outfits fresh and stylish all year round!!"
    ],
    extraImage: require('../data/blogs/yellow_skirt.jpg'),
    styleClass: "blue-style",
  },
];

export const project = [
  {
    id: 1,
    icon: <ShoppingBagOutlined />,
    num: "89",
    title: "Satisfied Customers",
  },
  {
    id: 2,
    icon: <StyleOutlined />,
    num: "231",
    title: " Unique Styles Created",
  },
  {
    id: 3,
    icon: <LocalShippingOutlined />,
    num: "108",
    title: "Orders Shipped",
  },
  {
    id: 4,
    icon: <CheckroomOutlined />,
    num: "1446",
    title: "Trendy Outfits Sold",
  },
]
export const shop = [
  {
    id: 1,
    cover: require('../data/images/Girls t-shirt.avif'),
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 2,
    cover: require('../data/images/Girls t-shirt.avif'),
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 3,
    cover: require('../data/images/Girls t-shirt.avif'),
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
  {
    id: 4,
    cover: require('../data/images/Girls t-shirt.avif'),
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 5,
    cover: require('../data/images/Girls t-shirt.avif'),
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 6,
    cover: require('../data/images/Girls t-shirt.avif'),
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
  {
    id: 1,
    cover: require('../data/images/Girls t-shirt.avif'),
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 2,
    cover: require('../data/images/Girls t-shirt.avif'),
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 3,
    cover: require('../data/images/Girls t-shirt.avif'),
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
  {
    id: 4,
    cover: require('../data/images/Girls t-shirt.avif'),
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 5,
    cover: require('../data/images/Girls t-shirt.avif'),
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 6,
    cover: require('../data/images/Girls t-shirt.avif'),
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
]
export const lifeStyle = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-1.png",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-2.png",
    name: "Alex Ander",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-3.png",
    name: "GorkCoder",
    post: "React Developer",
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "2651 Main Street, Suit 124",
    text2: "Seattle, WA, 98101",
  },
  {
    icon: <PhoneIphone />,
    text1: "0123456789",
    text2: "0345627891",
  },
  {
    icon: <EmailOutlined />,
    text1: "hello@thetheme.io",
    text2: "inf0@brex-theme.io",
  },
]
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
]
