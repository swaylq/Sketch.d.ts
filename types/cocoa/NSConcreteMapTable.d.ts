/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteMapTable<T0 = void, T1 = void, T2 = void> extends NSMapTable {
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    rehash<R = void>(): R;
    rehashAround<R = number, P0 = number>(_rehashAround: P0): R;
    assign_key_value_isNew<R = void, P0 = number, P1 = void, P2 = void, P3 = boolean>(_assign: P0, _key: P1, _value: P2, _isNew: P3): R;
    grow<R = void>(): R;
    dump<R = unknown>(): R;
    containsKeys_values_count<R = boolean, P0 = void, P1 = void, P2 = number>(_containsKeys: P0, _values: P1, _count: P2): R;
    count<R = number>(): R;
    valuePointerFunctions<R = unknown>(): R;
    keyPointerFunctions<R = unknown>(): R;
    classForCoder<R = unknown>(): R;
    _setBackingStore<R = void>(): R;
    checkCount<R = void, P0 = string>(_checkCount: P0): R;
    realCount<R = number>(): R;
    raiseCountUnderflowException<R = void>(): R;
  }
  namespace NSConcreteMapTable {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMapTable {
      alloc<R = NSConcreteMapTable>(): R;
      new: <R = NSConcreteMapTable>() => R;
    }
  }
}

declare const NSConcreteMapTable: cocoa.NSConcreteMapTable.CLASS;
