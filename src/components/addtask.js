import { createElement } from "../utils/createElement";

export function buildTaskAdder() {
  return createElement("p", { class: "main" }, ["Hello World"]);
}
