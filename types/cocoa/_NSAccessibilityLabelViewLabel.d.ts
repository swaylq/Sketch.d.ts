/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAccessibilityLabelViewLabel<T0 = void, T1 = void, T2 = void> extends NSAccessibilityIndexedMockUIElement {
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    accessibilityValueAttribute<R = unknown>(): R;
    accessibilityIsEnabledAttributeSettable<R = boolean>(): R;
    accessibilityEnabledAttribute<R = unknown>(): R;
    accessibilityIsDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityDescriptionAttribute<R = unknown>(): R;
  }
  namespace _NSAccessibilityLabelViewLabel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityIndexedMockUIElement {
      alloc<R = _NSAccessibilityLabelViewLabel>(): R;
      new: <R = _NSAccessibilityLabelViewLabel>() => R;
      labelWithIndex_parent<R = unknown, P0 = number, P1 = unknown>(_labelWithIndex: P0, _parent: P1): R;
    }
  }
}
