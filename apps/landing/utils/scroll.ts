// utils/scroll.ts

/**
 * Scrolls to the specified element with an optional offset
 * @param element - The target HTML element to scroll to
 * @param offset - Optional offset from the top of the element
 */
export const scrollToElement = (
  element: HTMLElement | null,
  offset = 0,
): void => {
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

/**
 * Gets the height of an element by class name
 * @param className - The class name of the element
 * @returns The height of the element or 0 if not found
 */
export const getElementHeight = (className: string): number => {
  const element = document.querySelector(className);
  return element ? element.getBoundingClientRect().height : 0;
};
