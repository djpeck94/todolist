import { createElement } from "../utils/createElement";

export function buildNavBar() {
  return createElement("div", { class: "navbar" }, [
    createElement("div", { class: "logo-wrapper" }, [
      createElement("h2", { class: "logo-placeholder" }, ["LGO"]),
    ]),
    createElement("div", { class: "title-wrapper" }, [
      createElement("h2", { class: "title-placeholder" }, ["TODO APP"]),
    ]),
  ]);
}
