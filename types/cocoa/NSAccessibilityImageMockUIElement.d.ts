/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityImageMockUIElement<T0 = void, T1 = void, T2 = void> extends NSAccessibilityIndexedMockUIElement {
    accessibilityIsEnabledAttributeSettable<R = boolean>(): R;
    accessibilityEnabledAttribute<R = unknown>(): R;
    accessibilityIsDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityDescriptionAttribute<R = unknown>(): R;
    bounds<R = CGRect>(): R;
    initWithParent_index_bounds_description_help<R = unknown, P0 = unknown, P1 = number, P2 = CGRect, P3 = unknown, P4 = unknown>(_initWithParent: P0, _index: P1, _bounds: P2, _description: P3, _help: P4): R;
  }
  namespace NSAccessibilityImageMockUIElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityIndexedMockUIElement {
      alloc<R = NSAccessibilityImageMockUIElement>(): R;
      new: <R = NSAccessibilityImageMockUIElement>() => R;
    }
  }
}

declare const NSAccessibilityImageMockUIElement: cocoa.NSAccessibilityImageMockUIElement.CLASS;
