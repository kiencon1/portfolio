import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import AboutIcon from "../SVGJSXElement/AboutIcon";
import ProjectIcon from "../SVGJSXElement/ProjectIcon";

const navListItem = [
  {
    name: "about",
    SVGJSXElement: () => (
      <AboutIcon classes="text-textPrimary flex items-center w-12 h-12" />
    ),
  },
  {
    name: "project",
    SVGJSXElement: () => (
      <ProjectIcon classes="text-textPrimary flex items-center w-12 h-12" />
    ),
  },
];

const Header = () => {
  const [isHiddenMenu, setHiddenMenu] = useState(true);
  const router = useRouter();
  const pathname = router.pathname;
  const handleSubmitButton = () => {
    setHiddenMenu(!isHiddenMenu);
  };
  return (
    <header>
      <div className="container text-center">
        <div className="flex justify-between inline-block p-2 border-top border-textPrimary">
          <Link className="mb-2 block" href="/">
            <Image
              src="/images/deep.jpg"
              alt="Logo"
              width={60}
              height={60}
              priority={true}
              className="rounded-full"
            />
          </Link>
          <button aria-label="nav" onClick={() => handleSubmitButton()}>
            <svg
              className="w-12 h-12 text-textPrimary  flex items-center"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`border-top-1 pt-1p container text-center mt-2 border-top border-textPrimary ${
          isHiddenMenu ? "hidden" : ""
        }`}
      >
        <ul className="border-top-1 border-top border-textPrimary pt-2">
          {navListItem
            .filter(({ name }) => `/${name}` !== pathname)
            .map(({ name, SVGJSXElement }) => (
              <li key={name}>
                <Link href={`/${name}`} className="flex items-center text-Cap">
                  <SVGJSXElement />
                  <p className="text-textPrimary capitalize ml-2">{name}</p>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
