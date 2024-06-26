import PropTypes from "prop-types";

const BlogItemContent = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 shadow-[0px_0px_2px_rgba(0,_0,_0,_0.16)] rounded-5xs bg-gray-300 overflow-hidden flex flex-row items-start justify-start p-[30px] box-border min-w-[455px] max-w-full [row-gap:20px] text-left text-5xl text-white font-sub-heading mq450:pt-5 mq450:pb-5 mq450:box-border mq925:flex-wrap mq1400:min-w-full ${className}`}
    >
      <div className="w-[309px] flex flex-col items-start justify-start gap-[43px] min-w-[309px] mq450:gap-[21px] mq925:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
          <div className="relative tracking-[0.03em] capitalize font-medium mq450:text-lgi">
            blog Heading
          </div>
          <div className="self-stretch relative text-base tracking-[0.01em] font-medium">
            We follow the first and foremost priority of gathering requirements,
            resources, and information to begin our project We follow the first
            and foremost priority of gathering requirements, resources, and
            information to begin our project
          </div>
        </div>
        <div className="h-[46px] rounded-5xs box-border flex flex-row items-start justify-start py-2.5 px-5 whitespace-nowrap text-base border-[1px] border-solid border-white">
          <div className="relative font-medium inline-block min-w-[89px]">
            Read more
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/frame-3.svg"
          />
        </div>
      </div>
      <img
        className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover min-w-[215px] min-h-[311px]"
        alt=""
        src="/rectangle-34235@2x.png"
      />
    </div>
  );
};

BlogItemContent.propTypes = {
  className: PropTypes.string,
};

export default BlogItemContent;
