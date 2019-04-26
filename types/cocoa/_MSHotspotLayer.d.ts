/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSHotspotLayer<T0 = void, T1 = void, T2 = void> extends MSLayer {}
  namespace _MSHotspotLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSLayer {
      alloc<R = _MSHotspotLayer>(): R;
      new: <R = _MSHotspotLayer>() => R;
    }
  }
}
