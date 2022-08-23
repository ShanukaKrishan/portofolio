import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("./Navigation"));
const Greetings = dynamic(() => import("./Greetings"));
const Skills = dynamic(() => import("./Skills"));
const Proficiency = dynamic(() => import("./Proficiency"));
const Education = dynamic(() => import("./Education"));
const Experience = dynamic(() => import("./Experience"));
const Projects = dynamic(() => import("./Projects"));
const Feedbacks = dynamic(() => import("./Feedbacks"));
const GithubProfileCard = dynamic(() =>
  import("./GithubProfileCard")
);
import { openSource } from "./portfolio";
import SEO from "./SEO";

const Mailto = ({ email, subject, body, children = "ddff" }) => {
  return (
    <button
      color="blue"
      onClick={(event) => {
        <a
          href={`mailto:${email}?subject=${
            encodeURIComponent(subject) || ""
          }&body=${encodeURIComponent(body) || ""}`}
        >
          {children}
        </a>;
      }}
    ></button>
  );
};

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      {/* <Feedbacks /> */}
      <Projects />
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
