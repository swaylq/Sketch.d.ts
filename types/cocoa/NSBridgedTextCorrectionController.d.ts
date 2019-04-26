/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBridgedTextCorrectionController<T0 = void, T1 = void, T2 = void> extends NSResponder {
    alternativesString<R = NSMutableAttributedString>(): R;
    setAlternativesString<R = void, P0 = NSMutableAttributedString>(_v: P0): R;
  }
  namespace NSBridgedTextCorrectionController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSResponder {
      alloc<R = NSBridgedTextCorrectionController>(): R;
      new: <R = NSBridgedTextCorrectionController>() => R;
    }
  }
}

declare const NSBridgedTextCorrectionController: cocoa.NSBridgedTextCorrectionController.CLASS;
