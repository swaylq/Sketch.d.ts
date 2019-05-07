/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAccessibilityOverriddenAttributeUIElementValue<T0 = void, T1 = void, T2 = void> extends NSObject {
    UIElementValue<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithUIElementValue<R = unknown, P0 = unknown>(_initWithUIElementValue: P0): R;
  }
  namespace _NSAccessibilityOverriddenAttributeUIElementValue {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSAccessibilityOverriddenAttributeUIElementValue>(): R;
      new: <R = _NSAccessibilityOverriddenAttributeUIElementValue>() => R;
    }
  }
}
