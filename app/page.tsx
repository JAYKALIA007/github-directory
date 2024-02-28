import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="text-xl font-medium">Home page</div>
      <ul>
        <li>
          <Link className="hover:underline" href={"/about"}>
            <i>About</i>
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href={"/about/team"}>
            <i>Team</i>
          </Link>
        </li>
      </ul>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  );
}
