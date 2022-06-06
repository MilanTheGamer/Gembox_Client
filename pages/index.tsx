import { useAtom } from "jotai";
import type { NextPage } from "next";
import { darkModeAtom } from "../atoms";

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  return (
    <>
      <h1>Welcome To GEMBOX</h1>
      <button onClick={() => setDarkMode(!darkMode)}>Click</button>
    </>
  );
};

export default Home;
