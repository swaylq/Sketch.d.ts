/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOperatingSystem<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSOperatingSystem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSOperatingSystem>(): R;
      new: <R = MSOperatingSystem>() => R;
      systemVersionString<R = unknown>(): R;
      isOperatingSystemAtLeastVersion<R = boolean, P0 = unknown>(_isOperatingSystemAtLeastVersion: P0): R;
      operatingSystemVersion<R = unknown>(): R;
    }
  }
}

declare const MSOperatingSystem: cocoa.MSOperatingSystem.CLASS;
