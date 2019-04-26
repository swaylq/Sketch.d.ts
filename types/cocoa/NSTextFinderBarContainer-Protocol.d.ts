/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFinderBarContainerProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    findBarViewDidChangeHeight<R = void>(): R;
    contentView<R = NSView>(): R;
    findBarVisible<R = boolean>(): R;
    setFindBarVisible<R = void, P0 = boolean>(_v: P0): R;
    findBarView<R = NSView>(): R;
    setFindBarView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace NSTextFinderBarContainerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
