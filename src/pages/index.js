import AllCourses from "@/components/Home/AllCourses";
import Career from "@/components/Home/Career";
import Categories from "@/components/Home/Categories";
import Future from "@/components/Home/Future";
import Hero from "@/components/Home/Hero";
import Instructor from "@/components/Home/Instructor";
import PopularCourses from "@/components/Home/PopularCourses";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eduverge - Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Hero */}
      <Hero />
      {/* feature */}
      <Future />
      {/* Categories */}
      <Categories />
      {/* popular courses */}
      <PopularCourses />
      {/* career */}
      <Career />
      {/* instructor */}
      <Instructor/>
      {/* all courses */}
      <AllCourses/>
    </>
  );
}
