/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObserverProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    finishObserving<R = void>(): R;
    receiveObservedError<R = void, P0 = NSError>(_receiveObservedError: P0): R;
    receiveObservedValue<R = void, P0 = unknown>(_receiveObservedValue: P0): R;
  }
  namespace NSObserverProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
