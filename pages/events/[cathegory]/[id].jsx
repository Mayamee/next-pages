import Image from "next/image";

export async function getStaticPaths() {
  const { allEvents } = await import("@/data/data.json");
  const paths = allEvents.map((path) => ({
    params: {
      id: path.id,
      cathegory: path.city,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  const { params } = ctx;
  const { allEvents } = await import("@/data/data.json");
  const event = allEvents.find((event) => event.id === params.id);
  return {
    props: {
      event,
    },
  };
}

const EventPage = ({ event }) => {
  return (
    <div>
      <Image src={event.image} width={500} height={500} alt={event.title} />
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </div>
  );
};

export default EventPage;
