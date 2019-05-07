/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCHSBColorPicker<T0 = void, T1 = void, T2 = void> extends NSControl, BCColorPreviewDelegateProtocol, BCMagnifierButtonDelegateProtocol {
    cxx_destruct<R = void>(): R;
    setColor_ignoringFields<R = void, P0 = unknown, P1 = unknown>(_setColor: P0, _ignoringFields: P1): R;
    setColor_multipleValues<R = void, P0 = unknown, P1 = boolean>(_setColor: P0, _multipleValues: P1): R;
    flexibleColor<R = unknown>(): R;
    updateColorPreviewView<R = void>(): R;
    saturationBrightnessChanged<R = void, P0 = unknown>(_saturationBrightnessChanged: P0): R;
    alphaChanged<R = void, P0 = unknown>(_alphaChanged: P0): R;
    hueChanged<R = void, P0 = unknown>(_hueChanged: P0): R;
    magnifierAction<R = void, P0 = unknown>(_magnifierAction: P0): R;
    systemColorPanelDidChangeColor<R = void, P0 = unknown>(_systemColorPanelDidChangeColor: P0): R;
    awakeFromNib<R = void>(): R;
    constructSubviews<R = void>(): R;
    setAction<R = void, P0 = string>(_setAction: P0): R;
    setTarget<R = void, P0 = unknown>(_setTarget: P0): R;
    action<R = string>(): R;
    target<R = unknown>(): R;
    bc_action<R = string>(): R;
    setBc_action<R = void, P0 = string>(_v: P0): R;
    bc_target<R = unknown>(): R;
    setBc_target<R = void, P0 = unknown>(_v: P0): R;
    displaysMultipleValues<R = boolean>(): R;
    setDisplaysMultipleValues<R = void, P0 = boolean>(_v: P0): R;
    magnifierButton<R = BCMagnifierButton>(): R;
    setMagnifierButton<R = void, P0 = BCMagnifierButton>(_v: P0): R;
    colorPreviewView<R = BCColorPreview>(): R;
    setColorPreviewView<R = void, P0 = BCColorPreview>(_v: P0): R;
    aPickerView<R = BCAlphaColorPicker>(): R;
    setAPickerView<R = void, P0 = BCAlphaColorPicker>(_v: P0): R;
    hPickerView<R = BCHueColorPicker>(): R;
    setHPickerView<R = void, P0 = BCHueColorPicker>(_v: P0): R;
    sbPickerView<R = BCSaturationBrightnessColorPicker>(): R;
    setSbPickerView<R = void, P0 = BCSaturationBrightnessColorPicker>(_v: P0): R;
    delegate<R = BCHSBColorPickerDelegate>(): R;
    setDelegate<R = void, P0 = BCHSBColorPickerDelegate>(_v: P0): R;
    color<R = MSFlexibleColor>(): R;
    setColor<R = void, P0 = MSFlexibleColor>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace BCHSBColorPicker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl, BCColorPreviewDelegateProtocol, BCMagnifierButtonDelegateProtocol {
      alloc<R = BCHSBColorPicker>(): R;
      new: <R = BCHSBColorPicker>() => R;
    }
  }
}

declare const BCHSBColorPicker: cocoa.BCHSBColorPicker.CLASS;
