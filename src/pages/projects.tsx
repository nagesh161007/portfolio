import React from "react";

import Head from "next/head";
import ProjectPage from "@/components/ProjectsPage";

export default function Project() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <ProjectPage></ProjectPage>
    </>
  );
}
