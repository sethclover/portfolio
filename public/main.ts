/// <reference lib="dom" />

import { Profile } from "../src/types.ts";

async function loadProfile() {
  const response = await fetch("/api/profile");
  const profile: Profile = await response.json();

  (document.getElementById("name") as HTMLElement).textContent = profile.name;
  (document.getElementById("bio") as HTMLElement).textContent = profile.bio;
  (document.getElementById("about-bio") as HTMLElement).textContent =
    profile.bio;

  const skillsList = document.getElementById("skills") as HTMLUListElement;
  profile.skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  const expList = document.getElementById("experience-list") as HTMLDivElement;
  profile.experiences.forEach((exp) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${exp.title} at ${exp.company}</h3>
      <p><em>${exp.period}</em></p>
      <p>${exp.description}</p>
    `;
    expList.appendChild(div);
  });

  const emailLink = document.getElementById(
    "contact-email",
  ) as HTMLAnchorElement;
  emailLink.href = `mailto:${profile.contactEmail}`;
  emailLink.textContent = profile.contactEmail;
}

loadProfile();
