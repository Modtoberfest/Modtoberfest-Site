import NavBar from "./NavBar";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen h-full">
      <NavBar />
      <main className="md:px-8 md:pt-10">{props.children}</main>
    </div>
  );
}
