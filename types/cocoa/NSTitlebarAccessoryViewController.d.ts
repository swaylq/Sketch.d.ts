/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitlebarAccessoryViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSAnimationDelegateProtocol, NSAnimatablePropertyContainerProtocol {}
  namespace NSTitlebarAccessoryViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSAnimationDelegateProtocol, NSAnimatablePropertyContainerProtocol {
      alloc<R = NSTitlebarAccessoryViewController>(): R;
      new: <R = NSTitlebarAccessoryViewController>() => R;
    }
  }
}

declare const NSTitlebarAccessoryViewController: cocoa.NSTitlebarAccessoryViewController.CLASS;
