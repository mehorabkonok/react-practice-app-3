import moment from "moment";
import HeaderLogo from "../../../assets/logo.png";

const Header = () => {
  return (
    <div className="font-poppins flex flex-col items-center p-8">
      <img src={HeaderLogo} alt="The Dragon News logo" />
      <p className="mt-5 mb-2 text-gray-600 text-lg">
        Journalism Without Fear or Favour
      </p>
      <div className="flex text-xl">
        <p className="text-black mr-1">{moment().format("dddd,")}</p>
        <p className="text-gray-600">{moment().format("MMMM D, YYYY")}</p>
      </div>
    </div>
  );
};

export default Header;
