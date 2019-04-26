/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAccessoryAnimationData<T0 = void, T1 = void, T2 = void> extends NSObject {
    animationsDictionary<R = NSDictionary>(): R;
    setAnimationsDictionary<R = void, P0 = NSDictionary>(_v: P0): R;
  }
  namespace _NSAccessoryAnimationData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSAccessoryAnimationData>(): R;
      new: <R = _NSAccessoryAnimationData>() => R;
    }
  }
}
