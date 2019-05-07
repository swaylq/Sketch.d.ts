/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCLayerListViewController<T0 = void, T1 = void, T2 = void> extends BCOutlineViewController {
    refreshRowHeightOfGroupItem_didExpand<R = void, P0 = unknown, P1 = boolean>(_refreshRowHeightOfGroupItem: P0, _didExpand: P1): R;
    floatingGroupRowItemToScrollToAfterCollapse<R = unknown>(): R;
    setFloatingGroupRowItemToScrollToAfterCollapse<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace BCLayerListViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCOutlineViewController {
      alloc<R = BCLayerListViewController>(): R;
      new: <R = BCLayerListViewController>() => R;
      itemForExpansionStateNotification<R = unknown, P0 = unknown>(_itemForExpansionStateNotification: P0): R;
    }
  }
}

declare const BCLayerListViewController: cocoa.BCLayerListViewController.CLASS;
