import Container from "./Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t mt-20 py-10 text-sm text-gray-500">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: Name & copyright */}
          <p className="text-gray-400">
            © {new Date().getFullYear()} Saurav — All rights reserved.
          </p>

          {/* Right: Social Links */}
          <div className="flex items-center gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/saurav-sd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              {/* GitHub brand icon */}
              <FaGithub size={20} color="#181717" />
              <span className="font-medium">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/saurav-daware-linkdin/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              {/* LinkedIn brand icon */}
              <FaLinkedin size={20} color="#0077B5" />
              <span className="font-medium">LinkedIn</span>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/sauravdaware/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              {/* LeetCode brand icon */}
              <SiLeetcode size={20} color="#FFA116" />
              <span className="font-medium">LeetCode</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
