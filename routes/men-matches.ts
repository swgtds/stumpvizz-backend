import { Router } from "express";

const router = Router();

const menMatches = [
  {
    id: "ind-vs-sa",
    name: "Live Match 1",
    startTime: "14:00",
    endTime: "23:00",
    streamUrl: "/videos/prime.html",
    match: {
      team1: "India",
      team2: "New Zealand(Final)",
      date: "2025-03-09",
      thumbnail: "https://img.jagranjosh.com/images/2025/March/532025/ind-vs-nz-icc-champions-trophy-2025.webp",
    },
  },
];
router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
