const Community = () => {
  return (
    <div className="w-[100%] p-8 bg-[#212121]">
      <div className="w-[80%] mx-auto flex gap-2 p-7 ">
        <div className="w-1/2 flex flex-col justify-center gap-8">
          <h1 className="text-4xl font-semibold text-[#0ADE53] ">
            Learning is Better with TechMomentum Community
          </h1>
          <p className="text-white text-lg font-medium">
            Join a community of serious & passionate tech folks, students,
            mentors and coaches your career.
          </p>
          <button className="w-[60%] flex justify-center items-center border-2 border-white rounded-lg p-2 text-black text-sm font-semibold cursor-pointer  hover:bg-[#0c8ce9] hover:text-white hover:border-0">
            <div className="">
              <img src="/WhatsappFrame.png" alt="" />
            </div>
            <div className="">
              <p className="font-semibold text-white">
                Join WhatsApp Community
              </p>
            </div>
          </button>
        </div>
        <div className="w-1/2 h-[450px]">
          <div className="w-full h-full flex items-start justify-center text-3xl relative ">
            <img src="/WhatsApp.png" alt="" className="h-full " />
            <div className="absolute top-6 left-0  flex flex-col">
              <div className="">
                <img src="/steve4.png" alt="" className="w-[50%]" />
              </div>
              <div className="flex justify-end">
                <img src="/steve3.png" alt="" className="w-[50%] me-2" />
              </div>
              <div className="">
                <img src="/steve1.png" alt="" className="w-[50%] " />
              </div>
              <div className="flex justify-end">
                <img src="/steve2.png" alt="" className="w-[50%] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
