/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTabButtonAccessibilityHelper<T0 = void, T1 = void, T2 = void> extends NSView, NSAccessibilityRadioButtonProtocol {
    parentTabButton<R = NSTabButton>(): R;
  }
  namespace _NSTabButtonAccessibilityHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSAccessibilityRadioButtonProtocol {
      alloc<R = _NSTabButtonAccessibilityHelper>(): R;
      new: <R = _NSTabButtonAccessibilityHelper>() => R;
    }
  }
}
