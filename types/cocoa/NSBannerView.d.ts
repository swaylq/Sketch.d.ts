/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBannerView<T0 = void, T1 = void, T2 = void> extends NSView {
    _preferredAppearance<R = unknown>(): R;
    _vibrantBlendingStyleForSubtree<R = number>(): R;
    drawsBackground<R = boolean>(): R;
    setDrawsBackground<R = void, P0 = boolean>(_setDrawsBackground: P0): R;
    _updateBlurViewIfNeeded<R = void>(): R;
    commonInit<R = void>(): R;
    bannerStyle<R = number>(): R;
    setBannerStyle<R = void, P0 = number>(_v: P0): R;
    dividerPosition<R = number>(): R;
    setDividerPosition<R = void, P0 = number>(_v: P0): R;
    contiguousWithTitlebar<R = boolean>(): R;
    setContiguousWithTitlebar<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSBannerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSBannerView>(): R;
      new: <R = NSBannerView>() => R;
      _heightOfStyle<R = number, P0 = number>(__heightOfStyle: P0): R;
    }
  }
}

declare const NSBannerView: cocoa.NSBannerView.CLASS;
