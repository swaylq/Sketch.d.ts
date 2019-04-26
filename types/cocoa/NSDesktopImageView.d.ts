/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDesktopImageView<T0 = void, T1 = void, T2 = void> extends NSView {
    _setDesktopImageBaseOnWorkspace<R = void>(): R;
    _startLoadingDesktopPicture<R = void>(): R;
    _forceReloadDesktopPicture<R = void>(): R;
    displayID<R = number>(): R;
    _stopObservingWindow<R = void>(): R;
    _screenChanged<R = void, P0 = unknown>(__screenChanged: P0): R;
    _startObservingWindow<R = void>(): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace NSDesktopImageView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSDesktopImageView>(): R;
      new: <R = NSDesktopImageView>() => R;
    }
  }
}

declare const NSDesktopImageView: cocoa.NSDesktopImageView.CLASS;
