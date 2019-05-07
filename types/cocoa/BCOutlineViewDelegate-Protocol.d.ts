/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCOutlineViewDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSOutlineViewDelegateProtocol {
    isOutlineViewShowingContextMenu<R = boolean, P0 = BCOutlineView>(_isOutlineViewShowingContextMenu: P0): R;
  }
  namespace BCOutlineViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOutlineViewDelegateProtocol {}
  }
}
