/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface instancetype<T0 = void, T1 = void, T2 = void> {}
  namespace instancetype {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const instancetype: cocoa.instancetype.CLASS;
