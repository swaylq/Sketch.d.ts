/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCrossfadeView<T0 = void, T1 = void, T2 = void> extends NSView {
    crossFadeAnimation<R = _NSTitleControlCrossFadeAnimation>(): R;
    setCrossFadeAnimation<R = void, P0 = _NSTitleControlCrossFadeAnimation>(_v: P0): R;
  }
  namespace NSCrossfadeView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSCrossfadeView>(): R;
      new: <R = NSCrossfadeView>() => R;
    }
  }
}

declare const NSCrossfadeView: cocoa.NSCrossfadeView.CLASS;
