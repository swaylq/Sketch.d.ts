/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineTextLabelForUpDownField<T0 = void, T1 = void, T2 = void> extends MSTextLabelForUpDownField {
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace MSInlineTextLabelForUpDownField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSTextLabelForUpDownField {
      alloc<R = MSInlineTextLabelForUpDownField>(): R;
      new: <R = MSInlineTextLabelForUpDownField>() => R;
      labelWithImage<R = unknown, P0 = unknown>(_labelWithImage: P0): R;
    }
  }
}

declare const MSInlineTextLabelForUpDownField: cocoa.MSInlineTextLabelForUpDownField.CLASS;
