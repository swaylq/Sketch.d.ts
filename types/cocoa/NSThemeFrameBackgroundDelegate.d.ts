/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSThemeFrameBackgroundDelegate<T0 = void, T1 = void, T2 = void> extends NSObject, CALayerDelegateProtocol {
    layer_shouldInheritContentsScale_fromWindow<R = boolean, P0 = unknown, P1 = number, P2 = unknown>(_layer: P0, _shouldInheritContentsScale: P1, _fromWindow: P2): R;
    themeFrame<R = NSThemeFrame>(): R;
    setThemeFrame<R = void, P0 = NSThemeFrame>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSThemeFrameBackgroundDelegate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, CALayerDelegateProtocol {
      alloc<R = NSThemeFrameBackgroundDelegate>(): R;
      new: <R = NSThemeFrameBackgroundDelegate>() => R;
    }
  }
}

declare const NSThemeFrameBackgroundDelegate: cocoa.NSThemeFrameBackgroundDelegate.CLASS;
