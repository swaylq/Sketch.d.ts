/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FBBezierPathElementCallback<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    invoke<R = boolean, P0 = FBBezierPathElement>(_invoke: P0): R;
    initWithBlock<R = unknown, P0 = CDUnknownBlockType>(_initWithBlock: P0): R;
  }
  namespace FBBezierPathElementCallback {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = FBBezierPathElementCallback>(): R;
      new: <R = FBBezierPathElementCallback>() => R;
    }
  }
}

declare const FBBezierPathElementCallback: cocoa.FBBezierPathElementCallback.CLASS;
