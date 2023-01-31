import importAll from "../components/importAll";

const bfImg = importAll(
  require.context("./work/Beautyflip", false, /\.(png|jpe?g|svg)$/)
);
const bfVid = importAll(
  require.context("./work/Beautyflip", false, /\.(mp4)$/)
);
const cvImg = importAll(
  require.context("./work/CollegeVidya", false, /\.(png|jpe?g|svg)$/)
);
const cvVid = importAll(
  require.context("./work/CollegeVidya", false, /\.(mp4)$/)
);
const dpImg = importAll(
  require.context("./work/DuPont", false, /\.(png|jpe?g|svg)$/)
);
const dpVid = importAll(require.context("./work/DuPont", false, /\.(mp4)$/));
const maxImg = importAll(
  require.context("./work/Max@Home", false, /\.(png|jpe?g|svg)$/)
);
const maxVid = importAll(require.context("./work/Max@Home", false, /\.(mp4)$/));
const randImg = importAll(
  require.context("./work/Random", false, /\.(png|jpe?g|svg)$/)
);
const randVid = importAll(require.context("./work/Random", false, /\.(mp4)$/));
const thaiImg = importAll(
  require.context("./work/Thai", false, /\.(png|jpe?g|svg)$/)
);
const thaiVid = importAll(require.context("./work/Thai", false, /\.(mp4)$/));
const vlccImg = importAll(
  require.context("./work/Vlcc", false, /\.(png|jpe?g|svg)$/)
);
const vlccVid = importAll(require.context("./work/Vlcc", false, /\.(mp4)$/));
const fftImg = importAll(
  require.context("./work/VlccFoodForThought", false, /\.(png|jpe?g|svg)$/)
);
const fftVid = importAll(
  require.context("./work/VlccFoodForThought", false, /\.(mp4)$/)
);
const sugarImg = importAll(
  require.context("./work/NoSugarCoating", false, /\.(png|jpe?g|svg)$/)
);
const sugarVid = importAll(
  require.context("./work/NoSugarCoating", false, /\.(mp4)$/)
);
const data = {
  about: [
    "I'm not here to bore you with the regular copywriter's stuff like imaginative, creative, compelling, and other adjectives ( which I'm btw) in the about me section. For demonstrating this I have made this portfolio. Storytelling is what I want to do! Any way you want to hear, I'm ready to craft a story and tell it to you! Stories are the reason, I was first attracted to ads ( Happydent Ads-Tera Mann Roshan, Tera Dil Roshan) and since then I wanted to tell stories.",
    "I'm an avid motorcyclist, and cook & in the meantime, I am a copywriter with a passion to make it big and tell stories that are unforgettable. Working with brands ranging from travel and tourism to SAAS, I have learned that stories are limitless & there isn't a right or wrong way to do so.",
  ],
  jobs: [
    ["IMARTI MEDIA ", "COPYWRITER", "OCT 2021", "PRESENT"],
    ["COLLEGE VIDYA", "SR. COPYWRITER", "JUL 2020", "OCT 2021"],
    ["CASHURDRIVE", "CONTENT STRATEGIST", "JAN 2020", "JUN 2020"],
    ["QUIZISTAN", "COPYWRITER", "APR 2019", "DEC 2019 "],
    ["UNACADEMY", "CATEGORY EXPERT", "OCT 2017", "FEB 2019"],
  ],
  brands: [
    ["Kent RO", "kent.png"],
    ["VLCC", "vlcc.png"],
    ["VLCC Luxe", "luxe.png"],
    ["Dupont Water Solutions", "DuPont.png"],
    ["Satvacart", "satvacart.png"],
    ["Max @ Home", "max.png"],
    ["Max Institute", "maxInstitute.png"],
    ["College Vidya", "college.png"],
    ["Tata Motors", "tata.png"],
    ["Thai Airways", "Thai.png"],
    ["Cargo Flash", "cargoflash.png"],
    ["UP RERA", "rera.png"],
    ["Bonjour", "Bonjour.png"],
    ["E-drugstore", "edrugstore.png"],
    ["BetterLYF", "betterlyf.png"],
    ["Plus plus life sciences", "plus.png"],
    ["Nok Airways", "Nok.png"],
    ["Group Concorde", "concorde.png"],
    ["Unacademy", "Unacademy.png"],
  ],
  bestWorks: [
    [
      "#NoSugarCoating",
      "Campaign designed  for World Diabetes Day under the name of #NoSugarCoating. The campaign aimed to raise awareness about the importance of cutting sugar in our diet to maintain a healthy lifestyle and prevent diabetes. The name of the campaign was chosen to work as a double entendre, not only emphasizing the message of reducing sugar intake but also reflecting the idea of not sugar coating the importance of this issue. The campaign was a huge success, with a large number of people actively engaging and making a conscious effort to reduce sugar in their diet. ​",
      sugarImg,
      sugarVid,
    ],
    [
      "#MenKiBaat",
      "As International Men's Day is around the corner, we have dedicated this campaign towards men's health issues. As men's health issue are less discussed with #MENKIBAAT we aim to bring the problems in light, bust the stigma & misconception around and how Max@Home is contributing to cater to their needs. #MENKIBAAT invites men to be more vocal about the problems and seek help whenever they need.",
      maxImg,
      maxVid,
    ],
    [
      "#FoodForThought",
      "It's a wordplay on the Food For Thought as the food habits of people are affecting them & they need have think it through, thus Food For thought.",
      fftImg,
      fftVid,
    ],
    [
      "#Beautyflip",
      "The campaign was the celebration of beauty. The campaign was to celebrate beauty in every form. The campaign relied on visuals of the campaign and I decided to give the campaign a visual route of a magazine cover. The campaign was huge success & it's a yearly property of VLCC now.",
      bfImg,
      bfVid,
    ],
    [
      "#ButterflyEffect",
      "As the name suggests, the butterfly effect denotes that a small action can bring a big change and everything is connected. Through a series of posts, we will highlight all the industries that DuPont caters to & how our small habits can bring bigger changes. The post will pave the way to reduce water footprint and create water sustained world which is one of the core principles of DuPont.",
      dpImg,
      dpVid,
    ],
    [
      "#MightyNaari",
      "VLCC Mighty Naari was our social media campaign during Women’s Day. The campaign was to encourage our audience to share stories of the strength of women and 500+ people engaged with us with their stories in long form as comments creating UGC content for the brand.",
      vlccImg,
      vlccVid,
    ],
    [
      "College Vidya",
      "My first ever DVC for College Vidya. From storyboarding to scripting, everything was done by me!",
      cvImg,
      cvVid,
    ],
    [
      "Thai Airways",
      "This was one the earliest days in my career and this was one the first brands I have worked for. With the given specific destination, the campaign was to promote Thai airways using visual elements.",
      thaiImg,
      thaiVid,
    ],
    ["Other Works", "Some of my other notable works.", randImg, randVid],
  ],
  testimonial: [
    [
      "Ex do",
      "Non quis",
      "Pariatur nostrud sunt",
      "Commodo commodo cillum laboris aliquip occaecat cupidatat irure aliquip fugiat velit mollit.Minim labore aute consequat laboris cillum aliqua ut enim.",
    ],
    [
      "Ex do",
      "Non quis",
      "Pariatur nostrud sunt",
      "Commodo commodo cillum laboris aliquip occaecat cupidatat irure aliquip fugiat velit mollit.Minim labore aute consequat laboris cillum aliqua ut enim.",
    ],
    [
      "Ex do",
      "Non quis",
      "Pariatur nostrud sunt",
      "Commodo commodo cillum laboris aliquip occaecat cupidatat irure aliquip fugiat velit mollit.Minim labore aute consequat laboris cillum aliqua ut enim.",
    ],
    [
      "Ex do",
      "Non quis",
      "Pariatur nostrud sunt",
      "Commodo commodo cillum laboris aliquip occaecat cupidatat irure aliquip fugiat velit mollit.Minim labore aute consequat laboris cillum aliqua ut enim.",
    ],
    [
      "Ex do",
      "Non quis",
      "Pariatur nostrud sunt",
      "Commodo commodo cillum laboris aliquip occaecat cupidatat irure aliquip fugiat velit mollit.Minim labore aute consequat laboris cillum aliqua ut enim.",
    ],
  ],
};

export default data;
