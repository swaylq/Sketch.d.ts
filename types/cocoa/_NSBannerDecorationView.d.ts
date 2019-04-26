/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBannerDecorationView<T0 = void, T1 = void, T2 = void> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
    drawsBottomSeparator<R = boolean>(): R;
    setDrawsBottomSeparator<R = void, P0 = boolean>(_v: P0): R;
    drawsTopSeparator<R = boolean>(): R;
    setDrawsTopSeparator<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _NSBannerDecorationView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSBannerDecorationView>(): R;
      new: <R = _NSBannerDecorationView>() => R;
    }
  }
}
