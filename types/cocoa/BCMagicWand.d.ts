/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCMagicWand<T0 = void, T1 = void, T2 = void> extends NSOperation {
    cxx_destruct<R = void>(): R;
    nextUnvisitedPoint<R = CGPoint>(): R;
    pushVisit<R = void, P0 = CGPoint>(_pushVisit: P0): R;
    collectVisitsForPoint<R = void, P0 = CGPoint>(_collectVisitsForPoint: P0): R;
    pointMatch<R = boolean, P0 = CGPoint>(_pointMatch: P0): R;
    run<R = void>(): R;
    setUpMaskImage<R = void>(): R;
    nextVisits<R = number>(): R;
    setNextVisits<R = void, P0 = number>(_v: P0): R;
    planned<R = string>(): R;
    setPlanned<R = void, P0 = string>(_v: P0): R;
    reference<R = BCPixel>(): R;
    setReference<R = void, P0 = BCPixel>(_v: P0): R;
    visitedIndex<R = number>(): R;
    setVisitedIndex<R = void, P0 = number>(_v: P0): R;
    unvisitedIndex<R = number>(): R;
    setUnvisitedIndex<R = void, P0 = number>(_v: P0): R;
    mask<R = BCPixel>(): R;
    setMask<R = void, P0 = BCPixel>(_v: P0): R;
    pixels<R = BCPixel>(): R;
    setPixels<R = void, P0 = BCPixel>(_v: P0): R;
    maskImage<R = NSBitmapImageRep>(): R;
    setMaskImage<R = void, P0 = NSBitmapImageRep>(_v: P0): R;
    wandCompletionBlock<R = CDUnknownBlockType>(): R;
    setWandCompletionBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    bitmap<R = NSBitmapImageRep>(): R;
    setBitmap<R = void, P0 = NSBitmapImageRep>(_v: P0): R;
    tolerance<R = number>(): R;
    setTolerance<R = void, P0 = number>(_v: P0): R;
    startPoint<R = CGPoint>(): R;
    setStartPoint<R = void, P0 = CGPoint>(_v: P0): R;
  }
  namespace BCMagicWand {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOperation {
      alloc<R = BCMagicWand>(): R;
      new: <R = BCMagicWand>() => R;
    }
  }
}

declare const BCMagicWand: cocoa.BCMagicWand.CLASS;
