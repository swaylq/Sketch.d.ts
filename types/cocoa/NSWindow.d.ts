/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindow<T0 = void, T1 = void, T2 = void> extends NSResponder, NSTouchBarProviderContainerProtocol, NSAppearanceCustomizationInternalProtocol, NSAnimatablePropertyContainerProtocol, NSMenuItemValidationProtocol, NSUserInterfaceValidationsProtocol, NSUserInterfaceItemIdentificationProtocol, NSAppearanceCustomizationProtocol, NSAccessibilityElementProtocol, NSAccessibilityProtocol {
    // + NSWindow(Chocolat): 
    commitEditedTextRetainingFirstResponder<R = void>(): R;
    closePopovers<R = boolean>(): R;
    convertPointFromScreen_ch<R = CGPoint, P0 = CGPoint>(_convertPointFromScreen_ch: P0): R;
  }
  namespace NSWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSResponder, NSTouchBarProviderContainerProtocol, NSAppearanceCustomizationInternalProtocol, NSAnimatablePropertyContainerProtocol, NSMenuItemValidationProtocol, NSUserInterfaceValidationsProtocol, NSUserInterfaceItemIdentificationProtocol, NSAppearanceCustomizationProtocol, NSAccessibilityElementProtocol, NSAccessibilityProtocol {
      alloc<R = NSWindow>(): R;
      new: <R = NSWindow>() => R;
      _hiddenInWindowList<R = boolean>(): R;
  
  }
  }
}

declare const NSWindow: cocoa.NSWindow.CLASS;
