/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSliderCell<T0 = void, T1 = void, T2 = void> extends NSSliderCell {
    drawTickmarkKnob<R = void, P0 = CGRect>(_drawTickmarkKnob: P0): R;
  }
  namespace MSInspectorSliderCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSliderCell {
      alloc<R = MSInspectorSliderCell>(): R;
      new: <R = MSInspectorSliderCell>() => R;
    }
  }
}

declare const MSInspectorSliderCell: cocoa.MSInspectorSliderCell.CLASS;
