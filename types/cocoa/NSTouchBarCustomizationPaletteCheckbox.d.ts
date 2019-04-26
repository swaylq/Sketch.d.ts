/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteCheckbox<T0 = void, T1 = void, T2 = void> extends NSControl, NSAccessibilityCheckBoxProtocol {
    _accessibilityDisplayOptionsDidChange<R = void, P0 = unknown>(__accessibilityDisplayOptionsDidChange: P0): R;
    _labelTextColor<R = unknown>(): R;
    _autounbinder<R = unknown>(): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
    paletteScaleFactor<R = number>(): R;
    setPaletteScaleFactor<R = void, P0 = number>(_v: P0): R;
    highlighted<R = boolean>(): R;
    setHighlighted<R = void, P0 = boolean>(_v: P0): R;
    checked<R = boolean>(): R;
    setChecked<R = void, P0 = boolean>(_v: P0): R;
    _stackViewSpacing<R = number>(): R;
    _labelFontAttributedString<R = NSAttributedString>(): R;
    _labelFontSize<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTouchBarCustomizationPaletteCheckbox {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl, NSAccessibilityCheckBoxProtocol {
      alloc<R = NSTouchBarCustomizationPaletteCheckbox>(): R;
      new: <R = NSTouchBarCustomizationPaletteCheckbox>() => R;
      keyPathsForValuesAffecting_stackViewSpacing<R = unknown>(): R;
      keyPathsForValuesAffecting_labelFontAttributedString<R = unknown>(): R;
      keyPathsForValuesAffecting_labelFontSize<R = unknown>(): R;
      checkboxWithTitle_target_action<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(_checkboxWithTitle: P0, _target: P1, _action: P2): R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteCheckbox: cocoa.NSTouchBarCustomizationPaletteCheckbox.CLASS;
