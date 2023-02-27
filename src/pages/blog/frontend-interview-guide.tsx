import * as React from "react";
import { ExtendedRecordMap } from "notion-types";
import { NotionAPI } from "notion-client";
import NotionPage from "../../components/BlogContent";
import type { ReactElement } from "react";

const notion = new NotionAPI();

export default function BlogPage({
  recordMap,
  pageId,
}: {
  recordMap: ExtendedRecordMap;
  pageId: string;
}) {
  return <NotionPage recordMap={recordMap} rootPageId={pageId} />;
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
