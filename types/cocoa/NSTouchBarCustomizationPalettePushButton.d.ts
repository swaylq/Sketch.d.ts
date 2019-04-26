/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPalettePushButton<T0 = void, T1 = void, T2 = void> extends NSControl, NSAccessibilityButtonProtocol {
    _accessibilityDisplayOptionsDidChange<R = void, P0 = unknown>(__accessibilityDisplayOptionsDidChange: P0): R;
    wantsLayer<R = boolean>(): R;
    _autounbinder<R = unknown>(): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
    paletteScaleFactor<R = number>(): R;
    setPaletteScaleFactor<R = void, P0 = number>(_v: P0): R;
    highlighted<R = boolean>(): R;
    setHighlighted<R = void, P0 = boolean>(_v: P0): R;
    _labelTextColor<R = NSColor>(): R;
    _labelFontAttributedString<R = NSAttributedString>(): R;
    _labelFontSize<R = number>(): R;
    _bezelBackgroundColor<R = NSColor>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTouchBarCustomizationPalettePushButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl, NSAccessibilityButtonProtocol {
      alloc<R = NSTouchBarCustomizationPalettePushButton>(): R;
      new: <R = NSTouchBarCustomizationPalettePushButton>() => R;
      keyPathsForValuesAffecting_labelFontAttributedString<R = unknown>(): R;
      keyPathsForValuesAffecting_labelFontSize<R = unknown>(): R;
      buttonWithTitle_target_action<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(_buttonWithTitle: P0, _target: P1, _action: P2): R;
    }
  }
}

declare const NSTouchBarCustomizationPalettePushButton: cocoa.NSTouchBarCustomizationPalettePushButton.CLASS;
