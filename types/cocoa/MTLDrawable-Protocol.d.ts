/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MTLDrawableProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    presentAtTime<R = void, P0 = number>(_presentAtTime: P0): R;
    present<R = void>(): R;
  }
  namespace MTLDrawableProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
