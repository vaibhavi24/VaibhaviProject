import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const InstructorComponent = () => {
  let cardData = [
    {
      img: "inst1",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
    {
      img: "inst2",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
    {
      img: "inst3",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
    {
      img: "inst4",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
  ];
  return (
    <div className="w-full mx-auto my-10 ">
      <div className="w-[80%] flex flex-col gap-3 mx-auto">
        {/* Heading section */}
        <div className="w-full my-3">
          <div className="mx-auto my-10">
            <h1 className="text-[#0466C1] uppercase py-4 text-start font-bold text-3xl ">
              Our Instructor
            </h1>
            <p>Faculty that brings out the best in you</p>
          </div>
        </div>

        {/* Carousel section */}
        <div>
          <p className="uppercase text-[#0466C2] text-lg font-medium">
            COURSE CREATORS INSTRUCTORS
          </p>
          <div className="w-[100%] mx-auto my-10 ">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-[100%]  mx-auto"
            >
              <CarouselContent className="bg-white flex items-center justify-center h-[300px]">
                {cardData.map((cd, index) => {
                  return (
                    <CarouselItem
                      className="basis-1/4 w-[150px] h-full flex items-start justify-center gap-2  p-0"
                      key={index}
                    >
                      <div className="w-[90%] p-2 bg-slate-200 rounded-lg">
                        <div className="w-full">
                          <img
                            src={`/${cd.img}.png`}
                            alt={cd}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div >
                          <h2 className="text-lg text-[#03006D] font-semibold p-2">{cd.name}</h2>
                          <p className="text-md ps-2">{cd.role}</p>
                          <p className="text-md pt-8 ps-3">{cd.company}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorComponent;
