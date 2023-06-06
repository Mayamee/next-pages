import Image from "next/image";
import Link from "next/link";
import React from "react";
import { counter } from "./_index";
import capitalizeString from "@/helpers/capitalizeString";

export async function getStaticPaths() {
  const { events_categories } = await import("@/data/data.json");
  const paths = events_categories.map((cathegory) => ({
    params: {
      cathegory: cathegory.id.toString(),
    },
  }));
  counter.counter++;
  console.log("fetching paths (static): " + counter.counter);
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(ctx) {
  const { allEvents } = await import("@/data/data.json");
  const { params } = ctx;
  const { cathegory } = params;
  const data = allEvents.filter((event) => event.city === cathegory);
  counter.pageCounter++;
  console.log("fetching data (static): " + counter.pageCounter);
  return { props: { data, cathegory } };
}

const EventsCathegoryPage = ({ data, cathegory }) => {
  return (
    <div>
      <h1>Events in {capitalizeString(cathegory)}</h1>
      <div>
        {data.map((event) => (
          <Link key={event.id} href={`/events/${event.city}/${event.id}`}>
            <Image
              src={event.image}
              width={300}
              height={300}
              alt={event.title}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsCathegoryPage;
