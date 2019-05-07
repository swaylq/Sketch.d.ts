/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteMutableAttributedString<T0 = void, T1 = void, T2 = void> extends NSMutableAttributedString {
    edited_range_changeInLength<R = void, P0 = number, P1 = _NSRange, P2 = number>(_edited: P0, _range: P1, _changeInLength: P2): R;
    _runArrayHoldingAttributes<R = unknown>(): R;
    string<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithString<R = unknown, P0 = unknown>(_initWithString: P0): R;
    initWithString_attributes<R = unknown, P0 = unknown, P1 = unknown>(_initWithString: P0, _attributes: P1): R;
    initWithAttributedString<R = unknown, P0 = unknown>(_initWithAttributedString: P0): R;
  }
  namespace NSConcreteMutableAttributedString {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableAttributedString {
      alloc<R = NSConcreteMutableAttributedString>(): R;
      new: <R = NSConcreteMutableAttributedString>() => R;
      _mutableStringClass<R = unknown>(): R;
    }
  }
}

declare const NSConcreteMutableAttributedString: cocoa.NSConcreteMutableAttributedString.CLASS;
