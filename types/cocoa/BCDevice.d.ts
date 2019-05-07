/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCDevice<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace BCDevice {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = BCDevice>(): R;
      new: <R = BCDevice>() => R;
      macModel<R = unknown>(): R;
      currentOSVersion<R = unknown>(): R;
    }
  }
}

declare const BCDevice: cocoa.BCDevice.CLASS;
