/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableView<T0 = void, T1 = void, T2 = void> extends NSControl, NSUserInterfaceValidationsProtocol, NSTextViewDelegateProtocol, NSDraggingSourceProtocol, NSAccessibilityTableProtocol {}
  namespace NSTableView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl, NSUserInterfaceValidationsProtocol, NSTextViewDelegateProtocol, NSDraggingSourceProtocol, NSAccessibilityTableProtocol {
      alloc<R = NSTableView>(): R;
      new: <R = NSTableView>() => R;
    }
  }
}

declare const NSTableView: cocoa.NSTableView.CLASS;
