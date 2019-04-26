/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPageController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSAnimatablePropertyContainerProtocol, NSCodingProtocol {}
  namespace NSPageController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSAnimatablePropertyContainerProtocol, NSCodingProtocol {
      alloc<R = NSPageController>(): R;
      new: <R = NSPageController>() => R;
    }
  }
}

declare const NSPageController: cocoa.NSPageController.CLASS;
