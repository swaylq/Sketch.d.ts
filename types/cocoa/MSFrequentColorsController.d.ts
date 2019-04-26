/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFrequentColorsController<T0 = void, T1 = void, T2 = void> extends MSFrequentObjectsController, NSMenuDelegateProtocol {
    frequentColorPicked<R = void, P0 = unknown>(_frequentColorPicked: P0): R;
    colorModel<R = number>(): R;
    setColorModel<R = void, P0 = number>(_v: P0): R;
    color<R = MSColor>(): R;
    setColor<R = void, P0 = MSColor>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    delegate<R = MSFrequentColorsControllerDelegate>(): R;
    setDelegate<R = void, P0 = MSFrequentColorsControllerDelegate>(_v: P0): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSFrequentColorsController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSFrequentObjectsController, NSMenuDelegateProtocol {
      alloc<R = MSFrequentColorsController>(): R;
      new: <R = MSFrequentColorsController>() => R;
      menuItemForColorCounter_target_action_documentColorSpace_colorModel<R = unknown, P0 = unknown, P1 = unknown, P2 = string, P3 = unknown, P4 = number>(_menuItemForColorCounter: P0, _target: P1, _action: P2, _documentColorSpace: P3, _colorModel: P4): R;
      menuItemAttributedTitleForColorCounter_colorModel<R = unknown, P0 = unknown, P1 = number>(_menuItemAttributedTitleForColorCounter: P0, _colorModel: P1): R;
      previewImageForColorCounter_documentColorSpace<R = unknown, P0 = unknown, P1 = unknown>(_previewImageForColorCounter: P0, _documentColorSpace: P1): R;
    }
  }
}

declare const MSFrequentColorsController: cocoa.MSFrequentColorsController.CLASS;
