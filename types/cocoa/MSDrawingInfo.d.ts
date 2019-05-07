/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDrawingInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    isDragging<R = boolean>(): R;
    setIsDragging<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSDrawingInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSDrawingInfo>(): R;
      new: <R = MSDrawingInfo>() => R;
      sharedController<R = unknown>(): R;
    }
  }
}

declare const MSDrawingInfo: cocoa.MSDrawingInfo.CLASS;
