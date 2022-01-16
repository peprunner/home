// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Giuseppe",
  middleName: "",
  lastName: "Andreetti",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/giuseppe-andreetti/",
    },
    {
      image: "fa-github",
      url: "https://github.com/peprunner",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/photo.jpg"),
  imageSize: 375,
  message:
    "My name is Giuseppe Andreetti🇮🇹 . I’m a graduate of 17-18 A.Y. from La Sapienza University in Rome with a degree in Enginnering in Computer Science. Java and C++ Developer. I am specialized in Software Engineering and Data Science. Well-versed in numerous programming languages including Java, Python, JavaScript. I am interested in crypto and DeFi.",
  resume: "https://drive.google.com/file/d/1XBCC1m9Bnf7in2trJ_KWGWtZWvVGFmiC/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "peprunner", //i.e."johnDoe12Gh"
  reposLength: 2,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/photo.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 95 },
    { name: "C/C++", value: 78 },
    { name: "Python", value: 70 },
    { name: "SQL", value: 88 },
    { name: "Data Structures", value: 92 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    ,
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 80 },
    { name: "Adaptability", value: 95 },
    { name: "Problem Solving", value: 90 },
    { name: "Empathy", value: 85 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 90 },
  ],
};

// LANGUAGES SECTION
const languages = {
  show: true,
  heading: "Languages",
  hardLanguages: [
    { name: "Italian", value: 100 },
    { name: "English", value: 85 },
    { name: "Spanish", value: 80 },
    { name: "French", value: 60 },

  ],
  softLanguages: [
    { name: "bau", value: 80 },

  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently living in Barcelona and working in Ocado Technology! If you have an interesting project to share, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "giuseppeand@hotmail.it",
};

// EXPERIENCES TOUCH SECTION
const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/ocado-logo.png'),
      date: 'Jul 2020 – Present',
    },
    {
      role: 'Back-End Software Engineer',
      companylogo: require('../assets/img/amadeus.png'),
      date: 'Apr 2019 – Mar 2020',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, languages, leadership, getInTouch, experiences };
