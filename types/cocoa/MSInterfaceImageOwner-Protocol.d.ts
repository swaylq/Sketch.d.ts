/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInterfaceImageOwnerProtocol<T0 = void, T1 = void, T2 = void> {
    cacheOwner<R = unknown>(): R;
    interfaceImageIdentifier<R = NSString>(): R;
  }
  namespace MSInterfaceImageOwnerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
