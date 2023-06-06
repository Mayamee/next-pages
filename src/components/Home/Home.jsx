import Image from "next/image";
import Link from "next/link";

const Home = ({ data }) => {
  if (!Array.isArray(data)) return null;
  return (
    <main>
      {data.map((event) => (
        <Link key={event.id} href={`/events/${event.id}`}>
          <Image src={event.image} width={300} height={300} alt={event.title} />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </Link>
      ))}
    </main>
  );
};

export default Home;
