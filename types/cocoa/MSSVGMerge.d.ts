/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGMerge<T0 = void, T1 = void, T2 = void> extends MSSVGfeFilterPrimitive {
    addMergeNodeNamed<R = void, P0 = unknown>(_addMergeNodeNamed: P0): R;
  }
  namespace MSSVGMerge {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSVGfeFilterPrimitive {
      alloc<R = MSSVGMerge>(): R;
      new: <R = MSSVGMerge>() => R;
    }
  }
}

declare const MSSVGMerge: cocoa.MSSVGMerge.CLASS;
