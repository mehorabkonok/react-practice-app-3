import dragonNewsLogo from "../../assets/dragon_news_logo_thumbnail.png"; // Assuming you have a logo image
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightSideNav/RightNav";

const AboutPage = () => {
  return (
    <div>
      {/* Header */}
      <Header></Header>
      <Navbar></Navbar>
      {/* Main Content */}

      <div className="grid grid-cols-4">
        <div className="container max-w- mx-auto px-4 py-16 col-span-3 border">
          <div className="text-center mb-12">
            <img
              src={dragonNewsLogo}
              alt="Dragon News Logo"
              className="mx-auto w-32 h-32 mb-4"
            />
            <h1 className="text-4xl font-bold text-gray-800">
              About Dragon News
            </h1>
            <p className="text-gray-600 mt-4">
              Your trusted source for breaking news, in-depth analysis, and
              unbiased reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Overview */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Dragon News is a leading news company dedicated to delivering
                the latest and most accurate news to our audience. With a team
                of experienced journalists and reporters, we cover a wide range
                of topics including politics, business, technology, sports,
                entertainment, and more.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Founded in 2005, Dragon News has grown to become one of the most
                respected news organizations in the industry. Our mission is to
                provide our readers with reliable and timely news, ensuring they
                stay informed about the world around them.
              </p>
            </div>

            {/* Our Values */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Values
              </h2>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>
                  Integrity: We are committed to maintaining the highest ethical
                  standards.
                </li>
                <li>
                  Accuracy: Our team works diligently to ensure the information
                  we provide is correct.
                </li>
                <li>
                  Independence: We are free from political and commercial
                  influence.
                </li>
                <li>
                  Transparency: We are open and honest about how we gather and
                  report news.
                </li>
                <li>
                  Diversity: We cover stories that represent the diverse world
                  we live in.
                </li>
              </ul>
            </div>
          </div>

          {/* Team Section */}
        </div>
        <div className="border ml-2">
          <RightNav></RightNav>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default AboutPage;
