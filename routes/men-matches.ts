import { Router } from "express";

const router = Router();

const menMatches = [
  {
    id: "dc-vs-lsg",
    name: "Live Match 3",
    startTime: "18:30",
    endTime: "23:30",
    streamUrl: "/videos/ipl-2025.html",
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
    streamUrl: "/videos/ipl-2025.html",
    match: {
      team1: "Gujarat Titans",
      team2: "punjab Kings",
      date: "2025-03-25",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "rr-vs-kkr",
    name: "Live Match 5",
    startTime: "18:30",
    endTime: "23:30",
    streamUrl: "/videos/ipl-2025.html",
    match: {
      team1: "Rajasthan Royals",
      team2: "Kolkata Knight Riders",
      date: "2025-03-26",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "srh-vs-lsg",
    name: "Live Match 6",
    startTime: "18:30",
    endTime: "23:30",
    streamUrl: "/videos/ipl-2025.html",
    match: {
      team1: "Sunrisers Hyderabad",
      team2: "Lucknow Super Giants",
      date: "2025-03-27",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "csk-vs-rcb",
    name: "Live Match 7",
    startTime: "18:30",
    endTime: "19:15",
    streamUrl: "/videos/ipl-2025.html",
    match: {
      team1: "Chennai Super Kings",
      team2: "Royal Cengers Bangalore",
      date: "2025-03-28",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "gt-vs-mi",
    name: "Live Match 8",
    startTime: "18:30",
    endTime: "23:30",
    streamUrl: "/videos/ipl-2025.html",
    match: {
      team1: "Gujarat Titans",
      team2: "Mumbai Indians",
      date: "2025-03-29",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
];
router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
