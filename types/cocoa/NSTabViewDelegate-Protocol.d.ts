/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabViewDelegateProtocol<T = any> {
    tabViewDidChangeNumberOfTabViewItems<R = void, P0 = cocoa.NSTabView>(_tabViewDidChangeNumberOfTabViewItems: P0): R;
    tabView_didSelectTabViewItem<R = void, P0 = cocoa.NSTabView, P1 = cocoa.NSTabViewItem>(_tabView: P0, _didSelectTabViewItem: P1): R;
    tabView_willSelectTabViewItem<R = void, P0 = cocoa.NSTabView, P1 = cocoa.NSTabViewItem>(_tabView: P0, _willSelectTabViewItem: P1): R;
    tabView_shouldSelectTabViewItem<R = boolean, P0 = cocoa.NSTabView, P1 = cocoa.NSTabViewItem>(_tabView: P0, _shouldSelectTabViewItem: P1): R;
  }
  namespace classes {
    export interface NSTabViewDelegateProtocol<T = any> {  }
  }
}

declare const NSTabViewDelegateProtocol: cocoa.classes.NSTabViewDelegateProtocol;
