/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRectDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    rect_didChangeFromRect<R = void, P0 = MSRect, P1 = CGRect>(_rect: P0, _didChangeFromRect: P1): R;
  }
  namespace MSRectDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
