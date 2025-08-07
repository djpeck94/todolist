import { createElement } from "../utils/createElement";

export function buildTaskList() {
  return createElement("div", { class: "taskList" }, [
    createElement("div", { class: "title-wrapper" }, [
      createElement("h3", { class: "title-placeholder" }, ["My Tasks:"]),
    ]),
    createElement("div", { class: "list-wrapper" }, [
      createElement("ul", { class: "task-list" }, [
        createElement("li", { class: "list-item" }, ["clean desk"]),
        createElement("li", { class: "list-item" }, ["change oil"]),
      ]),
    ]),
  ]);
}
