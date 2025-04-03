import { Router } from "express";

const router = Router();
const streamLink = "https://webplayer-live.pages.dev/?url=https://ee4ee8c03a26.eu-central-1.playback.live-video.net/api/video/v1/eu-central-1.755921704393.channel.LOohfipmCQDP.m3u8"; 

const menMatches = [
  {
    id: "kkr-vs-srh",
    name: "Live Match 1",
    startTime: "18:00",
    endTime: "23:30",
    streamUrl: streamLink,
    match: {
      team1: "Kolkata Knight Riders",
      team2: "Sunrisers Hyderabad",
      date: "2025-04-03",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
];
router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
