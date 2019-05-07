/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewTextAttachmentCell<T0 = void, T1 = void, T2 = void> extends NSTextAttachmentCell {
    releaseView<R = void, P0 = unknown>(_releaseView: P0): R;
    removeView_fromView_layoutManager<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_removeView: P0, _fromView: P1, _layoutManager: P2): R;
    _helperDeallocatedForView_layoutManager<R = void, P0 = unknown, P1 = unknown>(__helperDeallocatedForView: P0, _layoutManager: P1): R;
    adjustView_frame_forView_characterIndex_layoutManager<R = void, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = number, P4 = unknown>(_adjustView: P0, _frame: P1, _forView: P2, _characterIndex: P3, _layoutManager: P4): R;
    addView_frame_toView_characterIndex_layoutManager<R = void, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = number, P4 = unknown>(_addView: P0, _frame: P1, _toView: P2, _characterIndex: P3, _layoutManager: P4): R;
    viewWithFrame_forView_characterIndex_layoutManager<R = unknown, P0 = CGRect, P1 = unknown, P2 = number, P3 = unknown>(_viewWithFrame: P0, _forView: P1, _characterIndex: P2, _layoutManager: P3): R;
    viewForCharacterIndex_layoutManager<R = unknown, P0 = number, P1 = unknown>(_viewForCharacterIndex: P0, _layoutManager: P1): R;
    _textAttachmentCellBaseDrawWithFrame_inView_characterIndex_layoutManager<R = void, P0 = CGRect, P1 = unknown, P2 = number, P3 = unknown>(__textAttachmentCellBaseDrawWithFrame: P0, _inView: P1, _characterIndex: P2, _layoutManager: P3): R;
    helperForView_layoutManager_characterIndex<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_helperForView: P0, _layoutManager: P1, _characterIndex: P2): R;
  }
  namespace NSViewTextAttachmentCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextAttachmentCell {
      alloc<R = NSViewTextAttachmentCell>(): R;
      new: <R = NSViewTextAttachmentCell>() => R;
    }
  }
}

declare const NSViewTextAttachmentCell: cocoa.NSViewTextAttachmentCell.CLASS;
