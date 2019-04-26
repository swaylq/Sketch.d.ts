/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCoreUIImageRep<T0 = void, T1 = void, T2 = void> extends NSImageRep {
    coreUIDrawOptions<R = __CFDictionary>(): R;
    boundingRectWithExtraEffectsForState_backgroundStyle_context<R = CGRect, P0 = number, P1 = number, P2 = unknown>(_boundingRectWithExtraEffectsForState: P0, _backgroundStyle: P1, _context: P2): R;
    setTemplate<R = void, P0 = boolean>(_setTemplate: P0): R;
    isTemplate<R = boolean>(): R;
    setCGImage<R = void, P0 = CGImage>(_setCGImage: P0): R;
    initWithCGImage<R = unknown, P0 = CGImage>(_initWithCGImage: P0): R;
    initWithCocoaName<R = unknown, P0 = unknown>(_initWithCocoaName: P0): R;
    initWithCoreUIDrawOptions_size<R = unknown, P0 = __CFDictionary, P1 = CGSize>(_initWithCoreUIDrawOptions: P0, _size: P1): R;
    suppressesCache<R = boolean>(): R;
    setSuppressesCache<R = void, P0 = boolean>(_v: P0): R;
    backgroundStyle<R = number>(): R;
    setBackgroundStyle<R = void, P0 = number>(_v: P0): R;
    tintColor<R = CGColor>(): R;
    setTintColor<R = void, P0 = CGColor>(_v: P0): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSCoreUIImageRep {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageRep {
      alloc<R = NSCoreUIImageRep>(): R;
      new: <R = NSCoreUIImageRep>() => R;
      imageRepWithCGImage<R = unknown, P0 = CGImage>(_imageRepWithCGImage: P0): R;
      imageRepWithCocoaName<R = unknown, P0 = unknown>(_imageRepWithCocoaName: P0): R;
    }
  }
}

declare const NSCoreUIImageRep: cocoa.NSCoreUIImageRep.CLASS;
