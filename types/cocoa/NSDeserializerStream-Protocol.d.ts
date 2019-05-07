/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDeserializerStreamProtocol<T0 = void, T1 = void, T2 = void> {
    initFromMemoryNoCopy_length_freeWhenDone<R = unknown, P0 = void, P1 = number, P2 = boolean>(_initFromMemoryNoCopy: P0, _length: P1, _freeWhenDone: P2): R;
    readData_length<R = void, P0 = void, P1 = number>(_readData: P0, _length: P1): R;
    readAlignedDataSize<R = number>(): R;
    readInt<R = number>(): R;
  }
  namespace NSDeserializerStreamProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
