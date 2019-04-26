/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityStaticTextProtocol<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElementProtocol {
    accessibilityValue<R = NSString>(): R;
    accessibilityVisibleCharacterRange<R = _NSRange>(): R;
    accessibilityAttributedStringForRange<R = NSAttributedString, P0 = _NSRange>(_accessibilityAttributedStringForRange: P0): R;
  }
  namespace NSAccessibilityStaticTextProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElementProtocol {}
  }
}
