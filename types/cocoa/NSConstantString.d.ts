/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConstantString<T0 = void, T1 = void, T2 = void> extends NSSimpleCString {
    _isDeallocating<R = boolean>(): R;
    _tryRetain<R = boolean>(): R;
    copy<R = unknown>(): R;
    initWithCharactersNoCopy_length<R = unknown, P0 = number, P1 = number>(_initWithCharactersNoCopy: P0, _length: P1): R;
  }
  namespace NSConstantString {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSimpleCString {
      alloc<R = NSConstantString>(): R;
      new: <R = NSConstantString>() => R;
    }
  }
}

declare const NSConstantString: cocoa.NSConstantString.CLASS;
