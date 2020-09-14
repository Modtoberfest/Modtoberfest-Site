import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen h-full">
      <Navbar />
      <main className="md:px-8 md:pt-16">{props.children}</main>
    </div>
  );
}
