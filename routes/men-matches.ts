import { Router } from "express";

const router = Router();

const menMatches = [
  {
    id: "mi-vs-kkr",
    name: "Live Match 1",
    startTime: "18:30",
    endTime: "23:30",
    streamUrl: "/videos/willow-cricket-1.html",
    match: {
      team1: "Mumbai Indians",
      team2: "Kolkata Knight Riders",
      date: "2025-03-31",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
];
router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
