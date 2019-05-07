/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerChangeObserverProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    layerDidChange<R = void, P0 = MSLayer>(_layerDidChange: P0): R;
  }
  namespace MSLayerChangeObserverProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
