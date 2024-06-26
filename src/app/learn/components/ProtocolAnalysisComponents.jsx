import PropTypes from "prop-types";

const ProtocolTools = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-start gap-[21px] max-w-full text-left text-base text-gray-1400 font-sub-heading ${className}`}
    >
      <div className="flex-1 shadow-[0px_0px_2px_rgba(0,_0,_0,_0.25)] rounded bg-white flex flex-col items-start justify-start py-5 px-[30px] box-border min-w-[454px] max-w-full mq1400:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[12px] max-w-full mq925:flex-wrap">
          <img
            className="h-[30px] w-[30px] relative rounded-[50%] object-contain"
            alt=""
            src="/empty-protocol@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] pb-0 pr-5 pl-0 box-border min-w-[302px] max-w-full">
            <div className="w-[406px] relative tracking-[0.2em] leading-[150.15%] font-semibold inline-block max-w-full">
              NETWORK PROTOCOL ANALYSIS
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[20px]">
            <img
              className="h-[50px] w-[50px] relative object-cover min-h-[50px]"
              alt=""
              src="/empty-card-top@2x.png"
            />
            <img
              className="h-[50px] w-[50px] relative object-cover min-h-[50px]"
              alt=""
              src="/empty-card-bottom@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start gap-[50px] max-w-full mt-[-4px] text-xs mq925:flex-wrap mq925:gap-[25px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[304px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-[8px] text-xl text-navy">
              <div className="relative font-semibold mq450:text-base">
                Wireshark Packet Analysis
              </div>
              <div className="self-stretch relative text-sm text-gray-1400">
                Learners will analyze the SSL certificate of a website to
                extract details of the certificate fingerprints, validity and
                certificate levels.
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative">
                <ul className="m-0 font-inherit text-inherit pl-4">
                  <li>Learners will analyze the SSL certificate</li>
                </ul>
              </div>
              <div className="relative">
                <ul className="m-0 font-inherit text-inherit pl-4">
                  <li>Learners will analyze the SSL certificate</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <ul className="m-0 font-inherit text-inherit pl-4">
                <li>Learners will analyze the SSL certificate</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[22px]">
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <img
                  className="h-[50px] w-[50px] relative object-cover min-h-[50px]"
                  alt=""
                  src="/details-top@2x.png"
                />
                <img
                  className="h-[50px] w-[50px] relative object-cover min-h-[50px]"
                  alt=""
                  src="/details-bottom@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <img
                  className="h-[50px] w-[50px] relative object-cover min-h-[50px]"
                  alt=""
                  src="/empty-card-top@2x.png"
                />
                <img
                  className="h-[50px] w-[50px] relative object-cover min-h-[50px]"
                  alt=""
                  src="/empty-card-bottom@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 shadow-[0px_0px_2px_rgba(0,_0,_0,_0.25)] rounded bg-white flex flex-col items-start justify-start py-5 px-[30px] box-border min-w-[454px] max-w-full mq1400:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[70px] max-w-full mq450:gap-[17px] mq925:flex-wrap mq925:gap-[35px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[12px] min-w-[291px] max-w-full mq925:flex-wrap">
            <img
              className="h-[30px] w-[30px] relative rounded-[50%] object-cover min-h-[30px]"
              alt=""
              src="/empty-protocol@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[264px] max-w-full">
              <div className="self-stretch relative tracking-[0.2em] leading-[150.15%] font-semibold">
                NETWORK PROTOCOL ANALYSIS
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[20px]">
            <img
              className="h-[50px] w-[50px] relative object-cover min-h-[50px]"
              alt=""
              src="/empty-card-top@2x.png"
            />
            <img
              className="h-[50px] w-[50px] relative object-cover min-h-[50px]"
              alt=""
              src="/empty-card-bottom@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start gap-[50px] max-w-full mt-[-4px] text-xs mq925:flex-wrap mq925:gap-[25px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
            <div className="relative text-xl font-semibold text-navy mq450:text-base">
              Wireshark Packet Analysis
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full text-sm">
              <div className="flex-1 relative inline-block max-w-full">
                Learners will analyze the SSL certificate of a website to
                extract details of the certificate fingerprints, validity and
                certificate levels.
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative">
                <ul className="m-0 font-inherit text-inherit pl-4">
                  <li>Learners will analyze the SSL certificate</li>
                </ul>
              </div>
              <div className="relative">
                <ul className="m-0 font-inherit text-inherit pl-4">
                  <li>Learners will analyze the SSL certificate</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <ul className="m-0 font-inherit text-inherit pl-4">
                <li>Learners will analyze the SSL certificate</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[22px]">
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <img
                  className="h-[50px] w-[50px] relative object-cover min-h-[50px]"
                  alt=""
                  src="/details-top@2x.png"
                />
                <img
                  className="h-[50px] w-[50px] relative object-cover min-h-[50px]"
                  alt=""
                  src="/details-bottom@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <img
                  className="h-[50px] w-[50px] relative object-cover min-h-[50px]"
                  alt=""
                  src="/empty-card-top@2x.png"
                />
                <img
                  className="h-[50px] w-[50px] relative object-cover min-h-[50px]"
                  alt=""
                  src="/empty-card-bottom@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProtocolTools.propTypes = {
  className: PropTypes.string,
};

export default ProtocolTools;
