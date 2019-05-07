/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNavBannerView<T0 = void, T1 = void, T2 = void> extends NSView {
    _preferredAppearance<R = unknown>(): R;
    _vibrantBlendingStyleForSubtree<R = number>(): R;
    _commonInit<R = void>(): R;
    _currentBannerStyle<R = number>(): R;
    bannerType<R = number>(): R;
    setBannerType<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSNavBannerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSNavBannerView>(): R;
      new: <R = NSNavBannerView>() => R;
    }
  }
}

declare const NSNavBannerView: cocoa.NSNavBannerView.CLASS;
