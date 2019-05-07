/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPointInsertion<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSPointInsertion {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSPointInsertion>(): R;
      new: <R = MSPointInsertion>() => R;
      bezierPathOfSegmentAtIndex_layer<R = unknown, P0 = number, P1 = unknown>(_bezierPathOfSegmentAtIndex: P0, _layer: P1): R;
      splitPathSegment_atProposedPoint_layer<R = unknown, P0 = unknown, P1 = CGPoint, P2 = unknown>(_splitPathSegment: P0, _atProposedPoint: P1, _layer: P2): R;
      bezierPathBySplittingPathLayer_atIndex_options_proposedLocation_surroundingCurvePoints<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = CGPoint, P4 = unknown>(_bezierPathBySplittingPathLayer: P0, _atIndex: P1, _options: P2, _proposedLocation: P3, _surroundingCurvePoints: P4): R;
      canInsertAtProposedLocation_index_layer_options<R = boolean, P0 = CGPoint, P1 = number, P2 = unknown, P3 = number>(_canInsertAtProposedLocation: P0, _index: P1, _layer: P2, _options: P3): R;
      insertPointAtLocation_index_layer_options<R = unknown, P0 = CGPoint, P1 = number, P2 = unknown, P3 = number>(_insertPointAtLocation: P0, _index: P1, _layer: P2, _options: P3): R;
    }
  }
}

declare const MSPointInsertion: cocoa.MSPointInsertion.CLASS;
