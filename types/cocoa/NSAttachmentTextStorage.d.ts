/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAttachmentTextStorage<T0 = void, T1 = void, T2 = void> extends NSTextStorage {
    setUrl<R = void, P0 = unknown>(_setUrl: P0): R;
    url<R = unknown>(): R;
    setFilename<R = void, P0 = unknown>(_setFilename: P0): R;
    filename<R = unknown>(): R;
    setAttributes_range<R = void, P0 = unknown, P1 = _NSRange>(_setAttributes: P0, _range: P1): R;
    replaceCharactersInRange_withString<R = void, P0 = _NSRange, P1 = unknown>(_replaceCharactersInRange: P0, _withString: P1): R;
    attributesAtIndex_effectiveRange<R = unknown, P0 = number, P1 = _NSRange>(_attributesAtIndex: P0, _effectiveRange: P1): R;
    string<R = unknown>(): R;
    dealloc<R = void>(): R;
    init<R = unknown>(): R;
  }
  namespace NSAttachmentTextStorage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextStorage {}
  }
}

declare const NSAttachmentTextStorage: cocoa.NSAttachmentTextStorage.CLASS;
