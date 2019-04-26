/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface DeprecatedChannelState<T0 = void, T1 = void, T2 = void> extends NSObject {
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace DeprecatedChannelState {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = DeprecatedChannelState>(): R;
      new: <R = DeprecatedChannelState>() => R;
    }
  }
}

declare const DeprecatedChannelState: cocoa.DeprecatedChannelState.CLASS;
