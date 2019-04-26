/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMetadataQueryResultGroup<T0 = void, T1 = void, T2 = void> extends NSObject {
    _zapResultArray<R = void>(): R;
    resultAtIndex<R = unknown, P0 = number>(_resultAtIndex: P0): R;
    _addResult<R = void, P0 = number>(__addResult: P0): R;
    dealloc<R = void>(): R;
    _init_attributes_index_value<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(__init: P0, _attributes: P1, _index: P2, _value: P3): R;
    results<R = NSArray>(): R;
    resultCount<R = number>(): R;
    subgroups<R = NSArray>(): R;
    value<R = unknown>(): R;
    attribute<R = NSString>(): R;
  }
  namespace NSMetadataQueryResultGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSMetadataQueryResultGroup>(): R;
      new: <R = NSMetadataQueryResultGroup>() => R;
    }
  }
}

declare const NSMetadataQueryResultGroup: cocoa.NSMetadataQueryResultGroup.CLASS;
