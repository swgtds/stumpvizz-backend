import { Router } from "express";

const router = Router();
const streamLink = "/videos/willow-cricket-1.html"; 

const menMatches = [
  {
    id: "rcb-vs-gt",
    name: "Live Match 1",
    startTime: "18:00",
    endTime: "23:30",
    streamUrl: streamLink,
    match: {
      team1: "Royal Challengers Bangalore",
      team2: "Gujarat Titans",
      date: "2025-04-02",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
];
router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
