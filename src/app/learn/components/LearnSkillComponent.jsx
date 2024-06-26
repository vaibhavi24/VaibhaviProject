import PropTypes from "prop-types";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1690px] flex flex-row items-start justify-between pt-0 pb-[70px] pr-0 pl-5 box-border max-w-full gap-[20px] text-left text-21xl text-dodgerblue font-sub-heading mq1850:flex-wrap ${className}`}
    >
      <div className="w-[1376px] flex flex-col items-start justify-start gap-[33px] max-w-full mq925:gap-[16px]">
        <div className="relative tracking-[0.03em] uppercase font-semibold inline-block max-w-full mq450:text-5xl mq925:text-13xl">
          Skills you will learn
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[23px] max-w-full text-lg text-white mq1400:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[404px] max-w-full mq450:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[17px] pl-0 gap-[40px] mq925:flex-wrap mq925:gap-[20px]">
              <div className="rounded-8xs bg-darkslateblue flex flex-row items-start justify-start py-2.5 px-4 whitespace-nowrap">
                <div className="relative tracking-[0.04em] uppercase font-medium inline-block min-w-[90px]">
                  MS Excel
                </div>
              </div>
              <div className="rounded-8xs bg-darkslateblue flex flex-row items-start justify-start py-2.5 px-[15px] whitespace-nowrap">
                <div className="h-[27px] relative tracking-[0.04em] capitalize font-medium inline-block">
                  RISK MANAGEMENT
                </div>
              </div>
              <div className="rounded-8xs bg-darkslateblue flex flex-row items-start justify-start py-2.5 px-4 whitespace-nowrap">
                <div className="relative tracking-[0.04em] capitalize font-medium">
                  CLOUD SECURITY
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[40px] mq925:flex-wrap mq925:gap-[20px]">
              <div className="flex-1 rounded-8xs bg-darkslateblue flex flex-row items-start justify-start py-2.5 px-[15px] box-border min-w-[189px] whitespace-nowrap">
                <div className="h-[27px] relative tracking-[0.04em] capitalize font-medium inline-block">
                  SECURITY CONTROL DESIGN
                </div>
              </div>
              <div className="flex-1 rounded-8xs bg-darkslateblue flex flex-row items-start justify-start py-2.5 px-[15px] box-border min-w-[189px] whitespace-nowrap">
                <div className="h-[27px] relative tracking-[0.04em] capitalize font-medium inline-block">
                  SECURITY CONTROL DESIGN
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <div className="rounded-8xs bg-darkslateblue flex flex-row items-start justify-start py-2.5 px-[15px] whitespace-nowrap">
              <div className="h-[27px] relative tracking-[0.04em] capitalize font-medium inline-block">
                INCIDENT RESPONSE
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[17px]">
              <div className="rounded-8xs bg-darkslateblue flex flex-row items-start justify-start py-2.5 px-[15px] whitespace-nowrap">
                <div className="h-[27px] relative tracking-[0.04em] capitalize font-medium inline-block">
                  INCIDENT RESPONSE
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px] max-w-full">
            <div className="flex flex-row items-start justify-start gap-[40px] mq925:flex-wrap mq925:gap-[20px]">
              <div className="rounded-8xs bg-darkslateblue flex flex-row items-start justify-start py-2.5 px-[15px] whitespace-nowrap">
                <div className="h-[27px] relative tracking-[0.04em] capitalize font-medium inline-block">
                  INCIDENT RESPONSE
                </div>
              </div>
              <div className="rounded-8xs bg-darkslateblue flex flex-row items-start justify-start py-2.5 px-[15px] whitespace-nowrap">
                <div className="h-[27px] relative tracking-[0.04em] capitalize font-medium inline-block">
                  RISK MANAGEMENT
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[17px] box-border max-w-full">
              <div className="rounded-8xs bg-darkslateblue flex flex-row items-start justify-start py-2.5 px-[15px] whitespace-nowrap">
                <div className="h-[27px] relative tracking-[0.04em] capitalize font-medium inline-block">
                  SECURITY CONTROL DESIGN
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-[70px] w-[70px] relative rounded-tl-5xs rounded-tr-none rounded-br-none rounded-bl-5xs overflow-hidden shrink-0"
        alt=""
        src="/frame4.svg"
      />
    </div>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
