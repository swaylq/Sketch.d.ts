/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabViewControllerUIProviderProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, NSCodingProtocol {
    tearDown<R = void>(): R;
    setUpForTabView_inContainer<R = void, P0 = NSTabView, P1 = NSView>(_setUpForTabView: P0, _inContainer: P1): R;
    _associatedTabStyle<R = number>(): R;
    selectTabViewItemAtIndex<R = void, P0 = number>(_selectTabViewItemAtIndex: P0): R;
    removeTabView_atIndex_newSelectedIndex<R = void, P0 = NSTabViewItem, P1 = number, P2 = number>(_removeTabView: P0, _atIndex: P1, _newSelectedIndex: P2): R;
    insertTabView_atIndex_newSelectedIndex<R = void, P0 = NSTabViewItem, P1 = number, P2 = number>(_insertTabView: P0, _atIndex: P1, _newSelectedIndex: P2): R;
    setTabViewItemsFrom_to_newSelectedIndex<R = void, P0 = NSArray, P1 = NSArray, P2 = number>(_setTabViewItemsFrom: P0, _to: P1, _newSelectedIndex: P2): R;
    tabViewContainerWillMoveFromWindow_toWindow<R = void, P0 = NSWindow, P1 = NSWindow>(_tabViewContainerWillMoveFromWindow: P0, _toWindow: P1): R;
    tabViewController<R = NSTabViewController>(): R;
    setTabViewController<R = void, P0 = NSTabViewController>(_v: P0): R;
  }
  namespace NSTabViewControllerUIProviderProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, NSCodingProtocol {}
  }
}
