import express from "express";

const router = express.Router();

const womenMatches = [
  {
    id: "upw-w-vs-dc-w",
    name: "Women's Match 1",
    startTime: "19:30",
    endTime: "23:00",
    streamUrl: "/videos/star-sports-1.html",
    match: {
      team1: "UP Warrriorz",
      team2: "Delhi Capitals",
      date: "2025-02-22",
      thumbnail: "https://bsmedia.business-standard.com/_media/bs/img/article/2025-01/17/full/1737096327-3013.jpg?im=FeatureCrop,size=(826,465)",
    },
  },
  {
    id: "rcb-w-v-upw-w",
    name: "Women's Match 2",
    startTime: "19:30",
    endTime: "23:55",
    streamUrl: "/videos/fox-cricket.html",
    match: {
      team1: "Royal Challengers Bangalore",
      team2: "UP Warriorz",
      date: "2025-02-24",
      thumbnail: "https://bsmedia.business-standard.com/_media/bs/img/article/2025-01/17/full/1737096327-3013.jpg?im=FeatureCrop,size=(826,465)",
    },
  },
  {
    id: "dc-w-vs-gg-w",
    name: "Women's Match 3",
    startTime: "19:30",
    endTime: "23:00",
    streamUrl: "/videos/star-sports-1.html",
    match: {
      team1: "Delhi Capitals",
      team2: "Gujarat Giant",
      date: "2025-02-25",
      thumbnail: "https://bsmedia.business-standard.com/_media/bs/img/article/2025-01/17/full/1737096327-3013.jpg?im=FeatureCrop,size=(826,465)",
    },
  },
  {
    id: "upw-w-vs-mi-w",
    name: "Women's Match 4",
    startTime: "19:30",
    endTime: "23:00",
    streamUrl: "/videos/star-sports-1.html",
    match: {
      team1: "UP Warriorz",
      team2: "Mumbai Indians",
      date: "2025-02-26",
      thumbnail: "https://bsmedia.business-standard.com/_media/bs/img/article/2025-01/17/full/1737096327-3013.jpg?im=FeatureCrop,size=(826,465)",
    },
  },
  {
    id: "rcb-w-vs-gg-w",
    name: "Women's Match 5",
    startTime: "19:30",
    endTime: "23:00",
    streamUrl: "/videos/star-sports-1.html",
    match: {
      team1: "Royal Challengers Bangalore",
      team2: "Gujarat Giants",
      date: "2025-02-27",
      thumbnail: "https://bsmedia.business-standard.com/_media/bs/img/article/2025-01/17/full/1737096327-3013.jpg?im=FeatureCrop,size=(826,465)",
    },
  },
];

// API to fetch all women's matches
router.get("/", (req, res) => {
  res.json(womenMatches);
});

export default router;
