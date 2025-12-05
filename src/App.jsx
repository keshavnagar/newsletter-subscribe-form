import { CiMail } from "react-icons/ci";
const App = () => {
  return (
    <section className="bg-[#E94F37] w-screen h-screen flex justify-center items-center">
      <div className="bg-[#F6F7EB] w-[360px] p-[24px] rounded-[16px] shadow-xl flex flex-col justify-center items-center gap-5">
        <CiMail className="text-[#E94F37] text-[4rem]" />
        <div>
          <h1 className="text-[#E94F37] text-[1.5rem] font-bold">
            Subscribe to our newsletter
          </h1>
          <h2 className="text-[#E94F37] text-[1.2rem] font-medium  tracking-widest">
            Stay updated with latest post
          </h2>
        </div>
        <form className="flex flex-col w-full">
          <label className="text-[#E94F37]" htmlFor="name">
            Name
          </label>
          <input
            className="text-[#E94F37] placeholder:text-[#f58574] text-sm border border-[#fab2a7] rounded-md transition duration-300 focus:outline-none focus:border-[#e94f37] hover:border-[#f58574] shadow-sm focus:shadow px-3 py-2 bg-transparent mt-2 mb-2 "
            placeholder="enter your name"
            id="name"
            type="text"
          />
          <label className="text-[#E94F37]" htmlFor="email">
            Email
          </label>
          <input
            className="text-[#E94F37] placeholder:text-[#f58574] text-sm border border-[#fab2a7] rounded-md transition duration-300 focus:outline-none focus:border-[#e94f37] hover:border-[#f58574] shadow-sm focus:shadow px-3 py-2 bg-transparent mt-2 mb-2"
            placeholder="enter email address"
            id="email"
            type="email"
          />
          <button className="text-[#F6F7EB] font-bold tracking-wide bg-[#e94f37]  rounded-md trasition duration-300 hover:bg-[#d8412a] px-3 py-2 mt-2 mb-2">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
export default App;
