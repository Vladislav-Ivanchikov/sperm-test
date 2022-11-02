let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID,
  currentIndex = 0;

export function sliderFunc(slides, slider) {
  slides.forEach((slide, index) => {
    // touch events
    slide.addEventListener("touchstart", touchStart(index, slider));
    slide.addEventListener("touchend", () => touchEnd(slides, slider));
    slide.addEventListener("touchmove", touchMove);
    // mouse events
    slide.addEventListener("mousedown", touchStart(index, slider));
    slide.addEventListener("mouseup", () => touchEnd(slides, slider));
    slide.addEventListener("mousemove", touchMove);
    slide.addEventListener("mouseleave", () => touchEnd(slides, slider));
  });
}

export function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}

export function touchStart(index, slider) {
  return function (event) {
    currentIndex = index;
    startPos = getPositionX(event);
    isDragging = true;
    animationID = requestAnimationFrame(() => animation(slider));
  };
}

export function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

export function touchEnd(slides, slider) {
  cancelAnimationFrame(animationID);
  isDragging = false;
  const movedBy = currentTranslate - prevTranslate;
  // if moved enough negative then snap to next slide if there is one
  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;
  // if moved enough positive then snap to previous slide if there is one
  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;
  setPositionByIndex(slider);
}

export function animation(slider) {
  setSliderPosition(slider);
  if (isDragging) requestAnimationFrame(() => animation(slider));
}

export function setPositionByIndex(slider) {
  currentTranslate = currentIndex * -window.innerWidth;
  prevTranslate = currentTranslate;
  setSliderPosition(slider);
}

export function setSliderPosition(slider) {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}
