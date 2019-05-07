/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOwningObserverProtocol<T0 = void, T1 = void, T2 = void> extends NSObserverProtocol {
    setObservation<R = void, P0 = NSObservation>(_setObservation: P0): R;
  }
  namespace NSOwningObserverProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObserverProtocol {}
  }
}
