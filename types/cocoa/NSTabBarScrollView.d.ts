/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarScrollView<T0 = void, T1 = void, T2 = void> extends NSScrollView {}
  namespace NSTabBarScrollView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrollView {
      alloc<R = NSTabBarScrollView>(): R;
      new: <R = NSTabBarScrollView>() => R;
    }
  }
}

declare const NSTabBarScrollView: cocoa.NSTabBarScrollView.CLASS;
