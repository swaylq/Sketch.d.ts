/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityCheckBoxProtocol<T = any> extends cocoa.NSAccessibilityButtonProtocol {
    accessibilityValue<R = cocoa.NSNumber>(): R;
  }
  namespace classes {
    export interface NSAccessibilityCheckBoxProtocol<T = any> extends cocoa.classes.NSAccessibilityButtonProtocol {  }
  }
}

declare const NSAccessibilityCheckBoxProtocol: cocoa.classes.NSAccessibilityCheckBoxProtocol;
