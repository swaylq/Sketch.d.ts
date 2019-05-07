/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface COSTarget<T0 = void, T1 = void, T2 = void> extends NSObject {
    initWithJSFunction<R = instancetype, P0 = MOJavaScriptObject>(_initWithJSFunction: P0): R;
    callAction<R = void, P0 = unknown>(_callAction: P0): R;
    action<R = string>(): R;
    jsFunction<R = MOJavaScriptObject>(): R;
    setJsFunction<R = void, P0 = MOJavaScriptObject>(_v: P0): R;
    callCount<R = NSUInteger>(): R;
    setCallCount<R = void, P0 = NSUInteger>(_v: P0): R;
  }
  namespace COSTarget {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = COSTarget>(): R;
      new: <R = COSTarget>() => R;
      targetWithJSFunction<R = instancetype, P0 = MOJavaScriptObject>(_targetWithJSFunction: P0): R;
    }
  }
}

declare const COSTarget: cocoa.COSTarget.CLASS;
