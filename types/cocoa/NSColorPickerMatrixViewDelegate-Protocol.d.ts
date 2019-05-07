/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerMatrixViewDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    matrixColorPicker_highlightColorForColor<R = NSColor, P0 = NSColorPickerMatrixView, P1 = NSColor>(_matrixColorPicker: P0, _highlightColorForColor: P1): R;
    matrixColorPicker_selectedColor<R = void, P0 = NSColorPickerMatrixView, P1 = NSColor>(_matrixColorPicker: P0, _selectedColor: P1): R;
  }
  namespace NSColorPickerMatrixViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
