/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserInterfaceValidationsProtocol<T0 = void, T1 = void, T2 = void> {
    validateUserInterfaceItem<R = boolean, P0 = NSValidatedUserInterfaceItem>(_validateUserInterfaceItem: P0): R;
  }
  namespace NSUserInterfaceValidationsProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
