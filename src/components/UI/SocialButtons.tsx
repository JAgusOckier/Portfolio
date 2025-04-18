import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const SocialButtons = () => {
  return (
    <div className="flex items-center gap-2 absolute left-8 bottom-0 md:bottom-4">
      <a
        href="https://github.com/JAgusOckier"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full"
        aria-label="GitHub"
      >
        <FaGithub size={28} />
      </a>

      <a
        href="https://www.linkedin.com/in/juanagustin-ockier/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={28} className=" text-blue-600 dark:text-blue-400" />
      </a>

      <a
        href="/Juan Agustin Ockier CV Frontend Full Stack Dev.pdf"
        download
        className="p-2 rounded-full"
        aria-label="Descargar CV"
        >
        <HiOutlineDocumentDownload size={28} className=" text-green-500" />
      </a>
  
    </div>
  );
}

export default SocialButtons