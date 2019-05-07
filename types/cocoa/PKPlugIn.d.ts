/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface PKPlugIn<T0 = void, T1 = void, T2 = void> {}
  namespace PKPlugIn {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const PKPlugIn: cocoa.PKPlugIn.CLASS;
