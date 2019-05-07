/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOObjCRuntime<T0 = void, T1 = void, T2 = void> extends NSObject {
    classes<R = NSArray>(): R;
    protocols<R = NSArray>(): R;
  }
  namespace MOObjCRuntime {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MOObjCRuntime>(): R;
      new: <R = MOObjCRuntime>() => R;
      sharedRuntime<R = MOObjCRuntime>(): R;
    }
  }
}

declare const MOObjCRuntime: cocoa.MOObjCRuntime.CLASS;
