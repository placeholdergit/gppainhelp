import React from "react";
import Layout from "@theme/Layout";
import Hero from "@theme/Hero";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Resources from "@theme/Resources";
import styles from "./index.module.scss";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Hero
        buttonLabel="Get started"
        title={siteConfig.title}
        tagline={siteConfig.tagline}
      />
      <main className={styles.main}>
        <Resources />
      </main>
    </Layout>
  );
}

export default Home;
