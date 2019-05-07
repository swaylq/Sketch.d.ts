/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextAttachmentCellProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    cellFrameForTextContainer_proposedLineFragment_glyphPosition_characterIndex<R = CGRect, P0 = NSTextContainer, P1 = CGRect, P2 = CGPoint, P3 = number>(_cellFrameForTextContainer: P0, _proposedLineFragment: P1, _glyphPosition: P2, _characterIndex: P3): R;
    trackMouse_inRect_ofView_atCharacterIndex_untilMouseUp<R = boolean, P0 = NSEvent, P1 = CGRect, P2 = NSView, P3 = number, P4 = boolean>(_trackMouse: P0, _inRect: P1, _ofView: P2, _atCharacterIndex: P3, _untilMouseUp: P4): R;
    wantsToTrackMouseForEvent_inRect_ofView_atCharacterIndex<R = boolean, P0 = NSEvent, P1 = CGRect, P2 = NSView, P3 = number>(_wantsToTrackMouseForEvent: P0, _inRect: P1, _ofView: P2, _atCharacterIndex: P3): R;
    drawWithFrame_inView_characterIndex_layoutManager<R = void, P0 = CGRect, P1 = NSView, P2 = number, P3 = NSLayoutManager>(_drawWithFrame: P0, _inView: P1, _characterIndex: P2, _layoutManager: P3): R;
    drawWithFrame_inView_characterIndex<R = void, P0 = CGRect, P1 = NSView, P2 = number>(_drawWithFrame: P0, _inView: P1, _characterIndex: P2): R;
    cellBaselineOffset<R = CGPoint>(): R;
    cellSize<R = CGSize>(): R;
    trackMouse_inRect_ofView_untilMouseUp<R = boolean, P0 = NSEvent, P1 = CGRect, P2 = NSView, P3 = boolean>(_trackMouse: P0, _inRect: P1, _ofView: P2, _untilMouseUp: P3): R;
    highlight_withFrame_inView<R = void, P0 = boolean, P1 = CGRect, P2 = NSView>(_highlight: P0, _withFrame: P1, _inView: P2): R;
    wantsToTrackMouse<R = boolean>(): R;
    drawWithFrame_inView<R = void, P0 = CGRect, P1 = NSView>(_drawWithFrame: P0, _inView: P1): R;
    attachment<R = NSTextAttachment>(): R;
    setAttachment<R = void, P0 = NSTextAttachment>(_v: P0): R;
  }
  namespace NSTextAttachmentCellProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
