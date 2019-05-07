/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSmartGuideDrawing<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSSmartGuideDrawing {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSSmartGuideDrawing>(): R;
      new: <R = MSSmartGuideDrawing>() => R;
      resetSmartGuideColor<R = void>(): R;
      smartGuideColor<R = unknown>(): R;
    }
  }
}

declare const MSSmartGuideDrawing: cocoa.MSSmartGuideDrawing.CLASS;
