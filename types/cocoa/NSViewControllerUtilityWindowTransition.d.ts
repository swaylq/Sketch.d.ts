/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewControllerUtilityWindowTransition<T0 = void, T1 = void, T2 = void> extends NSViewControllerWindowTransition {}
  namespace NSViewControllerUtilityWindowTransition {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewControllerWindowTransition {
      alloc<R = NSViewControllerUtilityWindowTransition>(): R;
      new: <R = NSViewControllerUtilityWindowTransition>() => R;
    }
  }
}

declare const NSViewControllerUtilityWindowTransition: cocoa.NSViewControllerUtilityWindowTransition.CLASS;
