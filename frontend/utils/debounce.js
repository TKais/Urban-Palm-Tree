let delayTimer;
export default function debounce(cb, waitTime) {
  const context = this;
  const args = arguments;

  clearTimeout(delayTimer);
  delayTimer = setTimeout(cb.bind(context, args), waitTime);
}
