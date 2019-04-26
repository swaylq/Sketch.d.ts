/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorPickerViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, BCHSBColorPickerDelegateProtocol, MSColorComponentsControllerDelegateProtocol, MSFrequentColorsControllerDelegateProtocol, MSKeyViewProviderProtocol {
    cxx_destruct<R = void>(): R;
    showFrequentColors<R = void, P0 = unknown>(_showFrequentColors: P0): R;
    colorPickerAction<R = void, P0 = unknown>(_colorPickerAction: P0): R;
    sectionHeaderAccessoryViewControllers<R = unknown>(): R;
    setFrequentColors<R = void, P0 = unknown>(_setFrequentColors: P0): R;
    updateChildControllers<R = void>(): R;
    setFlexibleColor_multipleValues<R = void, P0 = unknown, P1 = boolean>(_setFlexibleColor: P0, _multipleValues: P1): R;
    setColor_multipleValues<R = void, P0 = unknown, P1 = boolean>(_setColor: P0, _multipleValues: P1): R;
    initWithDelegate<R = unknown, P0 = unknown>(_initWithDelegate: P0): R;
    flexibleColor<R = MSFlexibleColor>(): R;
    setFlexibleColor<R = void, P0 = MSFlexibleColor>(_v: P0): R;
    colorModel<R = number>(): R;
    setColorModel<R = void, P0 = number>(_v: P0): R;
    multipleValues<R = boolean>(): R;
    setMultipleValues<R = void, P0 = boolean>(_v: P0): R;
    frequentColorsButton<R = MSGenericButtonController>(): R;
    setFrequentColorsButton<R = void, P0 = MSGenericButtonController>(_v: P0): R;
    frequentColorsController<R = MSFrequentColorsController>(): R;
    setFrequentColorsController<R = void, P0 = MSFrequentColorsController>(_v: P0): R;
    componentsContainerView<R = NSView>(): R;
    setComponentsContainerView<R = void, P0 = NSView>(_v: P0): R;
    componentsController<R = MSColorComponentsController>(): R;
    setComponentsController<R = void, P0 = MSColorComponentsController>(_v: P0): R;
    delegate<R = MSColorPickerViewControllerDelegate>(): R;
    setDelegate<R = void, P0 = MSColorPickerViewControllerDelegate>(_v: P0): R;
    colorPicker<R = BCHSBColorPicker>(): R;
    setColorPicker<R = void, P0 = BCHSBColorPicker>(_v: P0): R;
    preferredFirstResponder<R = NSView>(): R;
    lastKeyView<R = NSView>(): R;
    firstKeyView<R = NSView>(): R;
    color<R = MSColor>(): R;
    setColor<R = void, P0 = MSColor>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSColorPickerViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, BCHSBColorPickerDelegateProtocol, MSColorComponentsControllerDelegateProtocol, MSFrequentColorsControllerDelegateProtocol, MSKeyViewProviderProtocol {
      alloc<R = MSColorPickerViewController>(): R;
      new: <R = MSColorPickerViewController>() => R;
    }
  }
}

declare const MSColorPickerViewController: cocoa.MSColorPickerViewController.CLASS;
