/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPropertyListSerialization<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSPropertyListSerialization {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPropertyListSerialization>(): R;
      new: <R = NSPropertyListSerialization>() => R;
      propertyListWithStream_options_format_error<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown>(_propertyListWithStream: P0, _options: P1, _format: P2, _error: P3): R;
      writePropertyList_toStream_format_options_error<R = number, P0 = unknown, P1 = unknown, P2 = number, P3 = number, P4 = unknown>(_writePropertyList: P0, _toStream: P1, _format: P2, _options: P3, _error: P4): R;
      propertyListWithData_options_format_error<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown>(_propertyListWithData: P0, _options: P1, _format: P2, _error: P3): R;
      dataWithPropertyList_format_options_error<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown>(_dataWithPropertyList: P0, _format: P1, _options: P2, _error: P3): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      propertyListFromData_mutabilityOption_format_errorDescription<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown>(_propertyListFromData: P0, _mutabilityOption: P1, _format: P2, _errorDescription: P3): R;
      dataFromPropertyList_format_errorDescription<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_dataFromPropertyList: P0, _format: P1, _errorDescription: P2): R;
      propertyList_isValidForFormat<R = boolean, P0 = unknown, P1 = number>(_propertyList: P0, _isValidForFormat: P1): R;
    }
  }
}

declare const NSPropertyListSerialization: cocoa.NSPropertyListSerialization.CLASS;
