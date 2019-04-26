/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOvalShape<T0 = void, T1 = void, T2 = void> extends _MSOvalShape {
    canFlatten<R = boolean>(): R;
  }
  namespace MSOvalShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSOvalShape {
      alloc<R = MSOvalShape>(): R;
      new: <R = MSOvalShape>() => R;
    }
  }
}

declare const MSOvalShape: cocoa.MSOvalShape.CLASS;
