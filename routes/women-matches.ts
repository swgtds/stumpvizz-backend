import express from "express";

const router = express.Router();

const womenMatches = [
  {
    id: "rcb-w-vs-dc-w",
    name: "Women's Match 1",
    startTime: "19:30",
    endTime: "23:00",
    streamUrl: "/videos/willow-sports.html",
    match: {
      team1: "Royal Challengers Bangalore",
      team2: "Delhi Capitals",
      date: "2025-03-01",
      thumbnail: "https://bsmedia.business-standard.com/_media/bs/img/article/2025-01/17/full/1737096327-3013.jpg?im=FeatureCrop,size=(826,465)",
    },
  },
  {
    id: "gg-w-v-upw-w",
    name: "Women's Match 2",
    startTime: "19:30",
    endTime: "23:00",
    streamUrl: "/videos/willow-sports.html",
    match: {
      team1: "Gujarat Giants",
      team2: "UP Warriorz",
      date: "2025-03-03",
      thumbnail: "https://bsmedia.business-standard.com/_media/bs/img/article/2025-01/17/full/1737096327-3013.jpg?im=FeatureCrop,size=(826,465)",
    },
  },
  {
    id: "upw-w-vs-mi-w",
    name: "Women's Match 3",
    startTime: "19:30",
    endTime: "23:00",
    streamUrl: "/videos/willow-sports.html",
    match: {
      team1: "UP Warriorz",
      team2: "Mumbai Indians",
      date: "2025-03-06",
      thumbnail: "https://bsmedia.business-standard.com/_media/bs/img/article/2025-01/17/full/1737096327-3013.jpg?im=FeatureCrop,size=(826,465)",
    },
  },
  {
    id: "gg-w-vs-dc-w",
    name: "Women's Match 4",
    startTime: "19:30",
    endTime: "23:00",
    streamUrl: "/videos/willow-sports.html",
    match: {
      team1: "Gujarat Giants",
      team2: "Delhi Capitals",
      date: "2025-03-07",
      thumbnail: "https://bsmedia.business-standard.com/_media/bs/img/article/2025-01/17/full/1737096327-3013.jpg?im=FeatureCrop,size=(826,465)",
    },
  },
  {
    id: "rcb-w-vs-upw-w",
    name: "Women's Match 5",
    startTime: "19:30",
    endTime: "23:00",
    streamUrl: "/videos/willow-sports.html",
    match: {
      team1: "Royal Challengers Bangalore",
      team2: "UP Warriorz",
      date: "2025-03-07",
      thumbnail: "https://bsmedia.business-standard.com/_media/bs/img/article/2025-01/17/full/1737096327-3013.jpg?im=FeatureCrop,size=(826,465)",
    },
  },
];

// API to fetch all women's matches
router.get("/", (req, res) => {
  res.json(womenMatches);
});

export default router;
