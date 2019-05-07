/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLockingProtocol<T0 = void, T1 = void, T2 = void> {
    unlock<R = void>(): R;
    lock<R = void>(): R;
  }
  namespace NSLockingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
