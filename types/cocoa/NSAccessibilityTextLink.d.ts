/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityTextLink<T0 = void, T1 = void, T2 = void> extends NSAccessibilityMockUIElement {
    accessibilityIsURLAttributeSettable<R = boolean>(): R;
    accessibilityURLAttribute<R = unknown>(): R;
    accessibilityIsTitleAttributeSettable<R = boolean>(): R;
    accessibilityTitleAttribute<R = unknown>(): R;
    characterRange<R = _NSRange>(): R;
    initWithCharacterRange_parent<R = unknown, P0 = _NSRange, P1 = unknown>(_initWithCharacterRange: P0, _parent: P1): R;
  }
  namespace NSAccessibilityTextLink {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityMockUIElement {
      alloc<R = NSAccessibilityTextLink>(): R;
      new: <R = NSAccessibilityTextLink>() => R;
      linkWithCharacterRange_parent<R = unknown, P0 = _NSRange, P1 = unknown>(_linkWithCharacterRange: P0, _parent: P1): R;
    }
  }
}

declare const NSAccessibilityTextLink: cocoa.NSAccessibilityTextLink.CLASS;
