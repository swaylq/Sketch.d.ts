/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSApplication<T0 = void, T1 = void, T2 = void> extends NSResponder, NSAppearanceCustomizationProtocol, NSTouchBarProviderContainerProtocol, NSAppearanceCustomizationInternalProtocol, NSUserInterfaceValidationsProtocol, NSMenuItemValidationProtocol, NSAccessibilityElementProtocol, NSAccessibilityProtocol {
    // + NSApplication(COSExtras): 
    open<R = unknown, P0 = NSString>(_open: P0): R;
    // + NSApplication(CHApplicationAdditions): 
    isActiveApplication<R = boolean>(): R;
    applicationBuild<R = unknown>(): R;
    applicationVersion<R = unknown>(): R;
    applicationName<R = unknown>(): R;
  }
  namespace NSApplication {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSResponder, NSAppearanceCustomizationProtocol, NSTouchBarProviderContainerProtocol, NSAppearanceCustomizationInternalProtocol, NSUserInterfaceValidationsProtocol, NSMenuItemValidationProtocol, NSAccessibilityElementProtocol, NSAccessibilityProtocol {
      alloc<R = NSApplication>(): R;
      new: <R = NSApplication>() => R;
      _resetCurrentDeferredActivation<R = void>(): R;
  
  }
  }
}

declare const NSApplication: cocoa.NSApplication.CLASS;
