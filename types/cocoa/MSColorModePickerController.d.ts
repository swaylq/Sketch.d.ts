/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorModePickerController<T0 = void, T1 = void, T2 = void> extends NSViewController, MSModeModePickerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    updateAllowedModes<R = void>(): R;
    modeForFillType_gradientType<R = number, P0 = number, P1 = number>(_modeForFillType: P0, _gradientType: P1): R;
    getFillType_gradientType_forPickerMode<R = void, P0 = number, P1 = number, P2 = number>(_getFillType: P0, _gradientType: P1, _forPickerMode: P2): R;
    updateWithPickerMode<R = void, P0 = number>(_updateWithPickerMode: P0): R;
    colorTabIndex<R = number>(): R;
    switchToColorTabAtIndex<R = void, P0 = number>(_switchToColorTabAtIndex: P0): R;
    setFillType_gradientType<R = void, P0 = number, P1 = number>(_setFillType: P0, _gradientType: P1): R;
    gradientType<R = number>(): R;
    setGradientType<R = void, P0 = number>(_v: P0): R;
    fillType<R = number>(): R;
    setFillType<R = void, P0 = number>(_v: P0): R;
    modePicker<R = MSModePickerView>(): R;
    setModePicker<R = void, P0 = MSModePickerView>(_v: P0): R;
    styleParts<R = NSArray>(): R;
    setStyleParts<R = void, P0 = NSArray>(_v: P0): R;
    delegate<R = MSColorModePickerControllerDelegate>(): R;
    setDelegate<R = void, P0 = MSColorModePickerControllerDelegate>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSColorModePickerController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, MSModeModePickerDelegateProtocol {
      alloc<R = MSColorModePickerController>(): R;
      new: <R = MSColorModePickerController>() => R;
    }
  }
}

declare const MSColorModePickerController: cocoa.MSColorModePickerController.CLASS;
