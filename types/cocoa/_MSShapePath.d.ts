/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSShapePath<T = any> extends MSModelObject {
    moveCurvePointIndex_toIndex<R = void, P0 = number, P1 = number>(_moveCurvePointIndex: P0, _toIndex: P1): R;
    removeAllCurvePoints<R = void>(): R;
    removeCurvePointsAtIndexes<R = void, P0 = unknown>(_removeCurvePointsAtIndexes: P0): R;
    removeCurvePointAtIndex<R = void, P0 = number>(_removeCurvePointAtIndex: P0): R;
    removeCurvePoint<R = void, P0 = unknown>(_removeCurvePoint: P0): R;
    insertCurvePoints_afterCurvePoint<R = void, P0 = unknown, P1 = unknown>(_insertCurvePoints: P0, _afterCurvePoint: P1): R;
    insertCurvePoint_afterCurvePoint<R = void, P0 = unknown, P1 = unknown>(_insertCurvePoint: P0, _afterCurvePoint: P1): R;
    insertCurvePoints_beforeCurvePoint<R = void, P0 = unknown, P1 = unknown>(_insertCurvePoints: P0, _beforeCurvePoint: P1): R;
    insertCurvePoint_beforeCurvePoint<R = void, P0 = unknown, P1 = unknown>(_insertCurvePoint: P0, _beforeCurvePoint: P1): R;
    insertCurvePoint_atIndex<R = void, P0 = unknown, P1 = number>(_insertCurvePoint: P0, _atIndex: P1): R;
    addCurvePoints<R = void, P0 = unknown>(_addCurvePoints: P0): R;
    addCurvePoint<R = void, P0 = unknown>(_addCurvePoint: P0): R;
    hasDefaultValues<R = boolean>(): R;
    points<R = NSArray>(): R;
    setPoints<R = void, P0 = NSArray>(_v: P0): R;
    pointRadiusBehaviour<R = number>(): R;
    setPointRadiusBehaviour<R = void, P0 = number>(_v: P0): R;
    isClosed<R = boolean>(): R;
    setIsClosed<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _MSShapePath<T = any> extends MSModelObject {
      alloc<R = _MSShapePath>(): R;
      new: <R = _MSShapePath>() => R;
    }
  }
}
