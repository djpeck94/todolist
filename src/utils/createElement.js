export function createElement(tag, attributes = {}, children = []) {
  const element = document.createElement(tag);

  // Handle attributes
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === "class") {
      element.className = value;
    } else if (key === "style" && typeof value === "object") {
      Object.assign(element.style, value);
    } else if (key.startsWith("on") && typeof value === "function") {
      // Handle event listeners (onClick, onMouseOver, etc.)
      const eventName = key.substring(2).toLowerCase();
      element.addEventListener(eventName, value);
    } else {
      element.setAttribute(key, value);
    }
  });

  // Handle children
  children.forEach((child) => {
    if (typeof child === "string" || typeof child === "number") {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      element.appendChild(child);
    } else if (Array.isArray(child)) {
      // Handle arrays of children
      child.forEach((c) => element.appendChild(c));
    }
  });

  return element;
}
