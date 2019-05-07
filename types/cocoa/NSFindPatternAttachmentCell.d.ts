/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFindPatternAttachmentCell<T0 = void, T1 = void, T2 = void> extends NSTextAttachmentCell {
    drawTokenWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(_drawTokenWithFrame: P0, _inView: P1): R;
    drawTokenInRect_withOptions<R = void, P0 = CGRect, P1 = unknown>(_drawTokenInRect: P0, _withOptions: P1): R;
    pullDownRectForBounds<R = CGRect, P0 = CGRect>(_pullDownRectForBounds: P0): R;
    pullDownImage<R = unknown>(): R;
    menu<R = unknown>(): R;
    _hasMenu<R = boolean>(): R;
    textColor<R = unknown>(): R;
    tokenColor<R = unknown>(): R;
    interiorBackgroundStyle<R = number>(): R;
    _isActiveInView<R = boolean, P0 = unknown>(__isActiveInView: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _attributedString<R = unknown>(): R;
    _setGroupID<R = void, P0 = number>(__setGroupID: P0): R;
    description<R = unknown>(): R;
    field<R = NSFindPatternField>(): R;
    setField<R = void, P0 = NSFindPatternField>(_v: P0): R;
    findPattern<R = NSFindPattern>(): R;
    setFindPattern<R = void, P0 = NSFindPattern>(_v: P0): R;
  }
  namespace NSFindPatternAttachmentCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextAttachmentCell {
      alloc<R = NSFindPatternAttachmentCell>(): R;
      new: <R = NSFindPatternAttachmentCell>() => R;
    }
  }
}

declare const NSFindPatternAttachmentCell: cocoa.NSFindPatternAttachmentCell.CLASS;
