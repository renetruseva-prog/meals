import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="home">
      <h1 className="home-title">What's<br />cooking?</h1>
      <p className="home-subtitle">You can navigate to:</p>
      <ul>
        <li><Link to="/about">Meals</Link></li>
      </ul>
    </div>
  );
}
