/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSAppKitThreadSpecificData<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace __NSAppKitThreadSpecificData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = __NSAppKitThreadSpecificData>(): R;
      new: <R = __NSAppKitThreadSpecificData>() => R;
    }
  }
}
