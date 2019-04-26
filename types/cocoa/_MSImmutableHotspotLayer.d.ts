/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableHotspotLayer<T0 = void, T1 = void, T2 = void> extends MSImmutableLayer {}
  namespace _MSImmutableHotspotLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableLayer {
      alloc<R = _MSImmutableHotspotLayer>(): R;
      new: <R = _MSImmutableHotspotLayer>() => R;
    }
  }
}
