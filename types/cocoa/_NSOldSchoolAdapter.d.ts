/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOldSchoolAdapter<T0 = void, T1 = void, T2 = void> extends NSSaveAccessoryAdapter {
    accFrameChanged<R = void, P0 = unknown>(_accFrameChanged: P0): R;
    adapt<R = void, P0 = unknown>(_adapt: P0): R;
  }
  namespace _NSOldSchoolAdapter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSaveAccessoryAdapter {
      alloc<R = _NSOldSchoolAdapter>(): R;
      new: <R = _NSOldSchoolAdapter>() => R;
    }
  }
}
