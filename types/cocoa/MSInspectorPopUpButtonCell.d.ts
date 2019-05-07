/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorPopUpButtonCell<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {
    inspectorPopUpArrowRectForBounds<R = CGRect, P0 = CGRect>(_inspectorPopUpArrowRectForBounds: P0): R;
    inspectorArrowImage<R = unknown>(): R;
  }
  namespace MSInspectorPopUpButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {
      alloc<R = MSInspectorPopUpButtonCell>(): R;
      new: <R = MSInspectorPopUpButtonCell>() => R;
    }
  }
}

declare const MSInspectorPopUpButtonCell: cocoa.MSInspectorPopUpButtonCell.CLASS;
