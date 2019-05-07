/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface COFlowDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    didClearEventStack<R = void, P0 = COScript>(_didClearEventStack: P0): R;
  }
  namespace COFlowDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
