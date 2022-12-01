import React from "react";
import PopularJournal from "../PopularJournal";
import styles from './style.module.css'

const PopularJournals = () => {
  const popularJournals = [
    {
      id: "01",
      title: "Six Pack Abs The Big Picture",
      description:
        "Millions of Americans turn to Lasik Surgery when their vision is less than perfect and they’re tired of being tied down to wearing glasses ",
      date: "JANUARY 19, 2017",
    },
    {
      id: "02",
      title:"Night Creams Will Help Your Skin To Relax Become Younger",
      description:
        "Millions of Americans turn to Lasik Surgery when their vision is less than perfect and they’re tired of being tied down to wearing glasses ",
      date: "JANUARY 10, 2017",
    },
    {
      id: "03",
      title: "Natural Beauty From Natural Ingredients",
      description:
        "Millions of Americans turn to Lasik Surgery when their vision is less than perfect and they’re tired of being tied down to wearing glasses",
      date: "JANUARY 2, 2017",
    },
  ];

  return (
    <>
      <h4 className={styles.header}>popular</h4>
      {popularJournals.map((item) => (
        <PopularJournal journalData={item} />
      ))}
    </>
  );
};

export default PopularJournals;
