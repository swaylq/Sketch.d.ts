/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityIndexedMockUIElement<T = any> extends NSAccessibilityMockUIElement {
    associatedAccessibilityLabel<R = unknown>(): R;
    setAssociatedAccessibilityLabel<R = void, P0 = unknown>(_setAssociatedAccessibilityLabel: P0): R;
    index<R = number>(): R;
    initWithRole_subrole_index_parent<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_initWithRole: P0, _subrole: P1, _index: P2, _parent: P3): R;
    initWithRole_index_parent<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithRole: P0, _index: P1, _parent: P2): R;
  }
  namespace classes {
    export interface NSAccessibilityIndexedMockUIElement<T = any> extends NSAccessibilityMockUIElement {
      alloc<R = NSAccessibilityIndexedMockUIElement>(): R;
      new: <R = NSAccessibilityIndexedMockUIElement>() => R;
      elementWithRole_subrole_index_parent<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_elementWithRole: P0, _subrole: P1, _index: P2, _parent: P3): R;
      elementWithRole_index_parent<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_elementWithRole: P0, _index: P1, _parent: P2): R;
    }
  }
}

declare const NSAccessibilityIndexedMockUIElement: cocoa.classes.NSAccessibilityIndexedMockUIElement;