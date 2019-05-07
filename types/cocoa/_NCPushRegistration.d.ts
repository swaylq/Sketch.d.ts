/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NCPushRegistration<T0 = void, T1 = void, T2 = void> extends NSObject {
    types<R = number>(): R;
    setTypes<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NCPushRegistration {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NCPushRegistration>(): R;
      new: <R = _NCPushRegistration>() => R;
    }
  }
}
