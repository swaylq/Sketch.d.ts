/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPalettePushButton<T = any> extends cocoa.NSControl, cocoa.NSAccessibilityButtonProtocol {
    _accessibilityDisplayOptionsDidChange<R = void, P0 = unknown>(__accessibilityDisplayOptionsDidChange: P0): R;
    wantsLayer<R = boolean>(): R;
    _autounbinder<R = unknown>(): R;
    title<R = cocoa.NSString>(): R;
    setTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    paletteScaleFactor<R = number>(): R;
    setPaletteScaleFactor<R = void, P0 = number>(_v: P0): R;
    highlighted<R = boolean>(): R;
    setHighlighted<R = void, P0 = boolean>(_v: P0): R;
    _labelTextColor<R = cocoa.NSColor>(): R;
    _labelFontAttributedString<R = cocoa.NSAttributedString>(): R;
    _labelFontSize<R = number>(): R;
    _bezelBackgroundColor<R = cocoa.NSColor>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPalettePushButton<T = any> extends cocoa.classes.NSControl, cocoa.classes.NSAccessibilityButtonProtocol {
      alloc<R = NSTouchBarCustomizationPalettePushButton>(): R;
      new: <R = NSTouchBarCustomizationPalettePushButton>() => R;
      keyPathsForValuesAffecting_labelFontAttributedString<R = unknown>(): R;
      keyPathsForValuesAffecting_labelFontSize<R = unknown>(): R;
      buttonWithTitle_target_action<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(_buttonWithTitle: P0, _target: P1, _action: P2): R;
    }
  }
}

declare const NSTouchBarCustomizationPalettePushButton: cocoa.classes.NSTouchBarCustomizationPalettePushButton;
