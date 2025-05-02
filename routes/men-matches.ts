import { Router } from "express";

const router = Router();
const streamLink = "https://userrr4591.ifrem.net/iframe/frame.php"; 

// date in yyyy-mm-dd format

const menMatches = [
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
  */
  {
    id: "dc-vs-kkr",
    name: "Live Match 1",
    startTime: "19:00",
    endTime: "23:45",
    streamUrl: streamLink,
    match: {
      team1: "Delhi Capitals",
      team2: "Kolkata Knight Riders",
      date: "2025-04-29",
      thumbnail: "https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/492036964_1063352119156657_8608233938897983591_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=i8qLCsBHU8oQ7kNvwGEdwlT&_nc_oc=AdmgR3CbCR4wq1zG0SDTA1mSjlGEZ4yyj6nqiY4NX0kuwPgTJ8RULP9QVWH_DH9D7cQ&_nc_zt=23&_nc_ht=scontent.fccu10-1.fna&_nc_gid=VAydXJwNF0oyfrf78bmxIw&oh=00_AfFhW-zA2zPkzTkDZxk8HBXs-XQSdIJmyIzjCncnUWalew&oe=68164CAA",
    },
  },
  {
    id: "csk-vs-pbks",
    name: "Live Match 2",
    startTime: "19:00",
    endTime: "23:45",
    streamUrl: streamLink,
    match: {
      team1: "Chennai Super Kings",
      team2: "Punjab Kings",
      date: "2025-04-30",
      thumbnail: "https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/492036964_1063352119156657_8608233938897983591_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=i8qLCsBHU8oQ7kNvwGEdwlT&_nc_oc=AdmgR3CbCR4wq1zG0SDTA1mSjlGEZ4yyj6nqiY4NX0kuwPgTJ8RULP9QVWH_DH9D7cQ&_nc_zt=23&_nc_ht=scontent.fccu10-1.fna&_nc_gid=VAydXJwNF0oyfrf78bmxIw&oh=00_AfFhW-zA2zPkzTkDZxk8HBXs-XQSdIJmyIzjCncnUWalew&oe=68164CAA",
    },
  },
  {
    id: "rr-vs-mi",
    name: "Live Match 3",
    startTime: "19:00",
    endTime: "23:45",
    streamUrl: streamLink,
    match: {
      team1: "Rajasthan Royals",
      team2: "Mumbai Indians",
      date: "2025-05-01",
      thumbnail: "https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/492036964_1063352119156657_8608233938897983591_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=i8qLCsBHU8oQ7kNvwGEdwlT&_nc_oc=AdmgR3CbCR4wq1zG0SDTA1mSjlGEZ4yyj6nqiY4NX0kuwPgTJ8RULP9QVWH_DH9D7cQ&_nc_zt=23&_nc_ht=scontent.fccu10-1.fna&_nc_gid=VAydXJwNF0oyfrf78bmxIw&oh=00_AfFhW-zA2zPkzTkDZxk8HBXs-XQSdIJmyIzjCncnUWalew&oe=68164CAA",
    },
  },
  {
    id: "gt-vs-srh",
    name: "Live Match 4",
    startTime: "19:00",
    endTime: "23:45",
    streamUrl: streamLink,
    match: {
      team1: "Gujarat Titans",
      team2: "Sunrisers Hyderabad",
      date: "2025-05-02",
      thumbnail: "https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/492036964_1063352119156657_8608233938897983591_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=i8qLCsBHU8oQ7kNvwGEdwlT&_nc_oc=AdmgR3CbCR4wq1zG0SDTA1mSjlGEZ4yyj6nqiY4NX0kuwPgTJ8RULP9QVWH_DH9D7cQ&_nc_zt=23&_nc_ht=scontent.fccu10-1.fna&_nc_gid=VAydXJwNF0oyfrf78bmxIw&oh=00_AfFhW-zA2zPkzTkDZxk8HBXs-XQSdIJmyIzjCncnUWalew&oe=68164CAA",
    },
  },
  {
    id: "rcb-vs-csk",
    name: "Live Match 5",
    startTime: "19:00",
    endTime: "23:45",
    streamUrl: streamLink,
    match: {
      team1: "Royal Challengers Bengaluru",
      team2: "Chennai Super Kings",
      date: "2025-05-03",
      thumbnail: "https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/492036964_1063352119156657_8608233938897983591_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=i8qLCsBHU8oQ7kNvwGEdwlT&_nc_oc=AdmgR3CbCR4wq1zG0SDTA1mSjlGEZ4yyj6nqiY4NX0kuwPgTJ8RULP9QVWH_DH9D7cQ&_nc_zt=23&_nc_ht=scontent.fccu10-1.fna&_nc_gid=VAydXJwNF0oyfrf78bmxIw&oh=00_AfFhW-zA2zPkzTkDZxk8HBXs-XQSdIJmyIzjCncnUWalew&oe=68164CAA",
    },
  },
];
router.get("/", (req, res) => {
  res.json(menMatches);
});

export default router;
