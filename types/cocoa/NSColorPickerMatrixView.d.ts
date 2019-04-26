/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerMatrixView<T0 = void, T1 = void, T2 = void> extends NSView {
    _accessibilityAttributeValue_forIndexedChild<R = unknown, P0 = unknown, P1 = unknown>(__accessibilityAttributeValue: P0, _forIndexedChild: P1): R;
    accessibilityArrayAttributeValues_index_maxCount<R = unknown, P0 = unknown, P1 = number, P2 = number>(_accessibilityArrayAttributeValues: P0, _index: P1, _maxCount: P2): R;
    accessibilityArrayAttributeCount<R = number, P0 = unknown>(_accessibilityArrayAttributeCount: P0): R;
    accessibilityIndexOfChild<R = number, P0 = unknown>(_accessibilityIndexOfChild: P0): R;
    _accessibilityChildren<R = unknown>(): R;
    rectForColorAtIndex<R = CGRect, P0 = number>(_rectForColorAtIndex: P0): R;
    colorAtIndex<R = unknown, P0 = number>(_colorAtIndex: P0): R;
    selectColorAtIndex<R = void, P0 = number>(_selectColorAtIndex: P0): R;
    colorIndexAtPoint<R = number, P0 = CGPoint>(_colorIndexAtPoint: P0): R;
    isOpaque<R = boolean>(): R;
    isFlipped<R = boolean>(): R;
    drawColorPickerHighlightForView<R = void, P0 = unknown>(_drawColorPickerHighlightForView: P0): R;
    numberOfRows<R = number>(): R;
    _updateConfigs<R = void>(): R;
    _hasEmptyColorCell<R = boolean>(): R;
    image<R = unknown>(): R;
    delegate<R = NSColorPickerMatrixViewDelegate>(): R;
    setDelegate<R = void, P0 = NSColorPickerMatrixViewDelegate>(_v: P0): R;
    emptyColorEnabled<R = boolean>(): R;
    setEmptyColorEnabled<R = void, P0 = boolean>(_v: P0): R;
    colorList<R = NSColorList>(): R;
    setColorList<R = void, P0 = NSColorList>(_v: P0): R;
    swatchSize<R = CGSize>(): R;
    setSwatchSize<R = void, P0 = CGSize>(_v: P0): R;
    numberOfColumns<R = number>(): R;
    setNumberOfColumns<R = void, P0 = number>(_v: P0): R;
    color<R = NSColor>(): R;
  }
  namespace NSColorPickerMatrixView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSColorPickerMatrixView>(): R;
      new: <R = NSColorPickerMatrixView>() => R;
      hasEmptyColorForDefaultList<R = boolean>(): R;
      defaultColorList<R = unknown>(): R;
    }
  }
}

declare const NSColorPickerMatrixView: cocoa.NSColorPickerMatrixView.CLASS;
