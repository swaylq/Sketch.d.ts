/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDisplayFontBinder<T = any> extends cocoa.NSBinder {
    updateInvalidatedFont_forObject<R = unknown, P0 = unknown, P1 = unknown>(_updateInvalidatedFont: P0, _forObject: P1): R;
    _adjustFontOfObject_mode_triggerRedisplay_compareDirectly_toFont<R = unknown, P0 = unknown, P1 = cocoa.__NSKeyValueCodingControllerModeType, P2 = boolean, P3 = boolean, P4 = unknown>(__adjustFontOfObject: P0, _mode: P1, _triggerRedisplay: P2, _compareDirectly: P3, _toFont: P4): R;
    _fontFromBindingsWithMode_referenceFont_fallbackFont<R = unknown, P0 = cocoa.__NSKeyValueCodingControllerModeType, P1 = unknown, P2 = unknown>(__fontFromBindingsWithMode: P0, _referenceFont: P1, _fallbackFont: P2): R;
    _valueForBindingWithResolve_mode<R = unknown, P0 = unknown, P1 = cocoa.__NSKeyValueCodingControllerModeType>(__valueForBindingWithResolve: P0, _mode: P1): R;
    _isAnyFontBindingBoundToController<R = boolean, P0 = unknown>(__isAnyFontBindingBoundToController: P0): R;
    _availableBindingsWithFontBindingsFiltered<R = unknown, P0 = unknown>(__availableBindingsWithFontBindingsFiltered: P0): R;
  }
  namespace classes {
    export interface NSDisplayFontBinder<T = any> extends cocoa.classes.NSBinder {
      alloc<R = NSDisplayFontBinder>(): R;
      new: <R = NSDisplayFontBinder>() => R;
    }
  }
}

declare const NSDisplayFontBinder: cocoa.classes.NSDisplayFontBinder;
