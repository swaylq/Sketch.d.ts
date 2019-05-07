/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSStateMarker<T0 = void, T1 = void, T2 = void> extends NSBindingSelectionMarker, NSCopyingProtocol {
    defaultPlaceholderForBinding_onObjectClass<R = unknown, P0 = unknown, P1 = unknown>(_defaultPlaceholderForBinding: P0, _onObjectClass: P1): R;
    setDefaultPlaceholder_forBinding_onObjectClass<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_setDefaultPlaceholder: P0, _forBinding: P1, _onObjectClass: P2): R;
    defaultTextColor<R = unknown>(): R;
    setDefaultTextColor<R = void, P0 = unknown>(_setDefaultTextColor: P0): R;
    description<R = unknown>(): R;
    valueForKey<R = unknown, P0 = unknown>(_valueForKey: P0): R;
    _hash<R = number>(): R;
    copy<R = unknown>(): R;
    _type<R = number>(): R;
    dealloc<R = void>(): R;
    initWithType<R = unknown, P0 = number>(_initWithType: P0): R;
  }
  namespace _NSStateMarker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBindingSelectionMarker, NSCopyingProtocol {
      alloc<R = _NSStateMarker>(): R;
      new: <R = _NSStateMarker>() => R;
    }
  }
}
