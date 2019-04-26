/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMachPortDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSPortDelegateProtocol {
    handleMachMessage<R = void, P0 = void>(_handleMachMessage: P0): R;
  }
  namespace NSMachPortDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPortDelegateProtocol {}
  }
}
