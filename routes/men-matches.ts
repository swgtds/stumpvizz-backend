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
];
router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
