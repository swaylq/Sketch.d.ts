/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface OpaqueWindowPtr<T0 = void, T1 = void, T2 = void> {}
  namespace OpaqueWindowPtr {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const OpaqueWindowPtr: cocoa.OpaqueWindowPtr.CLASS;
