import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1>Events in London</h1>
      <Link href="/events/event1">Event1</Link>
      <Link href="/events/event2">Event2</Link>
      <Link href="/events/event3">Event3</Link>
      <Link href="/events/event4">Event4</Link>
      <Link href="/events/event5">Event5</Link>
      <Link href="/events/event6">Event6</Link>
    </div>
  );
};

export default Page;
