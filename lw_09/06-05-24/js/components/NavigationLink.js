import { createEl } from "../helpers.js";

const NavigationLink = ({ href, text }) => {
  const el = createEl("li");
  const anchorEl = createEl("a");

  el.className = "navigation--link";
  anchorEl.textContent = text;
  anchorEl.href = href;
  el.append(anchorEl);

  return el;
};

export default NavigationLink;
