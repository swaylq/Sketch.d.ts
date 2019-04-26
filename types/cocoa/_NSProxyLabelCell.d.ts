/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSProxyLabelCell<T0 = void, T1 = void, T2 = void> extends NSCell {
    _usesBezeledSelectionStyle<R = boolean>(): R;
    set_usesBezeledSelectionStyle<R = void, P0 = boolean>(_v: P0): R;
    widgetName<R = NSString>(): R;
    setWidgetName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace _NSProxyLabelCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCell {
      alloc<R = _NSProxyLabelCell>(): R;
      new: <R = _NSProxyLabelCell>() => R;
    }
  }
}
