/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSActionRecordTableCellView<T0 = void, T1 = void, T2 = void> extends NSTableCellView, NSPopoverDelegateProtocol {
    _save<R = void, P0 = unknown>(__save: P0): R;
    _selectActionType<R = void, P0 = unknown>(__selectActionType: P0): R;
    _add<R = void, P0 = unknown>(__add: P0): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSActionRecordTableCellView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableCellView, NSPopoverDelegateProtocol {
      alloc<R = _NSActionRecordTableCellView>(): R;
      new: <R = _NSActionRecordTableCellView>() => R;
    }
  }
}
