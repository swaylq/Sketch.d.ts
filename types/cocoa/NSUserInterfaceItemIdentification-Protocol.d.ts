/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserInterfaceItemIdentificationProtocol<T0 = void, T1 = void, T2 = void> {
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSUserInterfaceItemIdentificationProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
