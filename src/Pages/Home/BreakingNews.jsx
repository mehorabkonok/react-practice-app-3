import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="p-4 flex items-center text-lg bg-gray-200 border-0 border-b-2 border-gray-300">
      <button className="btn btn-error rounded-none px-8 text-white">
        Latest
      </button>
      <div className="">
        <Marquee pauseOnHover speed={150}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
