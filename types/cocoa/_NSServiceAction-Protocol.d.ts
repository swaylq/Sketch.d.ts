/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSServiceActionProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    resetToDefaultAvailability<R = void>(): R;
    resetToDefaultKeyboardShortcut<R = void>(): R;
    validateWithResponder_completionHandler<R = void, P0 = NSResponder, P1 = CDUnknownBlockType>(_validateWithResponder: P0, _completionHandler: P1): R;
    invokeWithPasteboard<R = boolean, P0 = NSPasteboard>(_invokeWithPasteboard: P0): R;
    invokeWithResponder<R = boolean, P0 = NSResponder>(_invokeWithResponder: P0): R;
    loadBackgroundColorOnQueue_completionHandler<R = void, P0 = NSOperationQueue, P1 = CDUnknownBlockType>(_loadBackgroundColorOnQueue: P0, _completionHandler: P1): R;
    loadImageOnQueue_completionHandler<R = void, P0 = NSOperationQueue, P1 = CDUnknownBlockType>(_loadImageOnQueue: P0, _completionHandler: P1): R;
    isSpellChecker<R = boolean>(): R;
    isAvailableInServicesMenu<R = boolean>(): R;
    setIsAvailableInServicesMenu<R = void, P0 = boolean>(_v: P0): R;
    isAvailableInContextMenu<R = boolean>(): R;
    setIsAvailableInContextMenu<R = void, P0 = boolean>(_v: P0): R;
    isRestricted<R = boolean>(): R;
    isWorkflow<R = boolean>(): R;
    bundleIdentifier<R = NSString>(): R;
    serviceUUID<R = NSUUID>(): R;
    keyEquivalent<R = NSString>(): R;
    setKeyEquivalent<R = void, P0 = NSString>(_v: P0): R;
    keyboardShortcut<R = NSKeyboardShortcut>(): R;
    setKeyboardShortcut<R = void, P0 = NSKeyboardShortcut>(_v: P0): R;
    defaultKeyboardShortcut<R = NSKeyboardShortcut>(): R;
    returnTypes<R = NSArray>(): R;
    sendFileTypes<R = NSArray>(): R;
    combinedSendTypes<R = NSArray>(): R;
    hasBackgroundColor<R = boolean>(): R;
    hasCustomIcon<R = boolean>(): R;
    availablePresentationModes<R = NSSet>(): R;
    defaultPresentationModes<R = NSSet>(): R;
    presentationModes<R = NSSet>(): R;
    setPresentationModes<R = void, P0 = NSSet>(_v: P0): R;
    localizedServiceDescription<R = NSString>(): R;
    bundlePath<R = NSString>(): R;
    localizedCategoryTitle<R = NSString>(): R;
    categoryTitle<R = NSString>(): R;
    localizedTitle<R = NSString>(): R;
    title<R = NSString>(): R;
  }
  namespace _NSServiceActionProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
