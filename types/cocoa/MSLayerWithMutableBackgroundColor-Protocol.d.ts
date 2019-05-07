/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerWithMutableBackgroundColorProtocol<T0 = void, T1 = void, T2 = void> extends MSLayerWithBackgroundColorProtocol {
    backgroundColor<R = MSColor>(): R;
    setBackgroundColor<R = void, P0 = MSColor>(_v: P0): R;
  }
  namespace MSLayerWithMutableBackgroundColorProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSLayerWithBackgroundColorProtocol {}
  }
}
