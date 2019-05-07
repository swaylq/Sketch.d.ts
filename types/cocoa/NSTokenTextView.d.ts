/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTokenTextView<T0 = void, T1 = void, T2 = void> extends NSTextView {
    _characterAtIndex_shouldTerminateString<R = boolean, P0 = number, P1 = unknown>(__characterAtIndex: P0, _shouldTerminateString: P1): R;
    readablePasteboardTypes<R = unknown>(): R;
    writablePasteboardTypes<R = unknown>(): R;
    acceptableDragTypes<R = unknown>(): R;
    _tokenAttachmentForPoint_glyphIndex_drawingRect<R = unknown, P0 = CGPoint, P1 = number, P2 = CGRect>(__tokenAttachmentForPoint: P0, _glyphIndex: P1, _drawingRect: P2): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    _detachFieldEditorFromWindow<R = void, P0 = unknown>(__detachFieldEditorFromWindow: P0): R;
  }
  namespace NSTokenTextView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextView {
      alloc<R = NSTokenTextView>(): R;
      new: <R = NSTokenTextView>() => R;
      tokenTextViewForWindow<R = unknown, P0 = unknown>(_tokenTextViewForWindow: P0): R;
      trackingTokenTextView<R = unknown, P0 = boolean>(_trackingTokenTextView: P0): R;
    }
  }
}

declare const NSTokenTextView: cocoa.NSTokenTextView.CLASS;
