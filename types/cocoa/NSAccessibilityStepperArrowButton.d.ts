/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityStepperArrowButton<T0 = void, T1 = void, T2 = void> extends NSAccessibilityMockUIElement {
    increments<R = boolean>(): R;
    initWithIncrements_parent<R = unknown, P0 = boolean, P1 = unknown>(_initWithIncrements: P0, _parent: P1): R;
  }
  namespace NSAccessibilityStepperArrowButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityMockUIElement {
      alloc<R = NSAccessibilityStepperArrowButton>(): R;
      new: <R = NSAccessibilityStepperArrowButton>() => R;
      decrementButtonWithParent<R = unknown, P0 = unknown>(_decrementButtonWithParent: P0): R;
      incrementButtonWithParent<R = unknown, P0 = unknown>(_incrementButtonWithParent: P0): R;
    }
  }
}

declare const NSAccessibilityStepperArrowButton: cocoa.NSAccessibilityStepperArrowButton.CLASS;
