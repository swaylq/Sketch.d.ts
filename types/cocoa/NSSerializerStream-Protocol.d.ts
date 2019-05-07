/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSerializerStreamProtocol<T0 = void, T1 = void, T2 = void> {
    copySerializationInto<R = void, P0 = void>(_copySerializationInto: P0): R;
    writeDelayedInt<R = void, P0 = number>(_writeDelayedInt: P0): R;
    writeRoomForInt<R = number, P0 = number>(_writeRoomForInt: P0): R;
    writeData_length<R = number, P0 = void, P1 = number>(_writeData: P0, _length: P1): R;
    writeAlignedDataSize<R = number, P0 = number>(_writeAlignedDataSize: P0): R;
    writeInt<R = number, P0 = number>(_writeInt: P0): R;
  }
  namespace NSSerializerStreamProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
