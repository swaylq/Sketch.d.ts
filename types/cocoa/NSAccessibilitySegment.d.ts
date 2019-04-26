/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilitySegment<T0 = void, T1 = void, T2 = void> extends NSAccessibilityIndexedMockUIElement {
    _accessibilityPerformClickAction<R = void, P0 = unknown>(__accessibilityPerformClickAction: P0): R;
    accessibilityIsChildrenAttributeSettable<R = boolean>(): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    accessibilityChildrenInNavigationOrderAttribute<R = unknown>(): R;
    accessibilityIsEnabledAttributeSettable<R = boolean>(): R;
    accessibilityEnabledAttribute<R = unknown>(): R;
    accessibilityIsTitleAttributeSettable<R = boolean>(): R;
    accessibilityTitleAttribute<R = unknown>(): R;
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    accessibilityValueAttribute<R = unknown>(): R;
    accessibilityIsDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityDescriptionAttribute<R = unknown>(): R;
    segmentedCell<R = unknown>(): R;
    initWithIndex_parent<R = unknown, P0 = number, P1 = unknown>(_initWithIndex: P0, _parent: P1): R;
  }
  namespace NSAccessibilitySegment {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityIndexedMockUIElement {
      alloc<R = NSAccessibilitySegment>(): R;
      new: <R = NSAccessibilitySegment>() => R;
      segmentWithIndex_parent<R = unknown, P0 = number, P1 = unknown>(_segmentWithIndex: P0, _parent: P1): R;
    }
  }
}

declare const NSAccessibilitySegment: cocoa.NSAccessibilitySegment.CLASS;
