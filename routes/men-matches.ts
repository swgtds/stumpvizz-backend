import { Router } from "express";

const router = Router();
const streamLink = "https://userrr4591.ifrem.net/iframe/frame.php"; 

// date in yyyy-mm-dd format

const menMatches = [
  {
    id: "lsg-vs-rcb",
    name: "Live Match 1",
    startTime: "19:00",
    endTime: "23:30",
    streamUrl: streamLink,
    match: {
      team1: "Lucknow Super Giants",
      team2: "Royal Challengers Bengaluru",
      date: "2025-05-09",      
      thumbnail: "https://www.hindustantimes.com/ht-img/img/2025/02/16/550x309/ipl-trophy-new-new_1651582336209_1739699060567.jpg",
      
    },
  },
  /*
  {
    id: "",
    name: "",
    startTime: "",
    endTime: "",
    streamUrl: streamLink,
    match: {
      team1: "",
      team2: "",
      date: "",      
      thumbnail: "https://www.hindustantimes.com/ht-img/img/2025/02/16/550x309/ipl-trophy-new-new_1651582336209_1739699060567.jpg",
      
    },
  },
  https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/492036964_1063352119156657_8608233938897983591_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=i8qLCsBHU8oQ7kNvwGEdwlT&_nc_oc=AdmgR3CbCR4wq1zG0SDTA1mSjlGEZ4yyj6nqiY4NX0kuwPgTJ8RULP9QVWH_DH9D7cQ&_nc_zt=23&_nc_ht=scontent.fccu10-1.fna&_nc_gid=VAydXJwNF0oyfrf78bmxIw&oh=00_AfFhW-zA2zPkzTkDZxk8HBXs-XQSdIJmyIzjCncnUWalew&oe=68164CAA
  
  {
    id: "lsg-vs-rcb",
    name: "Live Match 1",
    startTime: "",
    endTime: "",
    streamUrl: streamLink,
    match: {
      team1: "Lucknow Super Giants",
      team2: "Royal Challengers Bengaluru",
      date: "",      
      thumbnail: "https://www.hindustantimes.com/ht-img/img/2025/02/16/550x309/ipl-trophy-new-new_1651582336209_1739699060567.jpg",
      
    },
  },
  {
    id: "srh-vs-kkr",
    name: "Live Match 2",
    startTime: "",
    endTime: "",
    streamUrl: streamLink,
    match: {
      team1: "Sunrisers Hyderabad",
      team2: "Kolkata Knight Riders",
      date: "",      
      thumbnail: "https://www.hindustantimes.com/ht-img/img/2025/02/16/550x309/ipl-trophy-new-new_1651582336209_1739699060567.jpg",
      
    },
  },
  {
    id: "pbks-vs-mi",
    name: "Live Match 3",
    startTime: "",
    endTime: "",
    streamUrl: streamLink,
    match: {
      team1: "Punjab Kings",
      team2: "Mumbai Indians",
      date: "",      
      thumbnail: "https://www.hindustantimes.com/ht-img/img/2025/02/16/550x309/ipl-trophy-new-new_1651582336209_1739699060567.jpg",
      
    },
  },
  {
    id: "dc-vs-gt",
    name: "Live Match 4",
    startTime: "",
    endTime: "",
    streamUrl: streamLink,
    match: {
      team1: "Delhi Capitals",
      team2: "Gujarat Titans",
      date: "",      
      thumbnail: "https://www.hindustantimes.com/ht-img/img/2025/02/16/550x309/ipl-trophy-new-new_1651582336209_1739699060567.jpg",
      
    },
  },
  {
    id: "csk-vs-rr",
    name: "Live Match 5",
    startTime: "",
    endTime: "",
    streamUrl: streamLink,
    match: {
      team1: "Chennai Super Kings",
      team2: "Rajasthan Royals",
      date: "2025-05-12",      
      thumbnail: "https://www.hindustantimes.com/ht-img/img/2025/02/16/550x309/ipl-trophy-new-new_1651582336209_1739699060567.jpg",
      
    },
  },
  */
];
router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
