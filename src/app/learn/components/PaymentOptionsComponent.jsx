import { useMemo } from "react";
import PropTypes from "prop-types";

const PaymentOptionsItems = ({
  className = "",
  prop,
  oneTimePayment,
  propGap,
  propMinWidth,
  propMinWidth1,
  propWidth,
  propGap1,
}) => {
  const paymentOptionsItemsStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const paymentOptionDetailsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const paymentOptionValueStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const paymentOptionAmountStyle = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  return (
    <div
      className={`flex-1 shadow-[0px_0px_2px_rgba(0,_0,_0,_0.25)] rounded-5xs bg-white flex flex-row items-start justify-start pt-0 pb-6 pr-0 pl-5 box-border gap-[14px] min-w-[298px] max-w-full text-left text-lg text-pri-colour font-sub-heading mq450:flex-wrap mq450:pr-5 mq450:box-border ${className}`}
      style={paymentOptionsItemsStyle}
    >
      <div
        className="flex-1 flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[209px] max-w-full"
        style={paymentOptionDetailsStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[31px] mq450:gap-[15px]">
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <div className="h-[30px] w-[30px] relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lightgray w-full h-full" />
              <div
                className="absolute top-[1px] left-[11px] font-semibold inline-block min-w-[7px] z-[1]"
                style={divStyle}
              >
                {prop}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="relative font-semibold">{oneTimePayment}</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base text-gray-1700">
            <div className="relative">
              Pay upfront and save 29% on tuition fee
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-xs">
              <div
                className="w-[237px] flex flex-col items-start justify-start gap-[39px]"
                style={paymentOptionValueStyle}
              >
                <div
                  className="self-stretch flex flex-row items-start justify-start gap-[33px]"
                  style={paymentOptionAmountStyle}
                >
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <div className="flex flex-col items-start justify-start gap-[2px]">
                      <div className="relative [text-decoration:line-through] inline-block min-w-[59px]">
                        GBP 2,400
                      </div>
                      <div className="relative text-base font-medium inline-block min-w-[76px]">
                        GBP 1,699
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 relative text-base font-medium text-heading">
                    As low as £283/month 
                  </div>
                </div>
                <div className="h-[34px] rounded box-border flex flex-row items-start justify-start py-1 px-4 whitespace-nowrap text-base text-black border-[1px] border-solid border-black">
                  <div className="relative font-medium inline-block min-w-[83px]">
                    Enroll Now
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-13.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/info.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-tl-none rounded-tr-5xs rounded-br-none rounded-bl-5xs [background:linear-gradient(225.25deg,_#b1ff9e,_#37ac00)] overflow-hidden flex flex-row items-start justify-start py-[7px] px-[21px] whitespace-nowrap text-sm text-white">
        <div className="relative font-semibold inline-block min-w-[61px]">
          29 % OFF
        </div>
      </div>
    </div>
  );
};

PaymentOptionsItems.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  oneTimePayment: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propWidth: PropTypes.any,
  propGap1: PropTypes.any,
};

export default PaymentOptionsItems;
