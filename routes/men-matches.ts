import { Router } from "express";

const router = Router();
const streamLink = "https://webplayer-live.pages.dev/?url=https://prod-ent-live-gm.jiocinema.com/bpk-tv/JS_M1_IPL25_ENG_IDC_MOB/Fallback/index.m3u8"; 

const menMatches = [
  {
    id: "csk-vs-kkr",
    name: "Live Match 1",
    startTime: "19:00",
    endTime: "23:30",
    streamUrl: streamLink,
    match: {
      team1: "Chennai Super Kings",
      team2: "Kolkata Knight Riders",
      date: "2025-04-11",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
];
router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
