/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityNavigableStaticTextProtocol<T0 = void, T1 = void, T2 = void> extends NSAccessibilityStaticTextProtocol {
    accessibilityFrameForRange<R = CGRect, P0 = _NSRange>(_accessibilityFrameForRange: P0): R;
    accessibilityRangeForLine<R = _NSRange, P0 = number>(_accessibilityRangeForLine: P0): R;
    accessibilityLineForIndex<R = number, P0 = number>(_accessibilityLineForIndex: P0): R;
    accessibilityStringForRange<R = NSString, P0 = _NSRange>(_accessibilityStringForRange: P0): R;
  }
  namespace NSAccessibilityNavigableStaticTextProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityStaticTextProtocol {}
  }
}
