/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextColorBinder<T0 = void, T1 = void, T2 = void> extends NSBinder {
    updateInvalidatedTextColor_forObject<R = unknown, P0 = unknown, P1 = unknown>(_updateInvalidatedTextColor: P0, _forObject: P1): R;
    _showTextColorImmediatelyInObject_mode<R = void, P0 = unknown, P1 = __NSKeyValueCodingControllerModeType>(__showTextColorImmediatelyInObject: P0, _mode: P1): R;
    _setTextColorInObject_mode_compareDirectly_toTextColor<R = unknown, P0 = unknown, P1 = __NSKeyValueCodingControllerModeType, P2 = boolean, P3 = unknown>(__setTextColorInObject: P0, _mode: P1, _compareDirectly: P2, _toTextColor: P3): R;
    _textColorWithMode<R = unknown, P0 = __NSKeyValueCodingControllerModeType>(__textColorWithMode: P0): R;
    textColorAtIndexPath<R = unknown, P0 = unknown>(_textColorAtIndexPath: P0): R;
    textColorAtIndex<R = unknown, P0 = number>(_textColorAtIndex: P0): R;
    textColor<R = unknown>(): R;
    _requestTextColor<R = void, P0 = unknown>(__requestTextColor: P0): R;
  }
  namespace NSTextColorBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBinder {
      alloc<R = NSTextColorBinder>(): R;
      new: <R = NSTextColorBinder>() => R;
    }
  }
}

declare const NSTextColorBinder: cocoa.NSTextColorBinder.CLASS;
