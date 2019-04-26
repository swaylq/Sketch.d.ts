/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuItemCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
    state<R = number>(): R;
    representedObject<R = unknown>(): R;
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
    title<R = unknown>(): R;
    isOpaque<R = boolean>(): R;
    drawBorderAndBackgroundWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(_drawBorderAndBackgroundWithFrame: P0, _inView: P1): R;
    drawKeyEquivalentWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(_drawKeyEquivalentWithFrame: P0, _inView: P1): R;
    keyEquivalentAttributedString<R = unknown>(): R;
    drawTitleWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(_drawTitleWithFrame: P0, _inView: P1): R;
    drawImageWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(_drawImageWithFrame: P0, _inView: P1): R;
    _menuCellScaledImageAlignmentRectForImageRect_inView<R = CGRect, P0 = CGRect, P1 = unknown>(__menuCellScaledImageAlignmentRectForImageRect: P0, _inView: P1): R;
    drawStateImageWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(_drawStateImageWithFrame: P0, _inView: P1): R;
    drawSeparatorItemWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(_drawSeparatorItemWithFrame: P0, _inView: P1): R;
    _separatorRectForCellFrame_isFlipped<R = CGRect, P0 = CGRect, P1 = boolean>(__separatorRectForCellFrame: P0, _isFlipped: P1): R;
    keyEquivalentRectForBounds<R = CGRect, P0 = CGRect>(_keyEquivalentRectForBounds: P0): R;
    stateImageRectForBounds<R = CGRect, P0 = CGRect>(_stateImageRectForBounds: P0): R;
    _resetMeasuredCell<R = void>(): R;
    _rectsForBounds<R = CGRect, P0 = CGRect>(__rectsForBounds: P0): R;
    _keyEquivalentGlyphWidth<R = number>(): R;
    calcSize<R = void>(): R;
    _borderInset<R = CGSize>(): R;
    _obeysHiddenBit<R = boolean>(): R;
    _keyEquivalentUniquerCreatingIfNecessary<R = unknown, P0 = boolean>(__keyEquivalentUniquerCreatingIfNecessary: P0): R;
    _specialControlView<R = unknown>(): R;
    menuView<R = unknown>(): R;
    setMenuView<R = void, P0 = unknown>(_setMenuView: P0): R;
    _sharedTextCell<R = unknown>(): R;
    tag<R = number>(): R;
    setTag<R = void, P0 = number>(_v: P0): R;
    keyEquivalentWidth<R = number>(): R;
    titleWidth<R = number>(): R;
    imageWidth<R = number>(): R;
    stateImageWidth<R = number>(): R;
    needsDisplay<R = boolean>(): R;
    setNeedsDisplay<R = void, P0 = boolean>(_v: P0): R;
    needsSizing<R = boolean>(): R;
    setNeedsSizing<R = void, P0 = boolean>(_v: P0): R;
    menuItem<R = NSMenuItem>(): R;
    setMenuItem<R = void, P0 = NSMenuItem>(_v: P0): R;
  }
  namespace NSMenuItemCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = NSMenuItemCell>(): R;
      new: <R = NSMenuItemCell>() => R;
      _systemColorsChanged<R = void, P0 = unknown>(__systemColorsChanged: P0): R;
      _dimmedImage<R = unknown, P0 = unknown>(__dimmedImage: P0): R;
    }
  }
}

declare const NSMenuItemCell: cocoa.NSMenuItemCell.CLASS;
