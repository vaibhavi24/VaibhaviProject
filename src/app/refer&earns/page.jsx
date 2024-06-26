import HeroSection from "../_CommonComponents/HeroSection";
import Navigation from "../_CommonComponents/Navigation";
import GreatRewardsPage from "./GreatRewardsPage";
import RewardPage from "./RewardsPage";
import HowToWin from "./HowToWinPage";
import FaqComponentPage from "../_CommonComponents/FaqComponent";

const ReferAndEarnPage = () => {
  let navItems = [
    {
      title: "Refer & Earn",
      url: "#refer&earn",
    },
    {
      title: "Sign Up to Earn",
      url: "#sign-up-to-earn",
    },
    {
      title: "How Win Rewards?",
      url: "#how-win-rewards",
    },
    {
      title: "FAQ's",
      url: "#faq",
    },
  ];

  return (
    <>
      <HeroSection
        headerData={{
          title: "Refer and Earn",
          subTitle: "Refer and Earn SubTitle",
          headerImage: "/background@3x.png",
        }}
        isFormOpen={true}
      />
      <Navigation
        navItemsData={navItems}
        isButton={true}
        buttonText={"Start Referring"}
      />
      <GreatRewardsPage />
      <RewardPage />
      <HowToWin />
      <FaqComponentPage />
    </>
  );
};

export default ReferAndEarnPage;
