/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSingleton<T0 = void, T1 = void, T2 = void> {}
  namespace BCSingleton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const BCSingleton: cocoa.BCSingleton.CLASS;
