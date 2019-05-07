/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignmentEngineResult<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    drawAtZoomValue<R = void, P0 = number>(_drawAtZoomValue: P0): R;
    initWithPoint_guides<R = unknown, P0 = CGPoint, P1 = unknown>(_initWithPoint: P0, _guides: P1): R;
    guides<R = NSArray>(): R;
    point<R = CGPoint>(): R;
  }
  namespace MSAlignmentEngineResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = MSAlignmentEngineResult>(): R;
      new: <R = MSAlignmentEngineResult>() => R;
      snappingResultWithPoint<R = unknown, P0 = CGPoint>(_snappingResultWithPoint: P0): R;
    }
  }
}

declare const MSAlignmentEngineResult: cocoa.MSAlignmentEngineResult.CLASS;
