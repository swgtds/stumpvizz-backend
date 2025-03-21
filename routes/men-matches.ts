import { Router } from "express";

const router = Router();

const menMatches = [
  {
    id: "kkr-vs-rcb",
    name: "Live Match 1",
    startTime: "18:00",
    endTime: "23:30",
    streamUrl: "/videos/willow-sports.html",
    match: {
      team1: "Kolkata Knight Riders",
      team2: "Royal Challengers Bangalore",
      date: "2025-03-22",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
];
router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
