"use client";

import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Book from "@/components/Register";


export default function EventPage() {
  

  return (
    <main className="h-full w-full">

      <div className="flex flex-col h-[850px] gap-20">
        <Events />
        <Book />
        <Footer />
      </div>
    </main>
  );
}
