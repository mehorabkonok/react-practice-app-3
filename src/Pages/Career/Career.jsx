import Header from "../Shared/Header/Header"; // Assuming you have a shared header component
import careerImage from "../../assets/editorsInsight1.png"; // Assuming you have a career-related image
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightSideNav/RightNav";

const CareersPage = () => {
  return (
    <div>
      {/* Header */}
      <Header></Header>
      <Navbar></Navbar>

      {/* Hero Section */}

      <div className="grid grid-cols-4">
        <div className="col-span-3 border">
          <div
            className="bg-cover bg-center h-96 flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${careerImage})` }}
          >
            <h1 className="text-5xl font-bold">Join the Dragon News Team</h1>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-4 py-16">
            {/* Company Culture */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Culture
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At Dragon News, we believe in fostering a collaborative and
                inclusive work environment where every team member is valued and
                empowered to make an impact. Our culture is built on trust,
                creativity, and a commitment to excellence. We strive to provide
                our employees with the tools and resources they need to grow
                both professionally and personally.
              </p>
            </div>

            {/* Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Benefits of Working with Us
              </h2>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>Comprehensive health and wellness benefits</li>
                <li>Flexible working hours and remote work options</li>
                <li>Professional development and training programs</li>
                <li>Opportunities for career advancement</li>
                <li>Diverse and inclusive work environment</li>
                <li>Paid time off and holidays</li>
                <li>Employee discount programs</li>
              </ul>
            </div>

            {/* Open Positions */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Open Positions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Position 1 */}
                <div className="border p-4 shadow-md">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Senior Editor
                  </h3>
                  <p className="text-gray-600">Location: Remote</p>
                  <p className="text-gray-600">Full-time</p>
                  <Link
                    to="/careers/senior-editor"
                    className="text-blue-500 hover:underline mt-4 inline-block"
                  >
                    Learn more
                  </Link>
                </div>

                {/* Position 2 */}
                <div className="border p-4 shadow-md">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Investigative Reporter
                  </h3>
                  <p className="text-gray-600">Location: New York, NY</p>
                  <p className="text-gray-600">Full-time</p>
                  <Link
                    to="/careers/investigative-reporter"
                    className="text-blue-500 hover:underline mt-4 inline-block"
                  >
                    Learn more
                  </Link>
                </div>

                {/* Position 3 */}
                <div className="border p-4 shadow-md">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Digital Marketing Specialist
                  </h3>
                  <p className="text-gray-600">Location: Remote</p>
                  <p className="text-gray-600">Part-time</p>
                  <Link
                    to="/careers/digital-marketing-specialist"
                    className="text-blue-500 hover:underline mt-4 inline-block"
                  >
                    Learn more
                  </Link>
                </div>

                {/* Add more positions as needed */}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Ready to Make an Impact?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                If you are passionate about journalism and want to be part of a
                dynamic team, we would love to hear from you! Explore our open
                positions or send us your resume at{" "}
                <a
                  href="mailto:careers@dragonnews.com"
                  className="text-blue-500 hover:underline"
                >
                  careers@dragonnews.com
                </a>
                .
              </p>
              <h2 className="bg-blue-500 w-1/4 mx-auto text-white py-3 px-8 rounded-md">
                Apply Now
              </h2>
            </div>
          </div>
        </div>
        <div className="border ml-2">
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
