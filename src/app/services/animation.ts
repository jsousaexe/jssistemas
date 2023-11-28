import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  // The '* => *' will trigger the animation to change between any two states
  transition('* => *', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal angular that the animation may not apply as it may or may not be in the DOM.
    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(':leave', [style({ opacity: 1 }), animate('.2s', style({ opacity: 0 }))], {
      optional: true,
    }),
    query(':enter', [style({ opacity: 0 }), animate('.2s', style({ opacity: 1 }))], {
      optional: true,
    }),
  ]),
]);

export const inOutAnimation = trigger('inOutAnimation', [
  transition(':enter', [style({ opacity: 0 }), animate('.2s ease-out', style({ opacity: 1 }))]),
  transition(':leave', [style({ opacity: 1 }), animate('.2s ease-in', style({ opacity: 0 }))]),
]);

export const fadeRight = trigger('fadeRight', [
  transition(':enter', [
    style({ right: '-100%', opacity: 0 }), // Inicia com a posição -100% à direita e opacidade 0
    animate('.5s ease-out', style({ right: '0', opacity: 1 })), // Anima para a posição 0 à direita e opacidade 1
  ]),
  transition(':leave', [
    animate('.2s ease-in', style({ right: '-100%', opacity: 0 })), // Anima para a posição -100% à direita e opacidade 0
  ]),
]);

export const fadeButton = trigger('fadeButton', [
  transition(':enter', [
    style({ opacity: 0 }), // Starts with height 0 and opacity 0
    animate('.5s ease-out', style({ opacity: 1 })), // Animates to height 100% and opacity 1
  ]),
  transition(':leave', [
    animate('.2s ease-in', style({ height: '0px', opacity: 0 })), // Animates to height 0 and opacity 0
  ]),
]);

export const EaseOutAnimation = trigger('EaseOutAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), // Inicia com a posição -100% à direita e opacidade 0
    animate('.2s ease-in', style({ right: '0', opacity: 1 })), // Anima para a posição 0 à direita e opacidade 1
  ]),
  transition(':leave', [
    animate('.2s ease-in', style({ opacity: 0 })), // Anima para a posição -100% à direita e opacidade 0
  ]),
]);

