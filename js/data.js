/* ============================================================
   data.js  –  All content for Sohail's CineVault
   Edit this file to update titles, ratings, images or descriptions.
   ============================================================ */

const movies = [
  {
    rank: 1,
    title: "The Pursuit of Happyness",
    year: "2006",
    rating: "8.0",
    img: "images/movies/pursuit_of_happyness.jpg",
    desc: "Based on a true story, a struggling salesman takes custody of his son and together they endure hardship as he chases a dream of becoming a stockbroker."
  },
  {
    rank: 2,
    title: "Gifted Hands",
    year: "2009",
    rating: "7.8",
    img: "images/movies/gifted_hands.webp",
    desc: "The inspiring true story of Ben Carson, who grew up in poverty and became one of the world's most celebrated neurosurgeons."
  },
  {
    rank: 3,
    title: "The Batman",
    year: "2022",
    rating: "7.8",
    img: "images/movies/the_batman.jpg",
    desc: "In his second year as Batman, Bruce Wayne uncovers corruption in Gotham while pursuing the Riddler, a sadistic serial killer targeting the city's elite."
  },
  {
    rank: 4,
    title: "Fight Club",
    year: "1999",
    rating: "8.8",
    img: "images/movies/fight_club.jpg",
    desc: "An insomniac office worker and a devil-may-care soap salesman form an underground fight club that evolves into something far more sinister."
  },
  {
    rank: 5,
    title: "Once Upon a Time in Hollywood",
    year: "2019",
    rating: "7.6",
    img: "images/movies/once_upon_a_time.png",
    desc: "A faded TV actor and his stunt double navigate a changing Hollywood in 1969, brushing up against the Manson Family and the end of a golden era."
  },
  {
    rank: 6,
    title: "Se7en",
    year: "1995",
    rating: "8.6",
    img: "images/movies/se7en.jpg",
    desc: "Two detectives hunt a serial killer who uses the seven deadly sins as his modus operandi, leading to a shocking and unforgettable finale."
  },
  {
    rank: 7,
    title: "American Psycho",
    year: "2000",
    rating: "7.6",
    img: "images/movies/american_psycho.png",
    desc: "A wealthy New York investment banker hides his psychopathic alter ego from colleagues while engaging in increasingly disturbing violent fantasies."
  },
  {
    rank: 8,
    title: "Lucy",
    year: "2014",
    rating: "6.4",
    img: "images/movies/lucy.jpg",
    desc: "A woman accidentally ingests a drug that unlocks 100% of her brain capacity, giving her superhuman abilities as she seeks revenge on the drug lord responsible."
  },
  {
    rank: 9,
    title: "Kung Fu Hustle",
    year: "2004",
    rating: "7.7",
    img: "images/movies/kung_fu_hustle.jpg",
    desc: "Set in 1940s Shanghai, a small-time crook accidentally triggers a war between the feared Axe Gang and a slum full of hidden kung fu masters."
  },
  {
    rank: 10,
    title: "The Platform",
    year: "2019",
    rating: "7.0",
    img: "images/movies/the_platform.jpg",
    desc: "In a vertical prison, food descends floor by floor — those at the top eat lavishly while those below starve in this brutal social allegory."
  }
];

const tvShows = [
  {
    rank: 1,
    title: "Mr. Robot",
    year: "2015–2019",
    rating: "8.5",
    img: "images/tv/mr_robot.jpg",
    desc: "A brilliant but troubled cybersecurity engineer is recruited by an anarchist hacker group to take down the mega-corporation he works for."
  },
  {
    rank: 2,
    title: "Game of Thrones",
    year: "2011–2019",
    rating: "9.2",
    img: "images/tv/game_of_thrones.jpg",
    desc: "Noble families battle for the Iron Throne of the Seven Kingdoms while an ancient evil stirs beyond the Wall and a young queen raises dragons."
  },
  {
    rank: 3,
    title: "The Boys",
    year: "2019–",
    rating: "8.7",
    img: "images/tv/the_boys.jpg",
    desc: "In a world where superheroes are corrupt celebrities owned by a mega-corporation, a group of vigilantes sets out to expose and bring them down."
  },
  {
    rank: 4,
    title: "The Walking Dead",
    year: "2010–2022",
    rating: "8.1",
    img: "images/tv/walking_dead.png",
    desc: "A sheriff's deputy wakes into a zombie apocalypse and leads a group of survivors through a world where the living are just as dangerous as the dead."
  },
  {
    rank: 5,
    title: "From",
    year: "2022–",
    rating: "7.7",
    img: "images/tv/from.jpg",
    desc: "Residents trapped in a mysterious American town are forced to survive against terrifying nocturnal creatures with absolutely no way to escape."
  },
  {
    rank: 6,
    title: "Dexter",
    year: "2006–2021",
    rating: "8.6",
    img: "images/tv/dexter.jpg",
    desc: "A forensic blood spatter analyst moonlights as a vigilante serial killer, hunting only those he believes truly deserve to die."
  },
  {
    rank: 7,
    title: "Rise of Empires: Ottoman",
    year: "2020–",
    rating: "7.9",
    img: "images/tv/rise_of_empires.jpg",
    desc: "A docudrama chronicling Sultan Mehmed II's historic campaign to conquer Constantinople in 1453 and reshape the world forever."
  },
  {
    rank: 8,
    title: "The Last of Us",
    year: "2023–",
    rating: "8.7",
    img: "images/tv/last_of_us.jpg",
    desc: "Twenty years after a fungal pandemic, a hardened smuggler escorts a teenage girl who may hold the key to humanity's survival."
  },
  {
    rank: 9,
    title: "Prison Break",
    year: "2005–2017",
    rating: "8.3",
    img: "images/tv/prison_break.jpg",
    desc: "An engineer deliberately gets himself incarcerated to execute a meticulously planned prison break and free his wrongfully convicted brother from death row."
  },
  {
    rank: 10,
    title: "Snowpiercer",
    year: "2020–2024",
    rating: "7.9",
    img: "images/tv/snowpiercer.jpg",
    desc: "The last of humanity lives on a perpetually moving train stratified by class — and revolution is always brewing in the lower cars."
  }
];

const anime = [
  {
    rank: 1,
    title: "One Piece",
    year: "1999–",
    rating: "9.0",
    img: "images/anime/one_piece.png",
    desc: "Monkey D. Luffy and his pirate crew sail the Grand Line in search of the legendary treasure One Piece to fulfill his dream of becoming King of the Pirates."
  },
  {
    rank: 2,
    title: "Naruto",
    year: "2002–2007",
    rating: "8.4",
    img: "images/anime/naruto.jpg",
    desc: "A young ninja with a powerful demon fox sealed inside him dreams of becoming Hokage, the leader of his village, growing through battles and bonds."
  },
  {
    rank: 3,
    title: "Hajime no Ippo",
    year: "2000–",
    rating: "8.8",
    img: "images/anime/hajime_no_ippo.png",
    desc: "A shy, bullied high school boy discovers boxing and dedicates himself to becoming world champion, learning the true meaning of strength."
  },
  {
    rank: 4,
    title: "Vinland Saga",
    year: "2019–",
    rating: "8.7",
    img: "images/anime/vinland_saga.png",
    desc: "A young Viking warrior seeks revenge for his father's death, but his journey forces him to question war, vengeance, and what it truly means to be strong."
  },
  {
    rank: 5,
    title: "Death Note",
    year: "2006–2007",
    rating: "8.6",
    img: "images/anime/death_note.jpg",
    desc: "A genius student finds a supernatural notebook that kills anyone whose name is written in it, sparking a cat-and-mouse game with a legendary detective."
  },
  {
    rank: 6,
    title: "Demon Slayer",
    year: "2019–",
    rating: "8.7",
    img: "images/anime/demon_slayer.jpg",
    desc: "A kind-hearted boy becomes a demon slayer to find a cure for his sister who was turned into a demon, battling increasingly powerful enemies."
  },
  {
    rank: 7,
    title: "Great Teacher Onizuka",
    year: "1999–2000",
    rating: "8.7",
    img: "images/anime/gto.jpg",
    desc: "A former gang leader becomes a high school teacher and uses unorthodox methods to reach the most troubled class in Japan."
  },
  {
    rank: 8,
    title: "Tokyo Revengers",
    year: "2021–",
    rating: "7.9",
    img: "images/anime/tokyo_revengers.jpg",
    desc: "A man who can time-leap infiltrates a notorious gang in middle school to prevent a future tragedy from unfolding and save the people he loves."
  },
  {
    rank: 9,
    title: "Hunter x Hunter",
    year: "2011–2014",
    rating: "9.0",
    img: "images/anime/hunter_x_hunter.png",
    desc: "A boy sets out to earn his Hunter license and find his legendary father, facing extraordinary dangers and forming lifelong bonds along the way."
  },
  {
    rank: 10,
    title: "The Eminence in Shadow",
    year: "2022–",
    rating: "7.9",
    img: "images/anime/eminence_in_shadow.jpg",
    desc: "A boy reincarnated in a fantasy world acts out his dream of being a shadowy mastermind, only to accidentally build a real secret organization."
  }
];
