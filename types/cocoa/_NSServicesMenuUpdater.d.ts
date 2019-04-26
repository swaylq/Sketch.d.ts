/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSServicesMenuUpdater<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuDelegateProtocol {
    _processRequest<R = void, P0 = unknown>(__processRequest: P0): R;
    performServiceFromEntry<R = void, P0 = unknown>(_performServiceFromEntry: P0): R;
    isPluggedIntoMenuRef<R = boolean, P0 = OpaqueMenuRef>(_isPluggedIntoMenuRef: P0): R;
    unplugMenu<R = void, P0 = unknown>(_unplugMenu: P0): R;
    plugMenu_intoMenuRef<R = void, P0 = unknown, P1 = OpaqueMenuRef>(_plugMenu: P0, _intoMenuRef: P1): R;
    updateForLiveServicesChangedNotification<R = void, P0 = unknown>(_updateForLiveServicesChangedNotification: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    updateMenu_withEvent_withFlags<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(_updateMenu: P0, _withEvent: P1, _withFlags: P2): R;
    insertServicesIntoMenu_withKeyEvent_isForDisplay<R = void, P0 = unknown, P1 = unknown, P2 = boolean>(_insertServicesIntoMenu: P0, _withKeyEvent: P1, _isForDisplay: P2): R;
    populateMenu_withServiceEntries_forDisplay<R = void, P0 = unknown, P1 = unknown, P2 = boolean>(_populateMenu: P0, _withServiceEntries: P1, _forDisplay: P2): R;
    dealloc<R = void>(): R;
    registerCommonServicesIfNecessary<R = void>(): R;
    worksWhenModal<R = boolean>(): R;
    updateVisibilityOfServicesItemsForMenu_isForDisplay<R = void, P0 = unknown, P1 = boolean>(_updateVisibilityOfServicesItemsForMenu: P0, _isForDisplay: P1): R;
    populateMenuForUnavailableServices<R = void, P0 = unknown>(_populateMenuForUnavailableServices: P0): R;
    contentsNeedsUpdatingForMenu<R = boolean, P0 = unknown>(_contentsNeedsUpdatingForMenu: P0): R;
    menuShowsKeyEquivalents<R = boolean>(): R;
    menus<R = unknown>(): R;
    menuContext<R = unknown>(): R;
    serviceEntryKinds<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSServicesMenuUpdater {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuDelegateProtocol {
      alloc<R = _NSServicesMenuUpdater>(): R;
      new: <R = _NSServicesMenuUpdater>() => R;
    }
  }
}
