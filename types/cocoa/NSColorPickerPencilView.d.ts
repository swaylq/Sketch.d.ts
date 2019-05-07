/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerPencilView<T0 = void, T1 = void, T2 = void> extends NSView {
    _updateFramesForPencils_duration<R = void, P0 = unknown, P1 = number>(__updateFramesForPencils: P0, _duration: P1): R;
    _removeAllPencilLayers<R = void>(): R;
    _setLayer_forPencil<R = void, P0 = unknown, P1 = unknown>(__setLayer: P0, _forPencil: P1): R;
    _layerForPencil<R = unknown, P0 = unknown>(__layerForPencil: P0): R;
    isFlipped<R = boolean>(): R;
    _namedPencil<R = unknown>(): R;
    needsPanelToBecomeKey<R = boolean>(): R;
    acceptsFirstResponder<R = boolean>(): R;
    awakeFromNib<R = void>(): R;
    _pencilViewCommonInit<R = void>(): R;
    _pencilAtEventLocation<R = unknown, P0 = unknown>(__pencilAtEventLocation: P0): R;
    _hoverAndSelectPencilWithEvent<R = void, P0 = unknown>(__hoverAndSelectPencilWithEvent: P0): R;
    mouseDownCanMoveWindow<R = boolean>(): R;
    _updatePencilsFromColorList<R = void>(): R;
    _pencilAtRow_column<R = unknown, P0 = number, P1 = number>(__pencilAtRow: P0, _column: P1): R;
    _row_column_ofPencil<R = void, P0 = number, P1 = number, P2 = unknown>(__row: P0, _column: P1, _ofPencil: P2): R;
    _enumeratePencilsWithBlock<R = void, P0 = CDUnknownBlockType>(__enumeratePencilsWithBlock: P0): R;
    _pencilWithColor<R = unknown, P0 = unknown>(__pencilWithColor: P0): R;
    _hoverPencil<R = void, P0 = unknown>(__hoverPencil: P0): R;
    _selectPencil_updateSelection_animate<R = void, P0 = unknown, P1 = boolean, P2 = boolean>(__selectPencil: P0, _updateSelection: P1, _animate: P2): R;
    _pencilAtViewPoint<R = unknown, P0 = CGPoint>(__pencilAtViewPoint: P0): R;
    _frameOfPencil<R = CGRect, P0 = unknown>(__frameOfPencil: P0): R;
    _unobscuredFrameOfPencil<R = CGRect, P0 = unknown>(__unobscuredFrameOfPencil: P0): R;
    _calculateFrameForPencil_atRow_column<R = CGRect, P0 = unknown, P1 = number, P2 = number>(__calculateFrameForPencil: P0, _atRow: P1, _column: P2): R;
    _calculateFrameForPencil<R = CGRect, P0 = unknown>(__calculateFrameForPencil: P0): R;
    _removeFocusFromLayer<R = void, P0 = unknown>(__removeFocusFromLayer: P0): R;
    _addFocusToLayer_animate<R = void, P0 = unknown, P1 = boolean>(__addFocusToLayer: P0, _animate: P1): R;
    _addFocusToLayer<R = void, P0 = unknown>(__addFocusToLayer: P0): R;
    _updateFocusRing<R = void>(): R;
    _rightMostPencil<R = unknown>(): R;
    _leftMostPencil<R = unknown>(): R;
    _topMostPencil<R = unknown>(): R;
    _bottomMostPencil<R = unknown>(): R;
    _pencilRightOf<R = unknown, P0 = unknown>(__pencilRightOf: P0): R;
    _pencilLeftOf<R = unknown, P0 = unknown>(__pencilLeftOf: P0): R;
    _pencilBelow<R = unknown, P0 = unknown>(__pencilBelow: P0): R;
    _pencilAbove<R = unknown, P0 = unknown>(__pencilAbove: P0): R;
    moveUp<R = void, P0 = unknown>(_moveUp: P0): R;
    moveRight<R = void, P0 = unknown>(_moveRight: P0): R;
    moveLeft<R = void, P0 = unknown>(_moveLeft: P0): R;
    moveDown<R = void, P0 = unknown>(_moveDown: P0): R;
    insertBacktab<R = void, P0 = unknown>(_insertBacktab: P0): R;
    insertTab<R = void, P0 = unknown>(_insertTab: P0): R;
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    accessibilityValueAttribute<R = unknown>(): R;
    color<R = NSColor>(): R;
    setColor<R = void, P0 = NSColor>(_v: P0): R;
    localizedColorNameComponent<R = NSString>(): R;
    _pencils<R = NSArray>(): R;
    _colorList<R = NSColorList>(): R;
    _selectedPencil<R = NSColoredPencil>(): R;
    _shouldShowFocusRing<R = boolean>(): R;
    _hasFocusRing<R = boolean>(): R;
    _focusedPencil<R = NSColoredPencil>(): R;
  }
  namespace NSColorPickerPencilView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSColorPickerPencilView>(): R;
      new: <R = NSColorPickerPencilView>() => R;
    }
  }
}

declare const NSColorPickerPencilView: cocoa.NSColorPickerPencilView.CLASS;
