/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLevelIndicatorAux<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    dealloc<R = void>(): R;
    customRatingPlaceholderImage<R = NSImage>(): R;
    setCustomRatingPlaceholderImage<R = void, P0 = NSImage>(_v: P0): R;
    customRatingImage<R = NSImage>(): R;
    setCustomRatingImage<R = void, P0 = NSImage>(_v: P0): R;
    customCriticalFillColor<R = NSColor>(): R;
    setCustomCriticalFillColor<R = void, P0 = NSColor>(_v: P0): R;
    customWarningFillColor<R = NSColor>(): R;
    setCustomWarningFillColor<R = void, P0 = NSColor>(_v: P0): R;
    customFillColor<R = NSColor>(): R;
    setCustomFillColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace _NSLevelIndicatorAux {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = _NSLevelIndicatorAux>(): R;
      new: <R = _NSLevelIndicatorAux>() => R;
    }
  }
}
