import Image from "next/image";
import Link from "next/link";

const EventsPage = () => {
  return (
    <div>
      <h1>Events</h1>
      <div>
        <Link href="#">
          <div>
            <Image src="" alt="Event image" />
            <h2>Events in London</h2>
          </div>
        </Link>
        <Link href="#">
          <div>
            <Image src="" alt="Event image" />
            <h2>Events in San-Francisco</h2>
          </div>
        </Link>
        <Link href="#">
          <div>
            <Image src="" alt="Event image" />
            <h2>Events in Barselona</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EventsPage;
