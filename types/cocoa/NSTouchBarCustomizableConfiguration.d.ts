/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizableConfiguration<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    debugDescription<R = unknown>(): R;
    description<R = unknown>(): R;
    _resetCustomization<R = void>(): R;
    _persistCustomizedItemIdentifiers<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _unregisterForCustomizationChangesWithIdentifier<R = void, P0 = unknown>(__unregisterForCustomizationChangesWithIdentifier: P0): R;
    _registerForCustomizationChangesWithIdentifier<R = void, P0 = unknown>(__registerForCustomizationChangesWithIdentifier: P0): R;
    dealloc<R = void>(): R;
    initWithIdentifier<R = unknown, P0 = unknown>(_initWithIdentifier: P0): R;
    presentedItemIdentifiers<R = NSArray>(): R;
    _customizedItemIdentifiers<R = NSArray>(): R;
    set_customizedItemIdentifiers<R = void, P0 = NSArray>(_v: P0): R;
    requiredItemIdentifiers<R = NSArray>(): R;
    setRequiredItemIdentifiers<R = void, P0 = NSArray>(_v: P0): R;
    allowedItemIdentifiers<R = NSArray>(): R;
    setAllowedItemIdentifiers<R = void, P0 = NSArray>(_v: P0): R;
    defaultItemIdentifiers<R = NSArray>(): R;
    setDefaultItemIdentifiers<R = void, P0 = NSArray>(_v: P0): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSTouchBarCustomizableConfiguration {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSTouchBarCustomizableConfiguration>(): R;
      new: <R = NSTouchBarCustomizableConfiguration>() => R;
      keyPathsForValuesAffectingPresentedItemIdentifiers<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarCustomizableConfiguration: cocoa.NSTouchBarCustomizableConfiguration.CLASS;
