/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSInvisibleScroller<T0 = void, T1 = void, T2 = void> extends NSScroller {}
  namespace _NSInvisibleScroller {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScroller {
      alloc<R = _NSInvisibleScroller>(): R;
      new: <R = _NSInvisibleScroller>() => R;
    }
  }
}
