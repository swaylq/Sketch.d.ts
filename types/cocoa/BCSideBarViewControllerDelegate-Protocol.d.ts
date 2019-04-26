/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSideBarViewControllerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    pageListCollapsed<R = boolean>(): R;
    setPageListCollapsed<R = void, P0 = boolean>(_v: P0): R;
    pageListHeight<R = number>(): R;
    setPageListHeight<R = void, P0 = number>(_v: P0): R;
  }
  namespace BCSideBarViewControllerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
