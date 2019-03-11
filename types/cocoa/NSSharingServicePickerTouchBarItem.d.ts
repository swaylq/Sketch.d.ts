/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSharingServicePickerTouchBarItem<T = any> extends cocoa.NSTouchBarItem, cocoa.NSTouchBarItemTypePopoverProtocol {
    cxx_destruct<R = void>(): R;
    items<R = unknown>(): R;
    setItems<R = void, P0 = unknown>(_setItems: P0): R;
    view<R = unknown>(): R;
    _shareButton<R = unknown>(): R;
    _makeInternalPopoverItemWithButtonTitle_buttonImage<R = void, P0 = unknown, P1 = unknown>(__makeInternalPopoverItemWithButtonTitle: P0, _buttonImage: P1): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    itemsForSharingServicePickerTouchBarItem<R = unknown, P0 = unknown>(_itemsForSharingServicePickerTouchBarItem: P0): R;
    sharingServicePicker_didChooseSharingService<R = void, P0 = unknown, P1 = unknown>(_sharingServicePicker: P0, _didChooseSharingService: P1): R;
    sharingServicePicker_delegateForSharingService<R = unknown, P0 = unknown, P1 = unknown>(_sharingServicePicker: P0, _delegateForSharingService: P1): R;
    sharingServicePicker_sharingServicesForItems_proposedSharingServices<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_sharingServicePicker: P0, _sharingServicesForItems: P1, _proposedSharingServices: P2): R;
    delegate<R = cocoa.NSSharingServicePickerTouchBarItemDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSSharingServicePickerTouchBarItemDelegate>(_v: P0): R;
    customizationLabel<R = cocoa.NSString>(): R;
    setCustomizationLabel<R = void, P0 = cocoa.NSString>(_v: P0): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    buttonTitle<R = cocoa.NSString>(): R;
    setButtonTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    buttonImage<R = cocoa.NSImage>(): R;
    setButtonImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    isPresented<R = boolean>(): R;
    popoverFunctionBar<R = cocoa.NSTouchBar>(): R;
    showsCloseButton<R = boolean>(): R;
    supportsPressAndHold<R = boolean>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSSharingServicePickerTouchBarItem<T = any> extends cocoa.classes.NSTouchBarItem, cocoa.classes.NSTouchBarItemTypePopoverProtocol {
      alloc<R = NSSharingServicePickerTouchBarItem>(): R;
      new: <R = NSSharingServicePickerTouchBarItem>() => R;
    }
  }
}

declare const NSSharingServicePickerTouchBarItem: cocoa.classes.NSSharingServicePickerTouchBarItem;
