/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTreeParentNodeProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    touchBarLayoutDirection<R = number>(): R;
    touchBarContainingChildNodes<R = NSTouchBar>(): R;
  }
  namespace NSTouchBarItemTreeParentNodeProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
