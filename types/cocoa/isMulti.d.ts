/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface isMulti<T0 = void, T1 = void, T2 = void> {}
  namespace isMulti {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const isMulti: cocoa.isMulti.CLASS;
