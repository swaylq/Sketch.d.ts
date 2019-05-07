/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorModePickerCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {}
  namespace MSColorModePickerCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = MSColorModePickerCell>(): R;
      new: <R = MSColorModePickerCell>() => R;
      inspectorAccentIconColorForCellHighlighted<R = unknown, P0 = boolean>(_inspectorAccentIconColorForCellHighlighted: P0): R;
    }
  }
}

declare const MSColorModePickerCell: cocoa.MSColorModePickerCell.CLASS;
