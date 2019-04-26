/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPortDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    handlePortMessage<R = void, P0 = NSPortMessage>(_handlePortMessage: P0): R;
  }
  namespace NSPortDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
