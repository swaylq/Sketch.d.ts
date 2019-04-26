/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOffsetPathSheet<T0 = void, T1 = void, T2 = void> extends MSCanvasUpdatingSheet {
    setNilValueForKey<R = void, P0 = unknown>(_setNilValueForKey: P0): R;
    offsetLayer<R = void, P0 = unknown>(_offsetLayer: P0): R;
    duplicatelayers<R = unknown, P0 = unknown>(_duplicatelayers: P0): R;
    duplicateLayers<R = boolean>(): R;
    setDuplicateLayers<R = void, P0 = boolean>(_v: P0): R;
    offset<R = number>(): R;
    setOffset<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSOffsetPathSheet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCanvasUpdatingSheet {
      alloc<R = MSOffsetPathSheet>(): R;
      new: <R = MSOffsetPathSheet>() => R;
    }
  }
}

declare const MSOffsetPathSheet: cocoa.MSOffsetPathSheet.CLASS;
