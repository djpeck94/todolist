import { buildTaskAdder } from "../components/addtask";
import { buildNavBar } from "../components/navbar";
import { buildTaskList } from "../components/tasklist";
import { createElement } from "../utils/createElement";

export function buildHomePage() {
  return createElement("div", { class: "main-wrapper" }, [
    buildNavBar(),
    buildTaskAdder(),
    buildTaskList(),
  ]);
}
