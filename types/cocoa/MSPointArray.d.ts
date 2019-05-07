/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPointArray<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    treeAsDictionary<R = unknown>(): R;
    description<R = unknown>(): R;
    replacePointAtIndex_withPoint<R = void, P0 = number, P1 = CGPoint>(_replacePointAtIndex: P0, _withPoint: P1): R;
    countOfPoints<R = number>(): R;
    removePoint<R = void, P0 = CGPoint>(_removePoint: P0): R;
    removePointAtIndex<R = void, P0 = number>(_removePointAtIndex: P0): R;
    pointAtIndex<R = CGPoint, P0 = number>(_pointAtIndex: P0): R;
    insertPoint_atIndex<R = void, P0 = CGPoint, P1 = number>(_insertPoint: P0, _atIndex: P1): R;
    addPoint<R = void, P0 = CGPoint>(_addPoint: P0): R;
    points<R = NSMutableArray>(): R;
    setPoints<R = void, P0 = NSMutableArray>(_v: P0): R;
  }
  namespace MSPointArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = MSPointArray>(): R;
      new: <R = MSPointArray>() => R;
    }
  }
}

declare const MSPointArray: cocoa.MSPointArray.CLASS;
