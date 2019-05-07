/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignmentEngineResultGuide<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    drawWithLineWidth<R = void, P0 = number>(_drawWithLineWidth: P0): R;
    bezierPath<R = unknown>(): R;
    initWithLineSegment<R = unknown, P0 = BCLineSegment>(_initWithLineSegment: P0): R;
    lineSegment<R = BCLineSegment>(): R;
  }
  namespace MSAlignmentEngineResultGuide {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = MSAlignmentEngineResultGuide>(): R;
      new: <R = MSAlignmentEngineResultGuide>() => R;
    }
  }
}

declare const MSAlignmentEngineResultGuide: cocoa.MSAlignmentEngineResultGuide.CLASS;
