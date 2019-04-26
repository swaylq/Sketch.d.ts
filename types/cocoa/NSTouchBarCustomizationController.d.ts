/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationController<T0 = void, T1 = void, T2 = void> extends NSObject, NSTouchBarCustomizationPreviewViewControllerDelegateProtocol, NSTouchBarCustomizationCursorManagerDelegateProtocol, NSDraggingSourceProtocol, NSTouchBarCustomizationPaletteViewControllerDelegateProtocol, _NSFunctionRowCustomizationDragTargetDelegateProtocol, NSAppExceptionListenerProtocol, NSWindowDelegateProtocol {
    _closeWithoutAnimating<R = void>(): R;
    _closeCustomizationPalette<R = void>(): R;
    validateTouchBarCustomizationPaletteItem<R = boolean, P0 = unknown>(_validateTouchBarCustomizationPaletteItem: P0): R;
    toggleCustomizationPalette_forceControlStrip<R = void, P0 = unknown, P1 = boolean>(_toggleCustomizationPalette: P0, _forceControlStrip: P1): R;
    restorePresentationOptions<R = void>(): R;
    savePresentationOptions<R = void>(): R;
    appTouchBarIsCustomizable<R = boolean>(): R;
    _touchBarsAreCustomizable<R = boolean, P0 = unknown>(__touchBarsAreCustomizable: P0): R;
    toggleCustomizationPalette<R = void, P0 = unknown>(_toggleCustomizationPalette: P0): R;
    toggleControlStripCustomizationPalette<R = void, P0 = unknown>(_toggleControlStripCustomizationPalette: P0): R;
    removeMenuItem<R = void>(): R;
    _quickTypeDidChange<R = void, P0 = unknown>(__quickTypeDidChange: P0): R;
    installMenuItemIfNeeded<R = void>(): R;
    dealloc<R = void>(): R;
    _prepareToHideCustomizationDFR<R = void>(): R;
    _showCustomizationDFR<R = void>(): R;
    _prepareCustomizationDFRFWithCustomizedRect<R = void, P0 = CGRect>(__prepareCustomizationDFRFWithCustomizedRect: P0): R;
    currentPopoverTouchBar<R = NSTouchBar>(): R;
    setCurrentPopoverTouchBar<R = void, P0 = NSTouchBar>(_v: P0): R;
    activeTouchBars<R = NSArray>(): R;
    setActiveTouchBars<R = void, P0 = NSArray>(_v: P0): R;
    currentResponderTouchBars<R = NSArray>(): R;
    setCurrentResponderTouchBars<R = void, P0 = NSArray>(_v: P0): R;
    itemTree<R = NSTouchBarItemTree>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTouchBarCustomizationController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSTouchBarCustomizationPreviewViewControllerDelegateProtocol, NSTouchBarCustomizationCursorManagerDelegateProtocol, NSDraggingSourceProtocol, NSTouchBarCustomizationPaletteViewControllerDelegateProtocol, _NSFunctionRowCustomizationDragTargetDelegateProtocol, NSAppExceptionListenerProtocol, NSWindowDelegateProtocol {
      alloc<R = NSTouchBarCustomizationController>(): R;
      new: <R = NSTouchBarCustomizationController>() => R;
      keyPathsForValuesAffectingItemTree<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarCustomizationController: cocoa.NSTouchBarCustomizationController.CLASS;
