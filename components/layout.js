import NavBar from "./NavBar";
import classNames from "classnames";

export default function Layout({ fluid, children, className, ...props }) {
  return (
    <div className="flex flex-col min-h-screen h-full">
      <NavBar />
      <main className={classNames("md:px-8 md:pt-10", className)}>
        {children}
      </main>
    </div>
  );
}
