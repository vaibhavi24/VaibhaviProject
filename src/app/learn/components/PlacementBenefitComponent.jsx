import { useMemo } from "react";
import PropTypes from "prop-types";

const PlacementBenefitRows = ({
  className = "",
  image34,
  oneOnOneSessions,
  image36,
  careerGuidance,
  image35,
  hiringPartners,
  propGap,
  propWidth,
  propWidth1,
  propPadding,
  propTextAlign,
}) => {
  const placementBenefitRowsStyle = useMemo(() => {
    return {
      gap: propGap,
      width: propWidth,
    };
  }, [propGap, propWidth]);

  const placementBenefitIconsStyle = useMemo(() => {
    return {
      width: propWidth1,
      padding: propPadding,
    };
  }, [propWidth1, propPadding]);

  const oneOnOneSessionsStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div
      className={`flex flex-row items-start justify-start gap-[80px] text-left text-xl text-white font-sub-heading mq450:gap-[20px] mq925:gap-[40px] mq1400:flex-wrap ${className}`}
      style={placementBenefitRowsStyle}
    >
      <div
        className="flex flex-col items-start justify-start gap-[20px] text-center"
        style={placementBenefitIconsStyle}
      >
        <img
          className="w-20 h-20 relative object-contain z-[2]"
          alt=""
          src={image34}
        />
        <div
          className="relative font-semibold z-[2] mq450:text-base"
          style={oneOnOneSessionsStyle}
        >
          {oneOnOneSessions}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[20px]">
        <img
          className="w-20 h-20 relative object-contain z-[2]"
          alt=""
          src={image36}
        />
        <div className="relative font-semibold z-[2] mq450:text-base">
          {careerGuidance}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[20px]">
        <img
          className="w-20 h-20 relative object-contain z-[2]"
          alt=""
          src={image35}
        />
        <div className="relative font-semibold z-[2] mq450:text-base">
          {hiringPartners}
        </div>
      </div>
    </div>
  );
};

PlacementBenefitRows.propTypes = {
  className: PropTypes.string,
  image34: PropTypes.string,
  oneOnOneSessions: PropTypes.string,
  image36: PropTypes.string,
  careerGuidance: PropTypes.string,
  image35: PropTypes.string,
  hiringPartners: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propPadding: PropTypes.any,
  propTextAlign: PropTypes.any,
};

export default PlacementBenefitRows;
