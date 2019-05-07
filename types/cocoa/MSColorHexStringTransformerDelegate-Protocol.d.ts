/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorHexStringTransformerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    currentColorValueForTransformer<R = MSColor, P0 = MSColorHexStringTransformer>(_currentColorValueForTransformer: P0): R;
  }
  namespace MSColorHexStringTransformerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
