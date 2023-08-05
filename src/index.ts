// import "./styles.css";
// @ts-ignore
import text from "../state.md";
import { Converter } from "showdown";

// @ts-ignore
document.getElementById("app").innerHTML = new Converter().makeHtml(text);
