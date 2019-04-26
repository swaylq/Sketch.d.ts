/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabViewDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    tabViewDidChangeNumberOfTabViewItems<R = void, P0 = NSTabView>(_tabViewDidChangeNumberOfTabViewItems: P0): R;
    tabView_didSelectTabViewItem<R = void, P0 = NSTabView, P1 = NSTabViewItem>(_tabView: P0, _didSelectTabViewItem: P1): R;
    tabView_willSelectTabViewItem<R = void, P0 = NSTabView, P1 = NSTabViewItem>(_tabView: P0, _willSelectTabViewItem: P1): R;
    tabView_shouldSelectTabViewItem<R = boolean, P0 = NSTabView, P1 = NSTabViewItem>(_tabView: P0, _shouldSelectTabViewItem: P1): R;
  }
  namespace NSTabViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
