/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteViewControllerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    controllerAccessibilityResetTouchBar<R = void, P0 = NSTouchBarCustomizationPaletteViewController>(_controllerAccessibilityResetTouchBar: P0): R;
    controller_accessibilityAddItem<R = void, P0 = NSTouchBarCustomizationPaletteViewController, P1 = NSTouchBarItem>(_controller: P0, _accessibilityAddItem: P1): R;
    controllerDidEndDragging<R = void, P0 = NSTouchBarCustomizationPaletteViewController>(_controllerDidEndDragging: P0): R;
    controllerWillBeginDragging<R = void, P0 = NSTouchBarCustomizationPaletteViewController>(_controllerWillBeginDragging: P0): R;
  }
  namespace NSTouchBarCustomizationPaletteViewControllerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
