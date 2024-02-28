import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Github Directory | About",
  description: "The about page of the user",
  keywords: ["about", "about-user"],
};
export const AboutPage = () => {
  return (
    <div>
      <div className="text-xl font-medium">About Page</div>
      <div>
        A dictionary is a listing of lexemes from the lexicon of one or more
        specific languages, often arranged alphabetically, which may include
        information on definitions, usage, etymologies, pronunciations,
        translation, etc. It is a lexicographical reference that shows
        inter-relationships among the data.
      </div>
    </div>
  );
};

export default AboutPage;
