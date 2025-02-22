import { Router } from "express";

const router = Router();

const menMatches = [
  {
    id: "pak-vs-nz",
    name: "Live Match 1",
    startTime: "14:30",
    endTime: "23:00",
    streamUrl: "/videos/prime.html",
    match: {
      team1: "Pakistan",
      team2: "New Zealand",
      date: "2025-02-19",
      thumbnail: "https://thesportsprince.com/wp-content/uploads/2024/12/7-2.webp",
    },
  },
  {
    id: "ind-vs-ban",
    name: "Live Match 2",
    startTime: "14:30",
    endTime: "23:00",
    streamUrl: "/videos/prime.html",
    match: {
      team1: "India",
      team2: "Bangladesh",
      date: "2025-02-20",
      thumbnail: "https://thesportsprince.com/wp-content/uploads/2024/12/7-2.webp",
    },
  },
  {
    id: "afg-vs-sa",
    name: "Live Match 3",
    startTime: "14:30",
    endTime: "23:00",
    streamUrl: "/videos/prime.html",
    match: {
      team1: "Afghanistan",
      team2: "South Africa",
      date: "2025-02-21",
      thumbnail: "https://thesportsprince.com/wp-content/uploads/2024/12/7-2.webp",
    },
  },
  {
    id: "aus-vs-eng",
    name: "Live Match 4",
    startTime: "14:30",
    endTime: "23:00",
    streamUrl: "/videos/prime.html",
    match: {
      team1: "Australia",
      team2: "England",
      date: "2025-02-22",
      thumbnail: "https://thesportsprince.com/wp-content/uploads/2024/12/7-2.webp",
    },
  },
  {
    id: "ind-vs-pak",
    name: "Live Match 5",
    startTime: "14:20",
    endTime: "23:00",
    streamUrl: "/videos/prime.html",
    match: {
      team1: "India",
      team2: "Pakistan",
      date: "2025-02-23",
      thumbnail: "https://thesportsprince.com/wp-content/uploads/2024/12/7-2.webp",
    },
  },
];

router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
