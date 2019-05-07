/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    confinementRectForMenu_onScreen<R = CGRect, P0 = NSMenu, P1 = NSScreen>(_confinementRectForMenu: P0, _onScreen: P1): R;
    menu_willHighlightItem<R = void, P0 = NSMenu, P1 = NSMenuItem>(_menu: P0, _willHighlightItem: P1): R;
    menuDidClose<R = void, P0 = NSMenu>(_menuDidClose: P0): R;
    menuWillOpen<R = void, P0 = NSMenu>(_menuWillOpen: P0): R;
    menuHasKeyEquivalent_forEvent_target_action<R = boolean, P0 = NSMenu, P1 = NSEvent, P2 = unknown, P3 = string>(_menuHasKeyEquivalent: P0, _forEvent: P1, _target: P2, _action: P3): R;
    menu_updateItem_atIndex_shouldCancel<R = boolean, P0 = NSMenu, P1 = NSMenuItem, P2 = number, P3 = boolean>(_menu: P0, _updateItem: P1, _atIndex: P2, _shouldCancel: P3): R;
    numberOfItemsInMenu<R = number, P0 = NSMenu>(_numberOfItemsInMenu: P0): R;
    menuNeedsUpdate<R = void, P0 = NSMenu>(_menuNeedsUpdate: P0): R;
  }
  namespace NSMenuDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
