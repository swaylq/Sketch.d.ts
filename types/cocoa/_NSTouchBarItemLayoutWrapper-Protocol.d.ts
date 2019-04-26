/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarItemLayoutWrapperProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    isSpace<R = boolean>(): R;
    maxSize<R = CGSize>(): R;
    minSize<R = CGSize>(): R;
    preferredTrailingPosition<R = number>(): R;
    preferredZOrder<R = number>(): R;
    itemPosition<R = number>(): R;
    priorityIndex<R = number>(): R;
    contentClippingSize<R = CGSize>(): R;
    preferredSize<R = CGSize>(): R;
  }
  namespace _NSTouchBarItemLayoutWrapperProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
