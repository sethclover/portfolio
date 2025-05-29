import { Router } from "oak";
import { Profile } from "./types.ts";

const router = new Router();

const profile: Profile = {
  name: "Seth Clover",
  bio: "Software Engineering and Philosophy student at Iowa State University.",
  skills: [
    "C++",
    "C",
    "JavaScript",
    "TypeScript",
    "Java",
  ],
  experiences: [
    {
      title: "blah",
      company: "blah",
      period: "blah",
      description: "blah",
    },
    {
      title: "blah",
      company: "blah",
      period: "blah",
      description: "blah",
    },
  ],
  contactEmail: "sclover@iastate.edu",
};

router.get("/", (context) => {
  context.response.redirect("/index.html");
});

router.get("/api/profile", (context) => {
  context.response.body = profile;
  context.response.type = "application/json";
});

export default router;
