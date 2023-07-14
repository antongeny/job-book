const db = require("./db");
const { User, Date, Company, JobApplication, People} = require("./");


const user = [
  User.create({ username: "user", password: "123123" }),
];

const company = [
  {
    name: "Microsoft",
    website: "https://www.microsoft.com/" ,
    linkedIn: "https://www.linkedin.com/company/microsoft/" ,
    notes: "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn't just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. When we show up, we achieve more together.",
  },
  {
    name: "Apple",
    website: "https://www.apple.com/" ,
    linkedIn: "https://www.linkedin.com/company/apple" ,
    notes: "We're a diverse collective of thinkers and doers, continually reimagining what's possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices — strengthening our commitment to leave the world better than we found it. This is where your work can make a difference in people's lives. Including your own.",
  },
];

const dates = [
  {
    date: new Date("2023-01-01")
  },
  {
    date: new Date("2023-02-02")
  },
  {
    date: new Date("2023-03-03")
  },
];

const people = [
  { firstName: "Linwood",
    lastName: "Strosin",
    email: "SiameseCrocodile@GlobalSolutionsTechnician.com",
    phoneNumber: "266-996-7797",
    linkedin: "https://www.linkedin.com/company/microsoft/",
  },
  { firstName: "Dayna",
    lastName: "Auer",
    email: "PygmyKillerWhale@Ziemann.com",
    phoneNumber: "560-507-5087",
    linkedin: "https://www.linkedin.com/company/apple/",
  },
]