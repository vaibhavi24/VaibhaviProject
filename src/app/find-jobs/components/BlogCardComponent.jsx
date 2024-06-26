
const BlogCardComponent = ({ blogName, content, img, alternateCard }) => {
  return (
    <div
      className={` flex-1 shadow-[0px_0px_2px_rgba(0,_0,_0,_0.16)] rounded-lg bg-gray-700 overflow-hidden flex ${ (alternateCard) ? "flex-row-reverse" : "flex-row" } items-start justify-between p-[25px] box-border max-w-full gap-4 text-left text-5xl text-white font-sub-heading `}
    >
      <div className="w-[50%] flex flex-col items-start justify-between gap-[43px] min-w-[309px] ">
        <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
          <h3 className="m-0 relative text-[1.5rem] tracking-[0.03em] capitalize font-medium">
            {blogName}
          </h3>
          <p className="w-[75%] self-stretch relative text-start text-sm">
            {content}
          </p>
        </div>
        <button className="px-5 bg-[transparent] h-[46px] rounded-lg box-border flex items-center justify-center whitespace-nowrap border-[1px] border-solid border-white hover:bg-[#0c8ce9] hover:text-white hover:border-0">
          <span className="text-base">Read more</span>
          <span className="ml-2 font-semibold text-2xl relative overflow-hidden ">
            ›
          </span>
        </button>
      </div>
      <img
        className="self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover min-w-[215px] min-h-[311px]"
        loading="lazy"
        alt=""
        src={img}
      />
    </div>
  );
};

export default BlogCardComponent;
