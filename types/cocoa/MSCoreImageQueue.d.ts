/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCoreImageQueue<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSCoreImageQueue {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSCoreImageQueue>(): R;
      new: <R = MSCoreImageQueue>() => R;
      averageLuminanceOfImage<R = number, P0 = CGImage>(_averageLuminanceOfImage: P0): R;
      imageWithWhiteBackground<R = unknown, P0 = unknown>(_imageWithWhiteBackground: P0): R;
      applyEffect_fromSource_toImage<R = unknown, P0 = number, P1 = unknown, P2 = CGImage>(_applyEffect: P0, _fromSource: P1, _toImage: P2): R;
      cachedImage_withEffect_fromObject_colorSpace<R = unknown, P0 = CGImage, P1 = number, P2 = unknown, P3 = CGColorSpace>(_cachedImage: P0, _withEffect: P1, _fromObject: P2, _colorSpace: P3): R;
      drawImage_withEffect_inRect_fromObject_context_colorSpace_options<R = void, P0 = CGImage, P1 = number, P2 = CGRect, P3 = unknown, P4 = CGContext, P5 = CGColorSpace, P6 = number>(_drawImage: P0, _withEffect: P1, _inRect: P2, _fromObject: P3, _context: P4, _colorSpace: P5, _options: P6): R;
      initialize<R = void>(): R;
    }
  }
}

declare const MSCoreImageQueue: cocoa.MSCoreImageQueue.CLASS;
