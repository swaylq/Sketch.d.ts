/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSThemeFrameTitleTextField<T0 = void, T1 = void, T2 = void> extends NSView {
    allowsVibrancy<R = boolean>(): R;
    setTextColor<R = void, P0 = unknown>(_setTextColor: P0): R;
    isFlipped<R = boolean>(): R;
    invalidateOnFrameOriginChange<R = boolean>(): R;
    setInvalidateOnFrameOriginChange<R = void, P0 = boolean>(_v: P0): R;
    attributedStringValue<R = NSAttributedString>(): R;
    setAttributedStringValue<R = void, P0 = NSAttributedString>(_v: P0): R;
  }
  namespace NSThemeFrameTitleTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSThemeFrameTitleTextField>(): R;
      new: <R = NSThemeFrameTitleTextField>() => R;
    }
  }
}

declare const NSThemeFrameTitleTextField: cocoa.NSThemeFrameTitleTextField.CLASS;
