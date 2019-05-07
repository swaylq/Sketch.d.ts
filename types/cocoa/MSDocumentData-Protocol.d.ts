/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentDataProtocol<T0 = void, T1 = void, T2 = void> {
    pages<R = NSArray>(): R;
  }
  namespace MSDocumentDataProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
