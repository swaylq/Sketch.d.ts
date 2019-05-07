/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDeserializer<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSDeserializer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDeserializer>(): R;
      new: <R = NSDeserializer>() => R;
      deserializePropertyListLazilyFromData_atCursor_length_mutableContainers<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = boolean>(_deserializePropertyListLazilyFromData: P0, _atCursor: P1, _length: P2, _mutableContainers: P3): R;
      deserializePropertyListFromData_atCursor_mutableContainers<R = unknown, P0 = unknown, P1 = number, P2 = boolean>(_deserializePropertyListFromData: P0, _atCursor: P1, _mutableContainers: P2): R;
      deserializePropertyListFromData_mutableContainers<R = unknown, P0 = unknown, P1 = boolean>(_deserializePropertyListFromData: P0, _mutableContainers: P1): R;
    }
  }
}

declare const NSDeserializer: cocoa.NSDeserializer.CLASS;
