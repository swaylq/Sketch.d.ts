/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorComponentsControllerDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    colorComponentsControllerModelDidChange<R = void, P0 = MSColorComponentsController>(_colorComponentsControllerModelDidChange: P0): R;
    colorComponentsControllerColorDidChange<R = void, P0 = MSColorComponentsController>(_colorComponentsControllerColorDidChange: P0): R;
  }
  namespace MSColorComponentsControllerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
