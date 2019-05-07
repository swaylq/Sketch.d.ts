/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextPlaceholder<T0 = void, T1 = void, T2 = void> extends NSObject {
    _postCommitNotification<R = void>(): R;
    setText_doCommit<R = void, P0 = unknown, P1 = boolean>(_setText: P0, _doCommit: P1): R;
    commit<R = void>(): R;
    identifier<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithIdentifier_text_doCommit<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(_initWithIdentifier: P0, _text: P1, _doCommit: P2): R;
    committed<R = boolean>(): R;
    attributedStringValue<R = NSAttributedString>(): R;
    owner<R = unknown>(): R;
    setOwner<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSTextPlaceholder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTextPlaceholder>(): R;
      new: <R = NSTextPlaceholder>() => R;
    }
  }
}

declare const NSTextPlaceholder: cocoa.NSTextPlaceholder.CLASS;
