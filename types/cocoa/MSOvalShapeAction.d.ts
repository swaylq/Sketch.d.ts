/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOvalShapeAction<T0 = void, T1 = void, T2 = void> extends MSBaseShapeAction {
    ovalShape<R = void, P0 = unknown>(_ovalShape: P0): R;
  }
  namespace MSOvalShapeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseShapeAction {
      alloc<R = MSOvalShapeAction>(): R;
      new: <R = MSOvalShapeAction>() => R;
    }
  }
}

declare const MSOvalShapeAction: cocoa.MSOvalShapeAction.CLASS;
