/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShapeChange<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    executeWithContext<R = void, P0 = unknown>(_executeWithContext: P0): R;
  }
  namespace MSShapeChange {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSShapeChange>(): R;
      new: <R = MSShapeChange>() => R;
      customActionWithBlock<R = unknown, P0 = CDUnknownBlockType>(_customActionWithBlock: P0): R;
      deleteHandle<R = unknown>(): R;
      distributeAlongAxis<R = unknown, P0 = number>(_distributeAlongAxis: P0): R;
      alignToKey<R = unknown, P0 = unknown>(_alignToKey: P0): R;
      guessControlPointsForPointAtIndex_shape<R = boolean, P0 = number, P1 = unknown>(_guessControlPointsForPointAtIndex: P0, _shape: P1): R;
      changeToCurveMode<R = unknown, P0 = number>(_changeToCurveMode: P0): R;
      nudgeWithKey_distance_flags<R = unknown, P0 = number, P1 = number, P2 = number>(_nudgeWithKey: P0, _distance: P1, _flags: P2): R;
      moveHandle_toLocation_onAxis<R = unknown, P0 = unknown, P1 = number, P2 = number>(_moveHandle: P0, _toLocation: P1, _onAxis: P2): R;
      moveToLocation_onAxis<R = unknown, P0 = number, P1 = number>(_moveToLocation: P0, _onAxis: P1): R;
      moveByOffset_options<R = unknown, P0 = CGSize, P1 = number>(_moveByOffset: P0, _options: P1): R;
      moveHandle_ofCurvePoint_toLocation_options<R = void, P0 = number, P1 = unknown, P2 = CGPoint, P3 = number>(_moveHandle: P0, _ofCurvePoint: P1, _toLocation: P2, _options: P3): R;
      moveToPoint_options<R = unknown, P0 = CGPoint, P1 = number>(_moveToPoint: P0, _options: P1): R;
    }
  }
}

declare const MSShapeChange: cocoa.MSShapeChange.CLASS;
