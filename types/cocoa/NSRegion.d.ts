/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRegion<T0 = void, T1 = void, T2 = void> extends NSObject {
    stroke<R = void>(): R;
    fill<R = void>(): R;
    addClip<R = void>(): R;
    translateBy<R = void, P0 = CGPoint>(_translateBy: P0): R;
    xorRegion<R = void, P0 = unknown>(_xorRegion: P0): R;
    xorRect<R = void, P0 = CGRect>(_xorRect: P0): R;
    intersectRegion<R = void, P0 = unknown>(_intersectRegion: P0): R;
    intersectRect<R = void, P0 = CGRect>(_intersectRect: P0): R;
    subtractRegion<R = void, P0 = unknown>(_subtractRegion: P0): R;
    subtractRect<R = void, P0 = CGRect>(_subtractRect: P0): R;
    addRegion<R = void, P0 = unknown>(_addRegion: P0): R;
    addRect<R = void, P0 = CGRect>(_addRect: P0): R;
    setRegion<R = void, P0 = unknown>(_setRegion: P0): R;
    setRect<R = void, P0 = CGRect>(_setRect: P0): R;
    setEmpty<R = void>(): R;
    enumerateRects<R = void, P0 = CDUnknownBlockType>(_enumerateRects: P0): R;
    largestRect<R = CGRect>(): R;
    isRectangular<R = boolean>(): R;
    getRects_count<R = void, P0 = CGRect, P1 = number>(_getRects: P0, _count: P1): R;
    intersectsRegion<R = boolean, P0 = unknown>(_intersectsRegion: P0): R;
    intersectsRect<R = boolean, P0 = CGRect>(_intersectsRect: P0): R;
    containsRegion<R = boolean, P0 = unknown>(_containsRegion: P0): R;
    containsRect<R = boolean, P0 = CGRect>(_containsRect: P0): R;
    bounds<R = CGRect>(): R;
    isEmpty<R = boolean>(): R;
    cgsRegionObj<R = void>(): R;
    mutableCopy<R = unknown>(): R;
    copy<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithBitmapImageRep_atX_y_flip<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = boolean>(_initWithBitmapImageRep: P0, _atX: P1, _y: P2, _flip: P3): R;
    initWithCGSRegionObj<R = unknown, P0 = CGSRegionObject>(_initWithCGSRegionObj: P0): R;
    initWithRects_count<R = unknown, P0 = CGRect, P1 = number>(_initWithRects: P0, _count: P1): R;
    initWithRect<R = unknown, P0 = CGRect>(_initWithRect: P0): R;
    description<R = unknown>(): R;
  }
  namespace NSRegion {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSRegion>(): R;
      new: <R = NSRegion>() => R;
    }
  }
}

declare const NSRegion: cocoa.NSRegion.CLASS;
