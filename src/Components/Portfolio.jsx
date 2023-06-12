/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/First.jpg";

const imageAltText = "Power of Power BI";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "What is Power BI?",
    description:
      "If you're interested in POWER BI, you need to check this video, if you're a begginer you need to watch it.",
    url: "https://youtu.be/yKTSLffVGbk",
  },
  {
    title: "Introduction to Power BI (0-1)",
    description:
      "Learn more about POWER BI. This video is about the Analyzing and Visualizing Data with POWER BI ",
    url: "https://youtu.be/1c01r_pAZdk",
  },
  {
    title: "Getting Started with the Power BI Desktop",
    description:
      "In this video, learn how to get started with the POWER BI Desktop application.",
    url: "https://youtu.be/PXqFXG4rzXE",
  },
  {
    title: "Introducción a la compilación con Power BI ",
    description:
      "Aprende a mi ritmo. Este módulo te ayudará a entender cómo crear informes y publicarlas en el servicio de POWER BI",
    url: "https://learn.microsoft.com/training/modules/get-started-with-power-bi?wt.mc_id=studentamb_246397",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
