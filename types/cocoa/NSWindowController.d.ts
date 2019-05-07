/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowController<T0 = void, T1 = void, T2 = void> extends NSResponder, NSSeguePerformingProtocol {}
  namespace NSWindowController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSResponder, NSSeguePerformingProtocol {
      alloc<R = NSWindowController>(): R;
      new: <R = NSWindowController>() => R;
      _doneWithLocations<R = void>(): R;
    }
  }
}

declare const NSWindowController: cocoa.NSWindowController.CLASS;
