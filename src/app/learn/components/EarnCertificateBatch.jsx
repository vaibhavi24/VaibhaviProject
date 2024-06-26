import PropTypes from "prop-types";

const BusinessWorldRanking = ({inOneYearPrograms }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded bg-white overflow-hidden flex flex-row items-start justify-start pt-1.5 px-4 pb-[5px] gap-[28.9px] z-[1] text-left text-17xl `}
    >
      <div className="flex flex-row items-start justify-start py-5 pr-[45px] pl-[52px] bg-[url('/wheat-leaves-award-circle-gold-gradientphotoroom-1@2x.png')] bg-cover bg-no-repeat bg-[top]">
        <img
          className="h-[94px] w-[132.1px] relative object-cover hidden z-[1]"
          alt=""
          src="/wheat-leaves-award-circle-gold-gradientphotoroom-1@2x.png"
        />
        <div className="relative font-semibold inline-block min-w-[23px] z-[1] ">
          9
        </div>
        <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0 ml-[-1.6px] text-xs">
          <div className="relative font-semibold inline-block min-w-[13px] z-[1]">
            th
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0 text-5xl">
        <div className="flex flex-col items-start justify-start gap-[9px]">
          <div className="relative font-semibold ">
            {inOneYearPrograms}
          </div>
          <div className="relative text-sm text-gray-2000 inline-block min-w-[126px]">
            By Business World
          </div>
        </div>
      </div>
    </div>
  );
};

BusinessWorldRanking.propTypes = {
  className: PropTypes.string,
  inOneYearPrograms: PropTypes.string,
};

export default BusinessWorldRanking;
