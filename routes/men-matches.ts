import { Router } from "express";

const router = Router();

const menMatches = [
  {
    id: "srh-vs-rr",
    name: "Live Match 1",
    startTime: "14:00",
    endTime: "18:30",
    streamUrl: "/videos/t-sports.html",
    match: {
      team1: "Sunrisers Hyderabad",
      team2: "Rajasthan Royals",
      date: "2025-03-23",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "csk-vs-mi",
    name: "Live Match 2",
    startTime: "19:00",
    endTime: "23:30",
    streamUrl: "/videos/t-sports.html",
    match: {
      team1: "Chennai Super Kings",
      team2: "Mumbai Indians",
      date: "2025-03-23",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "dc-vs-lsg",
    name: "Live Match 3",
    startTime: "18:30",
    endTime: "23:30",
    streamUrl: "/videos/t-sports.html",
    match: {
      team1: "Delhi Capitals",
      team2: "Lucknow Super Giants",
      date: "2025-03-24",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "gt-vs-pbks",
    name: "Live Match 4",
    startTime: "18:30",
    endTime: "23:30",
    streamUrl: "/videos/t-sports.html",
    match: {
      team1: "Gujarat Titans",
      team2: "punjab Kings",
      date: "2025-03-25",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
];
router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
