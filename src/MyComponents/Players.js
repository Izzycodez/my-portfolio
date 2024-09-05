
const Players = [
  {
    id: 1,
    name: "Mbappe ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRerF64srbVuOrQxQn1LYnKnajoUrJU98GVeA&s",
    country: "France",
  },
  {
    id: 2,
    name: "Bernado Silva ",
    image:
      "https://www.fifpro.org/media/om2a4pmo/bernardo-silva_city.jpg?rxy=0.5210683500883063,0.10088769530172481&width=1000&height=640&rnd=133581790007770000",
    country: "Portugal",
  },
  {
    id: 3,
    name: "Salah",
    image:
      "https://backend.liverpoolfc.com/sites/default/files/styles/xl/public/acquiadam/2022-05/mohamed-salah-golden-boot-22052022-v2.webp?itok=LB_Ruvbn",
    country: "Eygpt",
  },
  {
    id: 4,
    name: "Haaland ",
    image:
      "https://www.fifpro.org/media/1i0cxvm4/haaland_ucl.jpg?width=1000&height=640&rnd=133492066945430000",
    country: "Norway",
  },
  {
    id: 5,
    name: "Suarez ",
    image:
      "https://assets.goal.com/images/v3/blt9245083b293ae193/GOAL_-_Blank_WEB_-_Facebook_-_2024-03-03T163550.376.png?auto=webp&format=pjpg&width=640&quality=60",
    country: "Uruaguay",
  },
  {
    id: 6,
    name: "Messi ",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/lionel-messi-celebrates-after-their-sides-third-goal-by-news-photo-1686170172.jpg?crop=0.66653xw:1xh;center,top&resize=1200:*",
    country: "Argentina",
  },
  {
    id: 7,
    name: " C.Ronaldo",
    image:
      "https://i.pinimg.com/originals/c3/20/60/c3206018628ad6c3f3b6a63acf58de34.jpg",
    country: "Portugal",
  },
  {
    id: 8,
    name: "lautaro Martinez",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_-ZEG681amVWjt8ni2vjxTb4c-2Z-MGQ3Q&s",
    country: "Argentina",
  },
  {
    id: 9,
    name: " Neymar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3akJPwOXvgGYBeqWmLn4ctQ5W-43Ya9oiJA&s",
    country: "Brazil",
  },
  {
    id: 10,
    name: "Victor Osimen ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIMAsjOtQC7YnAxinoJAC7oIRHNuTrW0yIw&s",
    country: "",
  },
  {
    id: 11,
    name: "Harrry kane ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMV_Lryxe_NORbfvKDZJ1hkUAIH6Dxh1-bg&s",
    country: "England",
  },
  {
    id: 12,
    name: "Lewandoski ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRmjPqugqgdENG4vq7yyRQpZg4RWX3mCbWFw&s",
    country: "Poland",
  },
  {
    id: 13,
    name: "Antoine Griezmann",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTohulTUiSM6M02Jvlwguv3YTG2yV-LS9L0GREwV-lCQdadtqxtHHFzgXot9hzrkDOZnyw&usqp=CAU",
    country: "France",
  },
  {
    id: 14,
    name: "Son Heungmin ",
    image:
      "https://cdn.vox-cdn.com/thumbor/xKP-5pKiQRRCcPZke5gg1xcSqJQ=/0x0:4436x2957/1200x800/filters:focal(1807x1044:2515x1752)/cdn.vox-cdn.com/uploads/chorus_image/image/65846603/1192494773.jpg.0.jpg",
    country: "south Korea",
  },
  {
    id: 15,
    name: "khvicha Kvaratskhelia",
    image:
      "https://gianlucadimarzio.com/images/kvaratskhelia_napoli_agency.jpg?p=intextimg&s=d137df0145fc381389280676c7486eb7",
    country: "Georgia",
  },
  {
    id: 16,
    name: "Alexander Isak ",
    image:
      "https://assets.goal.com/images/v3/blt12cab68fd5ac9683/Alexander-Isak.jpeg?auto=webp&format=pjpg&width=3840&quality=60",
    country: "Sweden",
  },
  {
    id: 17,
    name: "Rodrygo ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgtXN-77DFOJck9vX0kCaHFfJKrcdyvZQ0XDgvMigGNtcDk80C8G5e1_26fkSjsl2J-kY&usqp=CAU",
    country: "Brazil",
  },
  {
    id: 18,
    name: " Ollie Watkins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9MGFc7A3s5HaDAVBH9bMnfomHFZwTLrVEpQ&s",
    country: "England",
  },
  {
    id: 19,
    name: "Bukayo Saka ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDl05wAYwTgHIF4gQ8ER9eNwSIjjtonckE6w&s",
    country: "England",
  },
  {
    id: 20,
    name: "Vinicius Jr ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyd4dJCLyDVj2ocvOU20SZOvqPb76bHrwMx8OdEXpm9w9Owj0ZIyky9ML7WeF0b7661V8&usqp=CAU",
    country: "Brazil",
  },
];
export default Players