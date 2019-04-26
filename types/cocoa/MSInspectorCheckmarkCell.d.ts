/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorCheckmarkCell<T0 = void, T1 = void, T2 = void> extends MSInspectorButtonCell {
    mixedImage<R = unknown>(): R;
    onImage<R = unknown>(): R;
    checkmarkSize<R = CGSize>(): R;
    checkboxToTextSpacingOffset<R = number>(): R;
    setCheckboxToTextSpacingOffset<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSInspectorCheckmarkCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorButtonCell {
      alloc<R = MSInspectorCheckmarkCell>(): R;
      new: <R = MSInspectorCheckmarkCell>() => R;
    }
  }
}

declare const MSInspectorCheckmarkCell: cocoa.MSInspectorCheckmarkCell.CLASS;
