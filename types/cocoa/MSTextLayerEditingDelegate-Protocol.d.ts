/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextLayerEditingDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    adjustForegroundColor<R = void>(): R;
    adjustTextViewFrame<R = void>(): R;
  }
  namespace MSTextLayerEditingDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
