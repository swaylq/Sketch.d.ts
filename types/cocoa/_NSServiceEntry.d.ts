/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSServiceEntry<T0 = void, T1 = void, T2 = void> extends NSObject, _NSServiceActionProtocol {
    internalRunService_flags_cancelledHint<R = unknown, P0 = unknown, P1 = number, P2 = string>(_internalRunService: P0, _flags: P1, _cancelledHint: P2): R;
    enableStatus<R = number>(): R;
    compareServiceEntryByLocalizedTitle<R = number, P0 = unknown>(_compareServiceEntryByLocalizedTitle: P0): R;
    titleForTracking<R = unknown>(): R;
    menuItemTitle<R = unknown>(): R;
    flushCachedMenuItemTitle<R = void>(): R;
    applyServicesPreferences<R = void, P0 = unknown>(_applyServicesPreferences: P0): R;
    servicePreferences<R = unknown>(): R;
    serviceIdentifier<R = unknown>(): R;
    dealloc<R = void>(): R;
    hasKeyboardShortcut<R = boolean>(): R;
    hasSendOrReturnTypes<R = boolean>(): R;
    hasReturnTypes<R = boolean>(): R;
    hasSendTypes<R = boolean>(): R;
    typeCategory<R = number>(): R;
    _inferServiceCategory<R = number>(): R;
    combinedSendTypeCount<R = number>(): R;
    availablePresentationModes<R = NSSet>(): R;
    defaultPresentationModes<R = NSSet>(): R;
    presentationModes<R = NSSet>(): R;
    setPresentationModes<R = void, P0 = NSSet>(_v: P0): R;
    bundleIdentifier<R = NSString>(): R;
    keyboardShortcut<R = NSKeyboardShortcut>(): R;
    setKeyboardShortcut<R = void, P0 = NSKeyboardShortcut>(_v: P0): R;
    defaultKeyboardShortcut<R = NSKeyboardShortcut>(): R;
    bundlePath<R = NSString>(): R;
    title<R = NSString>(): R;
    hasBackgroundColor<R = boolean>(): R;
    hasCustomIcon<R = boolean>(): R;
    localizedTitle<R = NSString>(): R;
    serviceUUID<R = NSUUID>(): R;
    description<R = NSString>(): R;
    keyEquivalent<R = NSString>(): R;
    setKeyEquivalent<R = void, P0 = NSString>(_v: P0): R;
    localizedCategoryTitle<R = NSString>(): R;
    categoryTitle<R = NSString>(): R;
    localizedServiceDescription<R = NSString>(): R;
    isAvailableInServicesMenu<R = boolean>(): R;
    setIsAvailableInServicesMenu<R = void, P0 = boolean>(_v: P0): R;
    isAvailableInContextMenu<R = boolean>(): R;
    setIsAvailableInContextMenu<R = void, P0 = boolean>(_v: P0): R;
    isSpellChecker<R = boolean>(): R;
    isRestricted<R = boolean>(): R;
    isWorkflow<R = boolean>(): R;
    returnTypes<R = NSArray>(): R;
    sendFileTypes<R = NSArray>(): R;
    combinedSendTypes<R = NSArray>(): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSServiceEntry {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSServiceActionProtocol {
      alloc<R = _NSServiceEntry>(): R;
      new: <R = _NSServiceEntry>() => R;
    }
  }
}
