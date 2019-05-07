/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNetworkHelper<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSNetworkHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSNetworkHelper>(): R;
      new: <R = MSNetworkHelper>() => R;
      currentIPv4Address<R = unknown>(): R;
      currentSubnet<R = unknown>(): R;
      isValidIPWithPort<R = boolean, P0 = unknown>(_isValidIPWithPort: P0): R;
      isValidIP<R = boolean, P0 = unknown>(_isValidIP: P0): R;
    }
  }
}

declare const MSNetworkHelper: cocoa.MSNetworkHelper.CLASS;
