/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSharingServicePicker<T0 = void, T1 = void, T2 = void> extends NSObject {
    style<R = number>(): R;
    setStyle<R = void, P0 = number>(_setStyle: P0): R;
    menu<R = unknown>(): R;
    actionForLayer_forKey<R = unknown, P0 = unknown, P1 = unknown>(_actionForLayer: P0, _forKey: P1): R;
    drawLayer_inContext<R = void, P0 = unknown, P1 = CGContext>(_drawLayer: P0, _inContext: P1): R;
    rectForBounds_preferredEdge<R = CGRect, P0 = CGRect, P1 = number>(_rectForBounds: P0, _preferredEdge: P1): R;
    rolloverButtonCell<R = unknown>(): R;
    hide<R = void>(): R;
    showRelativeToRect_ofView_preferredEdge<R = void, P0 = CGRect, P1 = unknown, P2 = number>(_showRelativeToRect: P0, _ofView: P1, _preferredEdge: P2): R;
    _openAppExtensionsPrefpane<R = void, P0 = unknown>(__openAppExtensionsPrefpane: P0): R;
    _serviceSelected<R = void, P0 = unknown>(__serviceSelected: P0): R;
    _uppercaseString<R = void, P0 = unknown>(__uppercaseString: P0): R;
    _updateRolloverMenu<R = void, P0 = unknown>(__updateRolloverMenu: P0): R;
    menuItemFromService<R = unknown, P0 = unknown>(_menuItemFromService: P0): R;
    _alternateItemIdentifierFromRepresentedObject<R = unknown, P0 = unknown>(__alternateItemIdentifierFromRepresentedObject: P0): R;
    _serviceFromRepresentedObject<R = unknown, P0 = unknown>(__serviceFromRepresentedObject: P0): R;
    _representedObjectForService_alternateItemIdentifier<R = unknown, P0 = unknown, P1 = unknown>(__representedObjectForService: P0, _alternateItemIdentifier: P1): R;
    moreMenuImage<R = unknown>(): R;
    emptyMenuImage<R = unknown>(): R;
    _queryServices<R = void>(): R;
    _prepareSHKSharingServicePicker<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithItems<R = unknown, P0 = unknown>(_initWithItems: P0): R;
    delegate<R = NSSharingServicePickerDelegate>(): R;
    setDelegate<R = void, P0 = NSSharingServicePickerDelegate>(_v: P0): R;
  }
  namespace NSSharingServicePicker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSSharingServicePicker>(): R;
      new: <R = NSSharingServicePicker>() => R;
      openAppExtensionsPrefPane<R = void>(): R;
      sharedMoreMenuImage<R = unknown>(): R;
    }
  }
}

declare const NSSharingServicePicker: cocoa.NSSharingServicePicker.CLASS;
