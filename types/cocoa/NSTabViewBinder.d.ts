/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabViewBinder<T0 = void, T1 = void, T2 = void> extends NSViewStateBinder {
    tabView_didSelectTabViewItem<R = void, P0 = unknown, P1 = unknown>(_tabView: P0, _didSelectTabViewItem: P1): R;
    _selectInTabView_itemWithIdentifier<R = void, P0 = unknown, P1 = unknown>(__selectInTabView: P0, _itemWithIdentifier: P1): R;
    _selectInTabView_itemWithLabel<R = void, P0 = unknown, P1 = unknown>(__selectInTabView: P0, _itemWithLabel: P1): R;
    _selectInTabView_itemAtIndex<R = void, P0 = unknown, P1 = unknown>(__selectInTabView: P0, _itemAtIndex: P1): R;
  }
  namespace NSTabViewBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewStateBinder {
      alloc<R = NSTabViewBinder>(): R;
      new: <R = NSTabViewBinder>() => R;
    }
  }
}

declare const NSTabViewBinder: cocoa.NSTabViewBinder.CLASS;
