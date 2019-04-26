/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextStorageDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    textStorage_didProcessEditing_range_changeInLength<R = void, P0 = NSTextStorage, P1 = number, P2 = _NSRange, P3 = number>(_textStorage: P0, _didProcessEditing: P1, _range: P2, _changeInLength: P3): R;
    textStorage_willProcessEditing_range_changeInLength<R = void, P0 = NSTextStorage, P1 = number, P2 = _NSRange, P3 = number>(_textStorage: P0, _willProcessEditing: P1, _range: P2, _changeInLength: P3): R;
  }
  namespace NSTextStorageDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
