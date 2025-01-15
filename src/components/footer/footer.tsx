import { Link } from "react-router-dom";
import { GitHub, Twitter } from "@/assets/icons/";
import ArkXpense from "../../../public/ArkXpence.svg";

export default function Footer() {
  return (
    <footer className="p-16">
      <section className="w-full px-14 border border-gray-500 rounded-2xl p-4 flex flex-col md:flex-row justify-between items-start text-gray-400 py-8 gap-8">
        <div className="max-w-sm">
          <img src={ArkXpense} alt="Logo" className="w-[14rem]" />
          <p className="text-sm">
            ArkXpense envisions a future where group financial management is
            seamless, secure, and inherently trustworthy, where every
            transaction is transparent, and every participant is empowered,
            leading the way in decentralized finance solutions and setting new
            standards for financial integrity
          </p>
        </div>

        {/* Links Section */}
        <div className="max-w-xs">
          <h3 className="text-custom-orange font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="#explore"
                className="text-sm text-white hover:text-custom-orange"
              >
                Explore events
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                className="text-sm text-white hover:text-custom-orange"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                to="#terms"
                className="text-sm text-white hover:text-custom-orange"
              >
                Terms and conditions
              </Link>
            </li>
            <li>
              <Link
                to="#privacy"
                className="text-sm text-white hover:text-custom-orange"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="max-w-xs">
          <h3 className="text-custom-orange font-bold mb-4">Contact</h3>
          <Link to="mailto:arkxpense@gmail.com">
            <p className="text-sm text-white">arkxpense@gmail.com</p>
          </Link>
          <div className="flex space-x-4 mt-4">
            <Link
              to="https://x.com/ArkXpense"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <Twitter className="w-6 h-6 hover:scale-125" />
            </Link>
            <Link
              to="https://github.com/ArkXpense/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <GitHub className="w-6 h-6 hover:scale-125" />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
