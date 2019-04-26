/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilitySliderValueIndicator<T0 = void, T1 = void, T2 = void> extends NSAccessibilityMockUIElement {
    accessibilitySetValueAttribute<R = void, P0 = unknown>(_accessibilitySetValueAttribute: P0): R;
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    accessibilityValueAttribute<R = unknown>(): R;
  }
  namespace NSAccessibilitySliderValueIndicator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityMockUIElement {
      alloc<R = NSAccessibilitySliderValueIndicator>(): R;
      new: <R = NSAccessibilitySliderValueIndicator>() => R;
    }
  }
}

declare const NSAccessibilitySliderValueIndicator: cocoa.NSAccessibilitySliderValueIndicator.CLASS;
