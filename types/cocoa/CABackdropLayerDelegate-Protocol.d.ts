/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CABackdropLayerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends CALayerDelegateProtocol {
    backdropLayerStatisticsDidChange<R = void, P0 = CABackdropLayer>(_backdropLayerStatisticsDidChange: P0): R;
  }
  namespace CABackdropLayerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CALayerDelegateProtocol {}
  }
}
