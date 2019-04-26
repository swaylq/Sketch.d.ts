/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineUpDownTextField<T0 = void, T1 = void, T2 = void> extends MSUpDownTextField {
    updateCursor<R = void>(): R;
    updateUpDownLabel<R = void>(): R;
    inlineToolTip<R = NSString>(): R;
    setInlineToolTip<R = void, P0 = NSString>(_v: P0): R;
    inlineLabelField<R = NSTextField>(): R;
    setInlineLabelField<R = void, P0 = NSTextField>(_v: P0): R;
    inlineImage<R = NSImage>(): R;
    setInlineImage<R = void, P0 = NSImage>(_v: P0): R;
    inlineLabel<R = NSString>(): R;
    setInlineLabel<R = void, P0 = NSString>(_v: P0): R;
    inlineFieldWidth<R = number>(): R;
    upDownController<R = MSUpDownController>(): R;
    setUpDownController<R = void, P0 = MSUpDownController>(_v: P0): R;
  }
  namespace MSInlineUpDownTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSUpDownTextField {
      alloc<R = MSInlineUpDownTextField>(): R;
      new: <R = MSInlineUpDownTextField>() => R;
    }
  }
}

declare const MSInlineUpDownTextField: cocoa.MSInlineUpDownTextField.CLASS;
