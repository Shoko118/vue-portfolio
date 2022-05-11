import { defineStore } from "pinia";
import { MenuAlt1Icon } from "@heroicons/vue/solid";

export const useStore = defineStore("main", {
  state: () => {
    return {
      details: [
        {
          id: 1,
          icon: MenuAlt1Icon,
          title: "The Hacker Collective",
          desc: "Responsive Website",
          heading1: "The Hacker Collective",
          content:
            "In 2021 November, The Hacker Collective offer me an internship as a frontend developer, really love how we communicate as a team with UI/UX and other developers. The Hacker Collective is all about redefining the way things are done & creating new opportunities when others see problems, and armed with the knowledge of software and go on to monetize their skillsets by making an impact in society.",
          p: "Nuxt 3 Tailwind CSS Pinia Vue 3",
          p2: "Nuxt 3 can be optimized for faster performance and better developer experience and other features. Tailwind enables building complex responsive layouts freely and utility classes make it easier to build complex responsive layouts freely. Pinia is a lightweight state management library for Vue.JS, It uses the new reactivity system in Vue 3 to build an intuitive and fully typed state management library.",
          hrefs: "https://hackercollective.co/",
        },
        {
          id: 2,
          icon: MenuAlt1Icon,
          title: "Sigma School",
          desc: "Eduction Platform",
          heading1: "Sigma School",
          content:
            "In 2022 February, Sigma School has reached up to me to build this static website, Sigma School is an education platform where the mission is to bridge the skills gap between employers and employees and redefine the education system. Because students are struggling to get jobs and employers are still struggling to hire good talents.",
          p: "Webflow",
          p2: "Why Webflow is because Webflow lets you finalize projects faster without sacrificing quality. You’ll get initial designs into the hands of your project in days, not weeks. And you’ll be able to implement your clients’ changes with ease, moving the final product closer to launch and decreasing the time between client approval and version iterations.",
          hrefs: "https://sigmaschool.co/",
        },
        {
          id: 3,
          icon: MenuAlt1Icon,
          title: "Movie List App",
          desc: "Web Application",
          heading1: "Movie List App",
          content: "I built movie app 😁",
          p: "Movie apps with fetching API movies.",
          p2: "Builded with typescript, pinia, javascript and vue",
          hrefs: "https://vue-multi-web-app.netlify.app/",
        },
        {
          id: 4,
          icon: MenuAlt1Icon,
          title: "Multi Web Apps",
          desc: "Web Application",
          heading1: "Multi Web Apps",
          content: "I build these 3 web applications in one application.",
          p: " Vue 3 Tailwind CSS",
          p2: "I use Vue 3 to build these 3 web applications to practice my conditional rendering, list rendering, event handling, SFC, two-way data binding, Tailwind CSS, and also Javascript.",
          hrefs: "https://vue-multi-web-app.netlify.app/",
        },
      ],
    };
  },
  actions: {
    getDetailByID(detailID) {
      const detail = this.details.find((detail) => detail.id === detailID);

      if (!detail) throw `No detail found with this id ${detailID}`;

      return detail;
    },
  },
});
