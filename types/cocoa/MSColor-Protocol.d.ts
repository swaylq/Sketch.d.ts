/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    red<R = number>(): R;
    green<R = number>(): R;
    blue<R = number>(): R;
    alpha<R = number>(): R;
  }
  namespace MSColorProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
