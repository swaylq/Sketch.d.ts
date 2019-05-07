/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCColorPreview<T0 = void, T1 = void, T2 = void> extends NSPopUpButton, NSMenuDelegateProtocol {
    cxx_destruct<R = void>(): R;
    drawCheckerboard<R = void>(): R;
    initInBounds<R = unknown, P0 = CGRect>(_initInBounds: P0): R;
    delegate<R = BCColorPreviewDelegate>(): R;
    setDelegate<R = void, P0 = BCColorPreviewDelegate>(_v: P0): R;
    color<R = MSFlexibleColor>(): R;
    setColor<R = void, P0 = MSFlexibleColor>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace BCColorPreview {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButton, NSMenuDelegateProtocol {
      alloc<R = BCColorPreview>(): R;
      new: <R = BCColorPreview>() => R;
    }
  }
}

declare const BCColorPreview: cocoa.BCColorPreview.CLASS;
