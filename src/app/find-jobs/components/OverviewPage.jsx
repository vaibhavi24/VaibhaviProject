import React from "react";
import Navigation from "../../_CommonComponents/Navigation";
import "../style.css";

const OverviewPage = ({overviewData}) => {
  if (!overviewData) {
    return <p className="w-[80%] mx-auto">Loading...</p>;
  }
  let {Title, data} = overviewData 

  // let statsData = [
  //   {
  //     title: "$800B",
  //     content: "Global Digital Market by 2026",
  //   },
  //   {
  //     title: "#1",
  //     content: "Most In-Demand Skill According to Michael Page report 2023",
  //   },
  //   {
  //     title: "11 Lakhs+",
  //     content: "Average annual salary of digital managers in India",
  //   },
  //   {
  //     title: "14000+",
  //     content: "Jobs openings worldwide",
  //   },
  //   {
  //     title: "72%",
  //     content:
  //       "of the marketting budget goes towards Digital Marketing, according to a survey from Gartner.",
  //   },
  //   {
  //     title: "49%",
  //     content:
  //       "of businesses say that organic search brings them the best marketing ROT.",
  //   },
  // ];
  let navItems = [
    {
      title: "Overview",
      url: "#homepage",
    },
    {
      title: "Program",
      url: "#extensive-program",
    },
    {
      title: "Crash Course",
      url: "#crashCourse",
    },
    {
      title: "Why Choose TM?",
      url: "#whychoose",
    },
    {
      title: "Master Class",
      url: "#master-class",
    },
    {
      title: "Blogs",
      url: "#blogs",
    },
  ];
  return (
    <div className="w-[100%] bg-black my-3">
      <Navigation isButton={true} navItemsData={navItems} buttonText={"Apply Now"}/>
      <section id="main_content" className="w-[90%] h-[100vh] mx-auto ">
        <h1 className="text-[#78b6ff] my-3 py-6 ps-20 text-start font-semibold text-3xl tracking-wider">
          {Title}
        </h1>
        <div className="flex flex-wrap h-[60%] w-[85%] px-start mx-auto justify-center mt-[20px] border-2 border-[#123693] bg-[#080808] border-opacity-50 rounded-lg">
          {data.map((val, index) => {
            return (
              <div
                key={index}
                className="w-[33.3%] h-[50%] p-5 text-white border-r border-b border-slate-600 flex flex-col justify-center content-between"
              >
                <h2 className="text-5xl font-semibold text-gradient text-center">
                  {val.title}
                </h2>
                <p className="text-center pt-5 opacity-70">{val.subTitle}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default OverviewPage;
