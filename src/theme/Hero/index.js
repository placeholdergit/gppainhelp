import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./styles.module.scss";

export default Hero;

function Hero({ buttonLabel, title, tagline, small }) {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner, small && styles.small)}>
      <div className="container">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{tagline}</p>
        <div className={styles.buttons}>
          {buttonLabel && (
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("content/")}
            >
              {buttonLabel}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
