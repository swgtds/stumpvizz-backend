import { Router } from "express";

const router = Router();

const menMatches = [
  {
    id: "srh-vs-dc",
    name: "Live Match 1",
    startTime: "13:30",
    endTime: "19:15",
    streamUrl: "/videos/ipl-2025.html",
    match: {
      team1: "Sunrisers Hyderabad",
      team2: "Delhi Capitals",
      date: "2025-03-30",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "rr-vs-csk",
    name: "Live Match 2",
    startTime: "19:00",
    endTime: "23:45",
    streamUrl: "/videos/ipl-2025.html",
    match: {
      team1: "Rajasthan Royals",
      team2: "Chennai Super Kings",
      date: "2025-03-30",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
];
router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
