"use client";
import HeroSection from "../_CommonComponents/HeroSection";
import Overview from "./components/OverviewPage";
import Program from "./components/Program";
import CrashCourse from "./components/CrashCourse";
import WhyChooseUs from "./components/WhyChooseUsComponent";
import Practitioners from "./components/PractitionersPageComponent";
import AdvantageComponent from "./components/TechmomentumAdvantageComponent";
import MasterClass from './components/MasterClass'
import BlogPage from "./components/BlogPageComponent";
import FaqComponent from "../_CommonComponents/FaqComponent";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const FindJobsPage = () => {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState("");
  let [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const courseCategory = searchParams.get("category") || "";
    setCategory(courseCategory);
    fetchCourse();
  }, [searchParams, category]);

  const fetchCourse = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/get-course-category-by-category/${category}`
      );
      setCourseData(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // console.log(courseData.);

  return (
    <>
      <HeroSection headerData={courseData.headerData} isFormOpen={true}/>
      <Overview overviewData={courseData.WhyNeedMasterClass} />
      <Program programData={courseData.extensiveProgram} />
      <CrashCourse crashCourseData={courseData.crashCourseData} />
      <WhyChooseUs />
      <Practitioners practitionersData={courseData.practionersData} />
      <AdvantageComponent />
      <MasterClass masterClassData={courseData.masterClassData}/>
      <BlogPage />
      <FaqComponent />
    </>
  );
};

export default FindJobsPage;
