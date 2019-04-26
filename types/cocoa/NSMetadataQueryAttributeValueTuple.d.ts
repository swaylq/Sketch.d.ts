/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMetadataQueryAttributeValueTuple<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    _init_attribute_value_count<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(__init: P0, _attribute: P1, _value: P2, _count: P3): R;
    count<R = number>(): R;
    value<R = unknown>(): R;
    attribute<R = NSString>(): R;
  }
  namespace NSMetadataQueryAttributeValueTuple {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSMetadataQueryAttributeValueTuple>(): R;
      new: <R = NSMetadataQueryAttributeValueTuple>() => R;
    }
  }
}

declare const NSMetadataQueryAttributeValueTuple: cocoa.NSMetadataQueryAttributeValueTuple.CLASS;
