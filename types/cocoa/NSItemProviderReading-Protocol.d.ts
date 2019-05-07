/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSItemProviderReadingProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  namespace NSItemProviderReadingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
      readableTypeIdentifiersForItemProvider<R = NSArray>(): R;
      objectWithItemProviderData_typeIdentifier_error<R = unknown, P0 = NSData, P1 = NSString, P2 = unknown>(_objectWithItemProviderData: P0, _typeIdentifier: P1, _error: P2): R;
    }
  }
}
