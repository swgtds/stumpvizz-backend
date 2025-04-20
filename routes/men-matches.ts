import { Router } from "express";

const router = Router();
const streamLink = "https://user4580.ifrem.net/iframe/frame.php"; 

const menMatches = [
  {
    id: "pbks-vs-rcb",
    name: "Live Match 1",
    startTime: "14:30",
    endTime: "19:20",
    streamUrl: streamLink,
    match: {
      team1: "Punjab Kings",
      team2: "Royal Challengers Bangalore",
      date: "2025-04-20",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "csk-vs-mi",
    name: "Live Match 1",
    startTime: "19:20",
    endTime: "23:30",
    streamUrl: streamLink,
    match: {
      team1: "Chennai Super Kings",
      team2: "Mumbai Indians",
      date: "2025-04-20",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "kkr-vs-gt",
    name: "Live Match 1",
    startTime: "19:20",
    endTime: "23:30",
    streamUrl: streamLink,
    match: {
      team1: "Kolkata Knight Riders",
      team2: "Gujarat Titans",
      date: "2025-04-21",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "lsg-vgs-dc",
    name: "Live Match 1",
    startTime: "19:20",
    endTime: "23:30",
    streamUrl: streamLink,
    match: {
      team1: "Lucknow Super Giants",
      team2: "Delhi Capitals",
      date: "2025-04-22",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "srh-vs-mi",
    name: "Live Match 1",
    startTime: "19:20",
    endTime: "23:30",
    streamUrl: streamLink,
    match: {
      team1: "Sunrisers Hyderabad",
      team2: "Mumbai Indians",
      date: "2025-04-23",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
];
router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
