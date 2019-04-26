/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityPathComponent<T0 = void, T1 = void, T2 = void> extends NSAccessibilityIndexedMockUIElement {
    accessibilityIsEnabledAttributeSettable<R = boolean>(): R;
    accessibilityEnabledAttribute<R = unknown>(): R;
    accessibilityIsURLAttributeSettable<R = boolean>(): R;
    accessibilityURLAttribute<R = unknown>(): R;
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    accessibilityValueAttribute<R = unknown>(): R;
    pathComponentCell<R = unknown>(): R;
    initWithPathComponentCell_index_parent<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithPathComponentCell: P0, _index: P1, _parent: P2): R;
  }
  namespace NSAccessibilityPathComponent {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityIndexedMockUIElement {
      alloc<R = NSAccessibilityPathComponent>(): R;
      new: <R = NSAccessibilityPathComponent>() => R;
      pathComponentWithPathComponentCell_index_parent<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_pathComponentWithPathComponentCell: P0, _index: P1, _parent: P2): R;
    }
  }
}

declare const NSAccessibilityPathComponent: cocoa.NSAccessibilityPathComponent.CLASS;
