/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CODebugControllerProtocol<T0 = void, T1 = void, T2 = void> {
    output_args<R = void, P0 = NSString, P1 = va_list>(_output: P0, _args: P1): R;
  }
  namespace CODebugControllerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
