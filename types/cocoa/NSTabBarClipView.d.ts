/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarClipView<T0 = void, T1 = void, T2 = void> extends NSClipView {
    shouldChangeNextScrollFromVerticalToHorizontal<R = boolean>(): R;
    setShouldChangeNextScrollFromVerticalToHorizontal<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSTabBarClipView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSClipView {
      alloc<R = NSTabBarClipView>(): R;
      new: <R = NSTabBarClipView>() => R;
    }
  }
}

declare const NSTabBarClipView: cocoa.NSTabBarClipView.CLASS;
