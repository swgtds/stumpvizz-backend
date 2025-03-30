import { Router } from "express";

const router = Router();

const menMatches = [
 
  
  
  
  
  
  {
    id: "gt-vs-mi",
    name: "Live Match 8",
    startTime: "18:30",
    endTime: "23:30",
    streamUrl: "/videos/t-sports.html",
    match: {
      team1: "Gujarat Titans",
      team2: "Mumbai Indians",
      date: "2025-03-29",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "rr-vs-csk",
    name: "Live Match 10",
    startTime: "18:30",
    endTime: "23:30",
    streamUrl: "/videos/t-sports.html",
    match: {
      team1: "Rajasthan Royals",
      team2: "Chennai Super Kings",
      date: "2025-03-30",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "mi-vs-kkr",
    name: "Live Match 11",
    startTime: "18:30",
    endTime: "23:30",
    streamUrl: "/videos/t-sports.html",
    match: {
      team1: "Mumbai Indians",
      team2: "Kolkata Knight Riders",
      date: "2025-03-31",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "lsg-vs-pbks",
    name: "Live Match 12",
    startTime: "18:30",
    endTime: "23:30",
    streamUrl: "/videos/t-sports.html",
    match: {
      team1: "Lucknow Super Giants",
      team2: "Punjab Kings",
      date: "2025-04-1",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "rcb-vs-gt",
    name: "Live Match 13",
    startTime: "18:30",
    endTime: "23:30",
    streamUrl: "/videos/t-sports.html",
    match: {
      team1: "Royal Challengers Bangalore",
      team2: "Gujrat Titans",
      date: "2025-04-2",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "kkr-vs-srh",
    name: "Live Match 14",
    startTime: "18:30",
    endTime: "23:30",
    streamUrl: "/videos/t-sports.html",
    match: {
      team1: "Kolkata Knight Riders",
      team2: "Sunrisers Hyderabad",
      date: "2025-04-3",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "lsg-vs-mi",
    name: "Live Match 15",
    startTime: "18:30",
    endTime: "23:30",
    streamUrl: "/videos/t-sports.html",
    match: {
      team1: "Lucknow Super Giants",
      team2: "Mumbai Indians",
      date: "2025-04-4",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "lsg-vs-mi",
    name: "Live Match 15",
    startTime: "18:30",
    endTime: "23:30",
    streamUrl: "/videos/t-sports.html",
    match: {
      team1: "Lucknow Super Giants",
      team2: "Mumbai Indians",
      date: "2025-04-4",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
  {
    id: "csk-vs-dc",
    name: "Live Match 16",
    startTime: "18:30",
    endTime: "23:30",
    streamUrl: "/videos/t-sports.html",
    match: {
      team1: "Chennai Super Kings",
      team2: "Delhi Capitals",
      date: "2025-04-5",
      thumbnail: "https://www.fantasyarena.in/images/1644927202_ipl.jpg",
    },
  },
];
router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
