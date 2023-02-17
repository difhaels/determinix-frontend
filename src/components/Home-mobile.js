const Home = () => {
  return (
    <div className="h-[100vh] text-center">
      <h1 className="pt-[360px] pb-5 text-[#ff0000] text-5xl font-bold ">DETERMINIX</h1>
      <a href="https://wa.me/+62895337305533" className=" text-white bg-red-500 px-3 py-2 border-2 border-white">
        Contact
      </a>
    </div>
  );
};

const Intro = () => {
  return (
    <div className="text-center text-3xl px-9 text-white grid gap-5 pb-32">
      <h1 className="text-xl font-bold">
        INTRO
        <div className="mx-auto w-[15%] h-[2.5px] bg-white mt-1 mb-5"></div>
      </h1>
      <div className="px-3 py-4 border-2 border-white bg-red-500">
        <h1 className="text-slate-900 font-bold ">DETERMINIX</h1>
        <h1 className="text-xl">A team working in the field of web developers.</h1>
      </div>
      <div className="px-3 py-4 border-2 border-white bg-red-500">
        <h1 className="text-green-400 font-bold">LIFE.</h1>
        <h1 className="text-xl">Determinix try to make the web as alive as possible.</h1>
      </div>
      <div className="px-3 py-4 border-2 border-white bg-red-500">
        <h1 className="text-teal-500 font-bold ">COOL.</h1>
        <h1 className="text-xl">It's an obligation for Dx to make something cool.</h1>
      </div>
    </div>
  );
};

const HomeMobile = () => {
  return (
    <div className="bg-[#292828] block sm:hidden">
      <Home />
      <Intro />
    </div>
  );
};

export default HomeMobile;
