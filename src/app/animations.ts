import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

// Routable animations
export const slideInAnimation = trigger("displayHide", [
  state("in", style({ transform: "translateY(0)" })),
  state("out", style({ transform: "translateY(-90)" })),
  transition(":enter", [
    style({ transform: "translateY(-100%)" }),
    animate(1000),
  ]),
  transition(":leave", [style({ transform: "translateY(-100%)" }), animate(0)]),
]);
