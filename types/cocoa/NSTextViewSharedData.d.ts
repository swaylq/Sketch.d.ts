/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextViewSharedData<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    _flushInspectorBarItemIdentifiers<R = void>(): R;
    inputContextForFirstTextView<R = unknown, P0 = unknown>(_inputContextForFirstTextView: P0): R;
    wantsNotificationForMarkedText<R = boolean>(): R;
    setWantsNotificationForMarkedText<R = void, P0 = boolean>(_setWantsNotificationForMarkedText: P0): R;
    validAttributesForMarkedText<R = unknown>(): R;
    setAcceptsGlyphInfo<R = void, P0 = boolean>(_setAcceptsGlyphInfo: P0): R;
    acceptsGlyphInfo<R = boolean>(): R;
    clearMarkedRange<R = void>(): R;
    changeWillBeUndone<R = void, P0 = unknown>(_changeWillBeUndone: P0): R;
    coalesceInTextView_affectedRange_replacementRange<R = void, P0 = unknown, P1 = _NSRange, P2 = _NSRange>(_coalesceInTextView: P0, _affectedRange: P1, _replacementRange: P2): R;
    stopCoalescing<R = void>(): R;
    isCoalescing<R = boolean>(): R;
    setDelegate_withNotifyingTextView<R = void, P0 = unknown, P1 = unknown>(_setDelegate: P0, _withNotifyingTextView: P1): R;
    setDragAndDropCharRanges<R = void, P0 = unknown>(_setDragAndDropCharRanges: P0): R;
    setSelectedRanges<R = void, P0 = unknown>(_setSelectedRanges: P0): R;
    setDefaultParagraphStyle<R = void, P0 = unknown>(_setDefaultParagraphStyle: P0): R;
    setTypingAttributes<R = void, P0 = unknown>(_setTypingAttributes: P0): R;
    typingAttributes<R = unknown>(): R;
    setMarkedTextAttributes<R = void, P0 = unknown>(_setMarkedTextAttributes: P0): R;
    setInsertionPointColor<R = void, P0 = unknown>(_setInsertionPointColor: P0): R;
    setLinkTextAttributes<R = void, P0 = unknown>(_setLinkTextAttributes: P0): R;
    setSelectedTextAttributes<R = void, P0 = unknown>(_setSelectedTextAttributes: P0): R;
    setBackgroundColor<R = void, P0 = unknown>(_setBackgroundColor: P0): R;
    insertionPointColorForBlink<R = unknown>(): R;
    hasBlinkTimer<R = boolean>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    dealloc<R = void>(): R;
    _commonInit<R = void>(): R;
    delegate<R = unknown>(): R;
  }
  namespace NSTextViewSharedData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSTextViewSharedData>(): R;
      new: <R = NSTextViewSharedData>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSTextViewSharedData: cocoa.NSTextViewSharedData.CLASS;
