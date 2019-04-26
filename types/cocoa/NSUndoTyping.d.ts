/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUndoTyping<T0 = void, T1 = void, T2 = void> extends NSUndoTextOperation {
    coalesceAffectedRange_replacementRange_selectedRange_text<R = boolean, P0 = _NSRange, P1 = _NSRange, P2 = _NSRange, P3 = unknown>(_coalesceAffectedRange: P0, _replacementRange: P1, _selectedRange: P2, _text: P3): R;
    initWithAffectedRange_layoutManager_undoManager_replacementRange<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown, P3 = _NSRange>(_initWithAffectedRange: P0, _layoutManager: P1, _undoManager: P2, _replacementRange: P3): R;
  }
  namespace NSUndoTyping {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSUndoTextOperation {
      alloc<R = NSUndoTyping>(): R;
      new: <R = NSUndoTyping>() => R;
    }
  }
}

declare const NSUndoTyping: cocoa.NSUndoTyping.CLASS;
