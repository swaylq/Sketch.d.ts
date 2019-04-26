/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewControllerSheetTransition<T0 = void, T1 = void, T2 = void> extends NSViewControllerPresentationAnimatorObject {}
  namespace NSViewControllerSheetTransition {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewControllerPresentationAnimatorObject {
      alloc<R = NSViewControllerSheetTransition>(): R;
      new: <R = NSViewControllerSheetTransition>() => R;
    }
  }
}

declare const NSViewControllerSheetTransition: cocoa.NSViewControllerSheetTransition.CLASS;
