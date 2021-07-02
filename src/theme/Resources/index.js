import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";

import styles from "./styles.module.scss";

const data = [
  {
    title: <>Treatment Tree</>,
    icon: "1️⃣",
    buttonLabel: "Start here",
    href: "/content/treatment-tree",
    description: (
      <>
        Start here. Assess your patient's pain and quickly determine the best
        course of action.
      </>
    ),
  },
  {
    title: <>Dose Conversion</>,
    icon: "🔄",
    buttonLabel: "Convert",
    href: "/dose-conversion",
    description: (
      <>
        Converting to and from various opioids to an equianalgesic dose of oral
        morphine.
      </>
    ),
  },
  {
    title: <>Responses to Patient FAQs</>,
    icon: "🙋",
    buttonLabel: "Learn more",
    href: "/content/faq",
    description: <>For questions your patients may ask</>,
  },
  {
    title: <>Individual Opioids</>,
    icon: "💊",
    buttonLabel: "Learn more",
    href: "/content/choosing-an-opioid",
    description: (
      <>
        Learn about various opioids such as bupreorphine, codeine and methadone.
      </>
    ),
  },
];

export default Resources;

function Resource({ buttonLabel, href, icon, title, description }) {
  return (
    <Link className={clsx("card", styles.card)} to={href}>
      <div className="card__header">
        {icon && (
          <div className={clsx("card__icon", styles.card__icon)}>{icon}</div>
        )}
        {title && <h3>{title}</h3>}
      </div>
      {description && (
        <div className="card__body">
          <p>{description}</p>
          <h4 style={{ textTransform: "uppercase" }}>{buttonLabel}</h4>
        </div>
      )}
    </Link>
  );
}

function Resources() {
  return (
    <>
      {data && data.length > 0 && (
        <section id="resouces" className={styles.resources}>
          <div className="container">
            <div className="row">
              {data.map((resource, index) => (
                <div className={clsx("col", styles.resource)} key={index}>
                  <Resource {...resource} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
