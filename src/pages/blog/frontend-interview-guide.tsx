import * as React from "react";
import { ExtendedRecordMap } from "notion-types";
import { NotionAPI } from "notion-client";
import NotionPage from "../../components/BlogContent";
import type { ReactElement } from "react";
import Head from "next/head";

const notion = new NotionAPI();

export default function BlogPage({
  recordMap,
  pageId,
}: {
  recordMap: ExtendedRecordMap;
  pageId: string;
}) {
  return (
    <>
      <Head>
        <title>
          Frontend Interview Preparation Resources Guide | Tips, Tools, and
          Resources to Help You Succeed in HTML, CSS, and JavaScript Interviews
        </title>
        <meta
          name="description"
          content="Prepare for your frontend job interview in HTML, CSS, and JavaScript with our comprehensive resources guide. Find tips, tools, and resources to help you improve your skills, practice your coding, and get ready to ace your interview."
        ></meta>
        <meta
          name="keywords"
          content="frontend, interview, prep, resources, guide, tips, tools, HTML, CSS, JavaScript, coding, skills"
        ></meta>
        <meta name="author" content="Nageshwara sairam"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <meta
          property="og:title"
          content="Frontend Interview Prep Resources Guide | Tips, Tools, and Resources to Help You Succeed in HTML, CSS, and JavaScript Interviews"
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://images.unsplash.com/photo-1543285198-3af15c4592ce?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
        ></meta>
        <meta
          property="og:description"
          content="Prepare for your frontend job interview in HTML, CSS, and JavaScript with our comprehensive resources guide. Find tips, tools, and resources to help you improve your skills, practice your coding, and get ready to ace your interview."
        ></meta>
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1543285198-3af15c4592ce?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
        ></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@YourTwitterHandle"></meta>
        <meta
          name="twitter:title"
          content="Frontend Interview Prep Resources Guide | Tips, Tools, and Resources to Help You Succeed in HTML, CSS, and JavaScript Interviews"
        ></meta>
        <meta
          name="twitter:description"
          content="Prepare for your frontend job interview in HTML, CSS, and JavaScript with our comprehensive resources guide. Find tips, tools, and resources to help you improve your skills, practice your coding, and get ready to ace your interview."
        ></meta>
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1543285198-3af15c4592ce?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
        ></meta>
      </Head>
      <NotionPage recordMap={recordMap} rootPageId={pageId} />
    </>
  );
}

export const getStaticProps = async () => {
  const pageId =
    "Frontend-Interview-Preparation-Guide-72b5aecac17847749dcbfc4c55f547d2";
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
      pageId,
    },
    revalidate: 10,
  };
};

BlogPage.getLayout = (page: ReactElement) => {
  return <div>{page}</div>;
};
