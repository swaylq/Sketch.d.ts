/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRectProtocol<T0 = void, T1 = void, T2 = void> {
    origin<R = CGPoint>(): R;
    size<R = CGSize>(): R;
    rect<R = CGRect>(): R;
  }
  namespace MSRectProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
