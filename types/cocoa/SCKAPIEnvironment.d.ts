/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SCKAPIEnvironment<T0 = void, T1 = void, T2 = void> {
    // + SCKAPIEnvironment(Representable):
    suffixRepresentation<R = NSString>(): R;
  }
  namespace SCKAPIEnvironment {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const SCKAPIEnvironment: cocoa.SCKAPIEnvironment.CLASS;
