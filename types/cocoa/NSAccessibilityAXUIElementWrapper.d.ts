/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityAXUIElementWrapper<T0 = void, T1 = void, T2 = void> extends NSObject {
    hash<R = number>(): R;
    accessibilityTopLevelUIElementAttributeValueHelper<R = unknown>(): R;
    accessibilityWindowAttributeValueHelper<R = unknown>(): R;
    accessibilityAttributeValue<R = unknown, P0 = unknown>(_accessibilityAttributeValue: P0): R;
    accessibilityAttributeNames<R = unknown>(): R;
    accessibilityIsIgnored<R = boolean>(): R;
    AXUIElement<R = __AXUIElement>(): R;
    dealloc<R = void>(): R;
    initWithAXUIElement<R = unknown, P0 = __AXUIElement>(_initWithAXUIElement: P0): R;
  }
  namespace NSAccessibilityAXUIElementWrapper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAccessibilityAXUIElementWrapper>(): R;
      new: <R = NSAccessibilityAXUIElementWrapper>() => R;
    }
  }
}

declare const NSAccessibilityAXUIElementWrapper: cocoa.NSAccessibilityAXUIElementWrapper.CLASS;
