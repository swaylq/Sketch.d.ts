/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPICTConvertingProtocol<T0 = void, T1 = void, T2 = void> {
    imageDataRecordFromPICTDataRecord<R = NSDictionary, P0 = NSDictionary>(_imageDataRecordFromPICTDataRecord: P0): R;
    PICTDataRecordFromImageDataRecord<R = NSDictionary, P0 = NSDictionary>(_PICTDataRecordFromImageDataRecord: P0): R;
    renderedBitmapInfoFromPICTDataRecord<R = NSDictionary, P0 = NSDictionary>(_renderedBitmapInfoFromPICTDataRecord: P0): R;
  }
  namespace _NSPICTConvertingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
