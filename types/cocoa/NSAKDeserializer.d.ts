/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAKDeserializer<T0 = void, T1 = void, T2 = void> extends NSObject {
    deserializePListValueIn_key_length<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_deserializePListValueIn: P0, _key: P1, _length: P2): R;
    deserializePListKeyIn<R = unknown, P0 = unknown>(_deserializePListKeyIn: P0): R;
    deserializePList<R = unknown, P0 = unknown>(_deserializePList: P0): R;
    deserializeNewPList<R = unknown>(): R;
    deserializeListItemIn_at_length<R = unknown, P0 = unknown, P1 = number, P2 = number>(_deserializeListItemIn: P0, _at: P1, _length: P2): R;
    deserializeList<R = unknown, P0 = unknown>(_deserializeList: P0): R;
    deserializeNewList<R = unknown>(): R;
    deserializeString<R = unknown, P0 = unknown>(_deserializeString: P0): R;
    deserializeNewKeyString<R = unknown>(): R;
    deserializeNewString<R = unknown>(): R;
    deserializeData<R = unknown, P0 = unknown>(_deserializeData: P0): R;
    deserializeNewData<R = unknown>(): R;
    deserializeNewObject<R = unknown>(): R;
    deserializerStream<R = unknown>(): R;
    dealloc<R = void>(): R;
    initForDeserializerStream<R = unknown, P0 = unknown>(_initForDeserializerStream: P0): R;
  }
  namespace NSAKDeserializer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAKDeserializer>(): R;
      new: <R = NSAKDeserializer>() => R;
    }
  }
}

declare const NSAKDeserializer: cocoa.NSAKDeserializer.CLASS;
