import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  );
};

export default Home;
