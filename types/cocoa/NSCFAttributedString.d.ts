/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCFAttributedString<T0 = void, T1 = void, T2 = void> extends NSMutableAttributedString {
    string<R = unknown>(): R;
    _isDeallocating<R = boolean>(): R;
    _tryRetain<R = boolean>(): R;
  }
  namespace NSCFAttributedString {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableAttributedString {
      alloc<R = NSCFAttributedString>(): R;
      new: <R = NSCFAttributedString>() => R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
    }
  }
}

declare const NSCFAttributedString: cocoa.NSCFAttributedString.CLASS;
