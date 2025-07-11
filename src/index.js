import { buildHomePage } from "./pages/home";
import "./style.css";

const mount = document.getElementById("page");

mount.appendChild(buildHomePage());
