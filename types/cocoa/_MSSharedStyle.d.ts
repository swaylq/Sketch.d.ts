/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSharedStyle<T0 = void, T1 = void, T2 = void> extends MSSharedObject {}
  namespace _MSSharedStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSharedObject {
      alloc<R = _MSSharedStyle>(): R;
      new: <R = _MSSharedStyle>() => R;
    }
  }
}
