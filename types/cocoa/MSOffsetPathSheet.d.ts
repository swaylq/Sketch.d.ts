/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOffsetPathSheet<T = any> extends cocoa.MSCanvasUpdatingSheet {
    setNilValueForKey<R = void, P0 = unknown>(_setNilValueForKey: P0): R;
    offsetLayer<R = void, P0 = unknown>(_offsetLayer: P0): R;
    duplicatelayers<R = unknown, P0 = unknown>(_duplicatelayers: P0): R;
    duplicateLayers<R = boolean>(): R;
    setDuplicateLayers<R = void, P0 = boolean>(_v: P0): R;
    offset<R = number>(): R;
    setOffset<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSOffsetPathSheet<T = any> extends cocoa.classes.MSCanvasUpdatingSheet {
      alloc<R = MSOffsetPathSheet>(): R;
      new: <R = MSOffsetPathSheet>() => R;
    }
  }
}

declare const MSOffsetPathSheet: cocoa.classes.MSOffsetPathSheet;
