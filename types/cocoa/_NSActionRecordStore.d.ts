/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSActionRecordStore<T0 = void, T1 = void, T2 = void> extends NSObject {
    replaceObjectInActionRecordsAtIndex_withObject<R = void, P0 = number, P1 = unknown>(_replaceObjectInActionRecordsAtIndex: P0, _withObject: P1): R;
    removeObjectFromActionRecordsAtIndex<R = void, P0 = number>(_removeObjectFromActionRecordsAtIndex: P0): R;
    insertObject_inActionRecordsAtIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _inActionRecordsAtIndex: P1): R;
    addRecord<R = void, P0 = unknown>(_addRecord: P0): R;
    addRecordWithAction_target_sender<R = void, P0 = string, P1 = unknown, P2 = unknown>(_addRecordWithAction: P0, _target: P1, _sender: P2): R;
    dealloc<R = void>(): R;
    actionRecords<R = NSArray>(): R;
  }
  namespace _NSActionRecordStore {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSActionRecordStore>(): R;
      new: <R = _NSActionRecordStore>() => R;
      sharedActionRecordStoreIfExists<R = unknown>(): R;
      sharedActionRecordStore<R = unknown>(): R;
    }
  }
}
