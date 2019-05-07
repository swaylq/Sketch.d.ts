/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorChangingProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    changeColor<R = void, P0 = NSColorPanel>(_changeColor: P0): R;
  }
  namespace NSColorChangingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
