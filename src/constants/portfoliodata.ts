const portfoliodata = {
  companies: {
    freshworks: {
      info: [
        { title: "company", subtitle: "Freshworks" },
        { title: "position", subtitle: "Software Engineer" },
        { title: "duration", subtitle: "JUL 2018 - MAR 2021" },
        { title: "location", subtitle: "Chennai" },
        { title: "experience", subtitle: "2 years 10 months" },
      ],
      traits: [
        { title: "web performance", id: "webperformance" },
        { title: "mentorship", id: "mentor" },
        { title: "deployments", id: "deployment" },
        { title: "debugging", id: "debugging" },
      ],
      skills: [
        {
          id: "html",
          progress: 90,
          title: "HTML",
        },
        {
          id: "css",
          progress: 80,
          title: "CSS",
        },
        {
          id: "javascript",
          progress: 70,
          title: "Javascript",
        },
        {
          id: "scss",
          progress: 70,
          title: "Scss",
        },
        {
          id: "ember",
          progress: 60,
          title: "Ember",
        },
        {
          id: "java",
          progress: 35,
          title: "Java",
        },
        {
          id: "nodejs",
          progress: 20,
          title: "Nodejs",
        },
        {
          id: "react",
          progress: 20,
          title: "React",
        },
        {
          id: "psql",
          progress: 20,
          title: "PostgreSql",
        },
        {
          id: "jenkins",
          progress: 40,
          title: "PostgreSql",
        },
        {
          id: "redis",
          progress: 20,
          title: "Redis",
        },
      ],
      experience: [
        "Implemented offline hours experience feature with automatic messages deflecting conversations based on business hours supporting various user time zones with feature adoption more than 1500 customers within month",
        "Designed Google calendar integration with Freshchat allowing users to schedule meetings in agent's Google calendar via chat messages in Ember.js and the Google calendar API with 100% code coverage.",
        "Improved Web performance by reducing rendering time for rendering 40 messages from 5 seconds to 1.4 seconds and minimizing resources",
        "Reduced number of API calls from 5 to 1 by in-viewport lazy loading and improving overall component render performance by 50%",
      ],
    },
    flipkart: {
      info: [
        { title: "company", subtitle: "Flipkart" },
        { title: "position", subtitle: "Senior Frontend Engineer" },
        { title: "duration", subtitle: "March 2021- August 2021" },
        { title: "location", subtitle: "Bengaluru, India" },
        { title: "experience", subtitle: "1 years 6 months" },
      ],
      skills: [
        {
          id: "react",
          progress: 80,
          title: "React",
        },
        {
          id: "nodejs",
          progress: 90,
          title: "Node.js",
        },
        {
          id: "webpack",
          progress: 80,
          title: "Webpack",
        },
        {
          id: "redux",
          progress: 80,
          title: "Redux",
        },
        {
          id: "storybook",
          progress: 70,
          title: "Storybook",
        },
        {
          id: "javascript",
          progress: 70,
          title: "Javascript",
        },
        {
          id: "docker",
          progress: 30,
          title: "Docker",
        },
        {
          id: "electron",
          progress: 40,
          title: "Docker",
        },
        {
          id: "kubernetes",
          progress: 20,
          title: "Kubernetes",
        },
        {
          id: "reactnative",
          progress: 60,
          title: "React Native",
        },
        {
          id: "html",
          progress: 90,
          title: "HTML",
        },
        {
          id: "css",
          progress: 90,
          title: "CSS",
        },
      ],
      traits: [
        { title: "interviewing Candidates", id: "interview" },
        { title: "onboarding Engineers", id: "mentor" },
        { title: "UI Infrastrcture", id: "infrastructure" },
      ],
      experience: [
        "Revamped EMI page in React Native for mobile app and React.js for mobile site, desktop site and mobile app with advance filtering and recommendations based on saved cards increasing EMI plan adoption.",
        "Credit Node revamp with React.js with server-controlled UI for Flipkart Financial products with increase in product visibility and user traffic resulting in 15% user adoption for Flipkart credit card and lending products.",
        "Migrated Flipkart Financial Frontend Node.js server from VM to Kubernetes in production and stage environments saving cloud costs.",
        "Led the development and implementation of a referral program for Flipkart's Pay Later and Credit Card services in app and website, where users could share referral links and receive rewards through WhatsApp resulting in significant increase of over 10,000 Pay Later and 1,000 Credit Card signups",
        "Independently developed a feature in the Flipkart mobile app that allows users to view their credit score and understand the factors that impact their score, provided by the Flipkart credit risk insights team and Experian.",
      ],
    },
    northeastern: {
      info: [
        { title: "company", subtitle: "Northeastern" },
        { title: "position", subtitle: "Student / Research Assistant" },
        { title: "duration", subtitle: "August 2022 - Present" },
        { title: "location", subtitle: "Boston, USA" },
      ],
      skills: [
        {
          id: "react",
          progress: 90,
          title: "React",
        },
        {
          id: "nextjs",
          progress: 60,
          title: "Next.js",
        },
        {
          id: "ember",
          progress: 90,
          title: "Ember",
        },
        {
          id: "javascript",
          progress: 90,
          title: "Javascript",
        },
        {
          id: "typescript",
          progress: 70,
          title: "Typescript",
        },
        {
          id: "nodejs",
          progress: 90,
          title: "Nodejs",
        },
        {
          id: "figma",
          progress: 30,
          title: "Figma",
        },
        {
          id: "aws",
          progress: 40,
          title: "AWS",
        },
        {
          id: "d3js",
          progress: 30,
          title: "D3.js",
        },
        {
          id: "threejs",
          progress: 30,
          title: "Three.js",
        },
        {
          id: "html",
          progress: 90,
          title: "HTML",
        },
        {
          id: "css",
          progress: 80,
          title: "CSS",
        },
        {
          id: "java",
          progress: 30,
          title: "Java",
        },
      ],
      traits: [
        { title: "UI Automation", id: "automation" },
        { title: "svg animations", id: "animation" },
        { title: "chart visualisation (D3.js)", id: "visualisation" },
        { title: "Problem solving", id: "problemsolving" },
      ],
      experience: [
        "Reasearch Assistant Project - Design and developing web application for neural research scientists to view and share scans and studies using React.js, Flask, MySQL, AWS S3, Lambda",
        "Coursework: Application Engineering and Development,Database management and Database Design, Network sturctures and Cloud Computing, Program structures and Algorithms",
      ],
    },
  },
};

export default portfoliodata;
