import { Router } from "express";

const router = Router();

const menMatches = [
  {
    id: "ind-vs-aus",
    name: "Live Match 1",
    startTime: "14:15",
    endTime: "23:00",
    streamUrl: "/videos/criclife.html",
    match: {
      team1: "India",
      team2: "Australia(SF-1)",
      date: "2025-03-04",
      thumbnail: "https://thesportsprince.com/wp-content/uploads/2024/12/7-2.webphttps://thesportsprince.com/wp-content/uploads/2024/12/7-2.webp",
    },
  },
  {
    id: "sa-vs-nz",
    name: "Live Match 2",
    startTime: "14:15",
    endTime: "23:00",
    streamUrl: "/videos/criclife.html",
    match: {
      team1: "South Africa",
      team2: "New Zealand(SF-2)",
      date: "2025-03-05",
      thumbnail: "https://thesportsprince.com/wp-content/uploads/2024/12/7-2.webp",
    },
  },
];
router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
