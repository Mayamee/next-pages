import Head from "next/head";
import Image from "next/image";
import Home from "@/src/components/Home/Home";

export async function getServerSideProps() {
  const { events_categories } = await import("@/data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}

export default function HomePage({ data }) {
  return <Home data={data} />;
}
