/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerMoverItem<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = CDUnknownBlockType>(): R;
    initWithLayer_offset<R = unknown, P0 = unknown, P1 = CGVector>(_initWithLayer: P0, _offset: P1): R;
    offset<R = CGVector>(): R;
    layer<R = MSLayer>(): R;
    setLayer<R = void, P0 = MSLayer>(_v: P0): R;
  }
  namespace MSLayerMoverItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSLayerMoverItem>(): R;
      new: <R = MSLayerMoverItem>() => R;
    }
  }
}

declare const MSLayerMoverItem: cocoa.MSLayerMoverItem.CLASS;
