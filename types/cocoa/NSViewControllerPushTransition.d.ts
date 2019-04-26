/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewControllerPushTransition<T0 = void, T1 = void, T2 = void> extends NSViewControllerPresentationAnimatorObject {}
  namespace NSViewControllerPushTransition {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewControllerPresentationAnimatorObject {
      alloc<R = NSViewControllerPushTransition>(): R;
      new: <R = NSViewControllerPushTransition>() => R;
    }
  }
}

declare const NSViewControllerPushTransition: cocoa.NSViewControllerPushTransition.CLASS;
