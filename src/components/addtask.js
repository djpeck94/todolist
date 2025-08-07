import { createElement } from "../utils/createElement";
const VITE_API_URL = import.meta.env.VITE_API_URL;

export function buildTaskAdder() {
  return createElement("div", { class: "addTaskCard" }, [
    createElement("div", { class: "addTaskCard__header" }, [
      createElement("img", { class: "plusIcon" }),
      createElement("h3", { class: "addTaskCard__header__text" }, ["Add Task"]),
    ]),
    createElement("div", { class: "addTaskCard__input" }, [
      createElement("input", {
        id: "taskName",
        type: "text",
        placeholder: "Buy Groceries",
      }),
    ]),
    createElement("div", { class: "addTaskCard__button" }, [
      createElement(
        "button",
        {
          id: "addTaskButton",
          onClick: async () => {
            try {
              const response = await fetch(
                "http://localhost:3000/api/add-task",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" }, // good practice
                  body: JSON.stringify({
                    message: document.getElementById("taskName").value,
                  }),
                }
              );
              const text = await response.text();
              console.log(text);
            } catch (err) {
              console.error("Request failed", err);
            }
          },
        },
        ["Add Task"]
      ),
    ]),
  ]);
}
