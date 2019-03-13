/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityButtonProtocol<T = any> extends NSAccessibilityElementProtocol {
    accessibilityPerformPress<R = boolean>(): R;
    accessibilityLabel<R = NSString>(): R;
  }
  namespace classes {
    export interface NSAccessibilityButtonProtocol<T = any> extends NSAccessibilityElementProtocol {  }
  }
}