/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFakePopoverBackgroundView<T0 = void, T1 = void, T2 = void> extends NSVisualEffectView {}
  namespace NSFakePopoverBackgroundView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSVisualEffectView {
      alloc<R = NSFakePopoverBackgroundView>(): R;
      new: <R = NSFakePopoverBackgroundView>() => R;
    }
  }
}

declare const NSFakePopoverBackgroundView: cocoa.NSFakePopoverBackgroundView.CLASS;
