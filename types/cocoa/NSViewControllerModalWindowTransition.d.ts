/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewControllerModalWindowTransition<T0 = void, T1 = void, T2 = void> extends NSViewControllerWindowTransition {}
  namespace NSViewControllerModalWindowTransition {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewControllerWindowTransition {
      alloc<R = NSViewControllerModalWindowTransition>(): R;
      new: <R = NSViewControllerModalWindowTransition>() => R;
    }
  }
}

declare const NSViewControllerModalWindowTransition: cocoa.NSViewControllerModalWindowTransition.CLASS;
