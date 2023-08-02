import sitUp from "../assets/sit-up.jpg";
import curl from "../assets/curl.jpg";

const AdBanner = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row mt-6 h-[35rem]">
      <div className="relative flex-grow card bg-base-300 rounded-box">
        <img
          src={sitUp}
          alt="dummy name for now"
          className="h-full w-full object-cover object-center absolute inset-0 m-auto"
        />
        <div className="absolute inset-x-0 top-0 px-4 pb-4 text-white text-center">
          <h2 className="text-xl font-bold">Champions never quit.</h2>
        </div>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="grid flex-grow h-full card bg-base-300 rounded-box place-items-center">
        <img
          src={curl}
          alt="dummy name for now"
          className="h-full w-full object-cover object-center absolute inset-0 m-auto"
        />
        <div className="absolute inset-x-0 bottom-0 px-4 pb-4 text-white text-center">
          <h2 className="text-xl font-bold">No pain, no gain.</h2>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
