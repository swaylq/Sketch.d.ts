/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDimingView<T = any> extends cocoa.NSView {}
  namespace classes {
    export interface NSDimingView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSDimingView>(): R;
      new: <R = NSDimingView>() => R;
    }
  }
}

declare const NSDimingView: cocoa.classes.NSDimingView;
