/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCellTrackingData<T0 = void, T1 = void, T2 = void> extends NSObject {
    cellNeedsDisplay<R = boolean>(): R;
    setCellNeedsDisplay<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _NSCellTrackingData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSCellTrackingData>(): R;
      new: <R = _NSCellTrackingData>() => R;
    }
  }
}
