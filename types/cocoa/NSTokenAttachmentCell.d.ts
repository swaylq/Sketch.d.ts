/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTokenAttachmentCell<T0 = void, T1 = void, T2 = void> extends NSTextAttachmentCell {
    _immediateActionAnimationControllerForTokenAttachment_inTextView<R = unknown, P0 = unknown, P1 = unknown>(__immediateActionAnimationControllerForTokenAttachment: P0, _inTextView: P1): R;
    pullDownTrackingRectForBounds<R = CGRect, P0 = CGRect>(_pullDownTrackingRectForBounds: P0): R;
    isEnabled<R = boolean>(): R;
    _setNeedsSeparator<R = void, P0 = boolean>(__setNeedsSeparator: P0): R;
    _needsSeparator<R = boolean>(): R;
    _resetNeedsSeparatorWithLayoutManager_characterIndex<R = void, P0 = unknown, P1 = number>(__resetNeedsSeparatorWithLayoutManager: P0, _characterIndex: P1): R;
    drawPullDownImageWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(_drawPullDownImageWithFrame: P0, _inView: P1): R;
    shouldDrawSeparator<R = boolean>(): R;
    _supportsSeparators<R = boolean>(): R;
    drawTokenWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(_drawTokenWithFrame: P0, _inView: P1): R;
    _isActiveInView<R = boolean, P0 = unknown>(__isActiveInView: P0): R;
    shouldDrawTokenBackground<R = boolean>(): R;
    drawTokenInRect_withOptions<R = void, P0 = CGRect, P1 = unknown>(_drawTokenInRect: P0, _withOptions: P1): R;
    pullDownRectForBounds<R = CGRect, P0 = CGRect>(_pullDownRectForBounds: P0): R;
    menu<R = unknown>(): R;
    _shouldShowPullDownImage<R = boolean>(): R;
    pullDownImage<R = unknown>(): R;
    setTextColor<R = void, P0 = unknown>(_setTextColor: P0): R;
    textColor<R = unknown>(): R;
    tokenTintColor<R = unknown>(): R;
    tokenBackgroundColor<R = unknown>(): R;
    tokenForegroundColor<R = unknown>(): R;
    _hasMenu<R = boolean>(): R;
    interiorBackgroundStyle<R = number>(): R;
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
    representedObject<R = unknown>(): R;
    _metrics<R = unknown>(): R;
    selected<R = boolean>(): R;
    tokenStyle<R = number>(): R;
    setTokenStyle<R = void, P0 = number>(_v: P0): R;
    neverShowSeparator<R = boolean>(): R;
    alwaysShowBackground<R = boolean>(): R;
  }
  namespace NSTokenAttachmentCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextAttachmentCell {
      alloc<R = NSTokenAttachmentCell>(): R;
      new: <R = NSTokenAttachmentCell>() => R;
      _getLineSpacing_forTokenStyle<R = boolean, P0 = number, P1 = number>(__getLineSpacing: P0, _forTokenStyle: P1): R;
      _getTypesetterBehavior_forTokenStyle<R = boolean, P0 = number, P1 = number>(__getTypesetterBehavior: P0, _forTokenStyle: P1): R;
      _metricsForTokenStyle<R = unknown, P0 = number>(__metricsForTokenStyle: P0): R;
      usesTintColor<R = boolean>(): R;
    }
  }
}

declare const NSTokenAttachmentCell: cocoa.NSTokenAttachmentCell.CLASS;
