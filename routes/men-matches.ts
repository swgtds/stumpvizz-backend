import { Router } from "express";

const router = Router();

const menMatches = [
  {
    id: "ind-vs-nz",
    name: "Live Match 1",
    startTime: "14:15",
    endTime: "23:30",
    streamUrl: "/videos/jiostar.html",
    match: {
      team1: "India",
      team2: "New Zealand",
      date: "2025-03-02",
      thumbnail: "https://thesportsprince.com/wp-content/uploads/2024/12/7-2.webp",
    },
  },
];
router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
