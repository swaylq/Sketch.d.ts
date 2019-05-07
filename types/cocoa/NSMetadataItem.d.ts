/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMetadataItem<T0 = void, T1 = void, T2 = void> extends NSObject {
    valuesForAttributes<R = unknown, P0 = unknown>(_valuesForAttributes: P0): R;
    valueForAttribute<R = unknown, P0 = unknown>(_valueForAttribute: P0): R;
    valueForKey<R = unknown, P0 = unknown>(_valueForKey: P0): R;
    _setQuery<R = void, P0 = unknown>(__setQuery: P0): R;
    _item<R = unknown>(): R;
    dealloc<R = void>(): R;
    _init<R = unknown, P0 = unknown>(__init: P0): R;
    initWithURL<R = unknown, P0 = unknown>(_initWithURL: P0): R;
    attributes<R = NSArray>(): R;
  }
  namespace NSMetadataItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSMetadataItem>(): R;
      new: <R = NSMetadataItem>() => R;
    }
  }
}

declare const NSMetadataItem: cocoa.NSMetadataItem.CLASS;
