/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface COSInterval<T0 = void, T1 = void, T2 = void> extends COSFiber {
    cancel<R = void>(): R;
    jsfunc<R = MOJavaScriptObject>(): R;
    setJsfunc<R = void, P0 = MOJavaScriptObject>(_v: P0): R;
  }
  namespace COSInterval {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends COSFiber {
      alloc<R = COSInterval>(): R;
      new: <R = COSInterval>() => R;
      scheduleWithInterval_cocoaScript_jsFunction_repeat<R = unknown, P0 = NSTimeInterval, P1 = COScript, P2 = MOJavaScriptObject, P3 = boolean>(_scheduleWithInterval: P0, _cocoaScript: P1, _jsFunction: P2, _repeat: P3): R;
    }
  }
}

declare const COSInterval: cocoa.COSInterval.CLASS;
