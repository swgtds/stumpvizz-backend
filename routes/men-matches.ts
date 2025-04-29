import { Router } from "express";

const router = Router();
const streamLink = "https://user4580.ifrem.net/iframe/frame.php"; 

const menMatches = [
  /*
  {
    id: "",
    name: "",
    startTime: "",
    endTime: "",
    streamUrl: streamLink,
    match: {
      team1: "",
      team2: "",
      date: "",
      thumbnail: "https://www.hindustantimes.com/ht-img/img/2025/02/16/550x309/ipl-trophy-new-new_1651582336209_1739699060567.jpg",
    },
  },
  */
  {
    id: "dc-vs-kkr",
    name: "Live Match 1",
    startTime: "19:00",
    endTime: "23:45",
    streamUrl: streamLink,
    match: {
      team1: "Delhi Capitals",
      team2: "Kolkata Knight Riders",
      date: "29-04-2025",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "csk-vs-pbks",
    name: "Live Match 2",
    startTime: "19;00",
    endTime: "23:45",
    streamUrl: streamLink,
    match: {
      team1: "Chennai Super Kings",
      team2: "Punjab Kings",
      date: "30-04-2025",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "rr-vs-mi",
    name: "Live Match 3",
    startTime: "19;00",
    endTime: "23:45",
    streamUrl: streamLink,
    match: {
      team1: "Rajasthan Royals",
      team2: "Mumbai Indians",
      date: "01-05-2025",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "gt-vs-srh",
    name: "Live Match 4",
    startTime: "19:00",
    endTime: "23:45",
    streamUrl: streamLink,
    match: {
      team1: "Gujarat Titans",
      team2: "Sunrisers Hyderabad",
      date: "02-05-2025",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "rcb-vs-csk",
    name: "Live Match 5",
    startTime: "19:00",
    endTime: "23;45",
    streamUrl: streamLink,
    match: {
      team1: "Royal Challengers Bengaluru",
      team2: "Chennai Super Kings",
      date: "03-05-2025",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
];
router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
