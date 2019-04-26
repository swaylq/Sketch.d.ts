/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSavePanelAuxiliary<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
  }
  namespace NSSavePanelAuxiliary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSSavePanelAuxiliary>(): R;
      new: <R = NSSavePanelAuxiliary>() => R;
    }
  }
}

declare const NSSavePanelAuxiliary: cocoa.NSSavePanelAuxiliary.CLASS;
