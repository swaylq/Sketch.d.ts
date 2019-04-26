/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSEventHandlerManagerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    eventHandlerManager_didChangeCurrentHandler<R = void, P0 = MSEventHandlerManager, P1 = MSEventHandler>(_eventHandlerManager: P0, _didChangeCurrentHandler: P1): R;
  }
  namespace MSEventHandlerManagerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
