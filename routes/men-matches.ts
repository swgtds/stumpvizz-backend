import { Router } from "express";

const router = Router();

const menMatches = [
  {
    id: "ban-vs-nz",
    name: "Live Match 1",
    startTime: "14:15",
    endTime: "22:30",
    streamUrl: "/videos/prime.html",
    match: {
      team1: "Bangldesh",
      team2: "New Zealand",
      date: "2025-02-24",
      thumbnail: "https://thesportsprince.com/wp-content/uploads/2024/12/7-2.webp",
    },
  },
  {
    id: "aus-vs-sa",
    name: "Live Match 2",
    startTime: "14:15",
    endTime: "22:30",
    streamUrl: "/videos/prime.html",
    match: {
      team1: "Australia",
      team2: "South Africa",
      date: "2025-02-25",
      thumbnail: "https://thesportsprince.com/wp-content/uploads/2024/12/7-2.webp",
    },
  },
  {
    id: "afg-vs-eng",
    name: "Live Match 3",
    startTime: "14:15",
    endTime: "22:30",
    streamUrl: "/videos/prime.html",
    match: {
      team1: "Afghanistan",
      team2: "South Africa",
      date: "2025-02-26",
      thumbnail: "https://thesportsprince.com/wp-content/uploads/2024/12/7-2.webp",
    },
  },
  {
    id: "pak-vs-ban",
    name: "Live Match 4",
    startTime: "14:15",
    endTime: "22:30",
    streamUrl: "/videos/prime.html",
    match: {
      team1: "Pakistan",
      team2: "Bangladesh",
      date: "2025-02-27",
      thumbnail: "https://thesportsprince.com/wp-content/uploads/2024/12/7-2.webp",
    },
  },
  {
    id: "afg-vs-aus",
    name: "Live Match 5",
    startTime: "14:15",
    endTime: "22:30",
    streamUrl: "/videos/prime.html",
    match: {
      team1: "Afghanistan",
      team2: "Australia",
      date: "2025-02-28",
      thumbnail: "https://thesportsprince.com/wp-content/uploads/2024/12/7-2.webp",
    },
  },
];

router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
