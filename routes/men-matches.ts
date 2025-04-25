import { Router } from "express";

const router = Router();
const streamLink = "https://user4580.ifrem.net/iframe/frame.php"; 

const menMatches = [
  {
    id: "csk-vs-srh",
    name: "Live Match 1",
    startTime: "19:15",
    endTime: "23:30",
    streamUrl: streamLink,
    match: {
      team1: "Chennai Super Kings",
      team2: "Sunrisers Hyderabad",
      date: "2025-04-25",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "kkr-vs-pbks",
    name: "Live Match 2",
    startTime: "19:15",
    endTime: "23:30",
    streamUrl: streamLink,
    match: {
      team1: "Kolkata Knight Riders ",
      team2: "Punjab Kings",
      date: "2025-04-26",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "mi-vs-lsg",
    name: "Live Match 3",
    startTime: "15:30",
    endTime: "19:20",
    streamUrl: streamLink,
    match: {
      team1: "Mumbai Indians",
      team2: "Lucknow Super Giants",
      date: "2025-04-27",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "dc-vs-rcb",
    name: "Live Match 4",
    startTime: "19:20",
    endTime: "23:30",
    streamUrl: streamLink,
    match: {
      team1: "Delhi Capitals",
      team2: "Royal Challengers Bengaluru",
      date: "2025-04-27",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "rr-vs-gt",
    name: "Live Match 5",
    startTime: "19:15",
    endTime: "23:30",
    streamUrl: streamLink,
    match: {
      team1: "Rajasthan Royals",
      team2: "Gujarat Titans",
      date: "2025-04-28",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
];
router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
