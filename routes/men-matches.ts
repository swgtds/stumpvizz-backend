import { Router } from "express";

const router = Router();

const menMatches = [
  {
    id: "mi-vs-kkr",
    name: "Live Match 1",
    startTime: "18:00",
    endTime: "23:30",
    streamUrl: "https://webplayer-live.pages.dev/?url=https://live.tsports.com/mobile_hls/tsports_live_2/playlist.m3u8",
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
