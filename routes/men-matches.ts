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
      thumbnail: "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Findia-vs-australia-ct-2025-semi-final-v0-dxnpj0vtwame1.jpeg%3Fwidth%3D1080%26crop%3Dsmart%26auto%3Dwebp%26s%3D56e3bd960d439d518d933694fc9469329d78fc01",
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
