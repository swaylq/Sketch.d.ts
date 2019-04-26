/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerWithBackgroundColorProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    immutableBackgroundColor<R = MSImmutableColor>(): R;
    hasBackgroundColor<R = boolean>(): R;
    setHasBackgroundColor<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSLayerWithBackgroundColorProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
