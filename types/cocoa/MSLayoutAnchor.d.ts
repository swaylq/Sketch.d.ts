/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayoutAnchor<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    initWithItem_attribute<R = unknown, P0 = unknown, P1 = number>(_initWithItem: P0, _attribute: P1): R;
    attribute<R = number>(): R;
    item<R = unknown>(): R;
    axis<R = number>(): R;
  }
  namespace MSLayoutAnchor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSLayoutAnchor>(): R;
      new: <R = MSLayoutAnchor>() => R;
    }
  }
}

declare const MSLayoutAnchor: cocoa.MSLayoutAnchor.CLASS;
