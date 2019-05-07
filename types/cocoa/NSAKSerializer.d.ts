/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAKSerializer<T0 = void, T1 = void, T2 = void> extends NSObject {
    serializePListValueIn_key_value<R = number, P0 = unknown, P1 = unknown, P2 = unknown>(_serializePListValueIn: P0, _key: P1, _value: P2): R;
    serializePListKeyIn_key_value<R = number, P0 = unknown, P1 = unknown, P2 = unknown>(_serializePListKeyIn: P0, _key: P1, _value: P2): R;
    serializePropertyList<R = number, P0 = unknown>(_serializePropertyList: P0): R;
    serializeListItemIn_at<R = number, P0 = unknown, P1 = number>(_serializeListItemIn: P0, _at: P1): R;
    serializeList<R = number, P0 = unknown>(_serializeList: P0): R;
    serializeString<R = number, P0 = unknown>(_serializeString: P0): R;
    serializeData<R = number, P0 = unknown>(_serializeData: P0): R;
    serializeObject<R = number, P0 = unknown>(_serializeObject: P0): R;
    serializerStream<R = unknown>(): R;
    dealloc<R = void>(): R;
    initForSerializerStream<R = unknown, P0 = unknown>(_initForSerializerStream: P0): R;
  }
  namespace NSAKSerializer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAKSerializer>(): R;
      new: <R = NSAKSerializer>() => R;
    }
  }
}

declare const NSAKSerializer: cocoa.NSAKSerializer.CLASS;
