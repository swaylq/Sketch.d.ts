/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPPDParse<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    readFromFile<R = unknown, P0 = unknown>(_readFromFile: P0): R;
    endInputStream<R = unknown>(): R;
    startInputStream<R = unknown, P0 = unknown>(_startInputStream: P0): R;
    openInclude<R = unknown, P0 = unknown>(_openInclude: P0): R;
    run<R = unknown>(): R;
    parseStream<R = unknown>(): R;
    parseKey<R = boolean, P0 = boolean>(_parseKey: P0): R;
    getMoreInput<R = boolean>(): R;
    growBuffer_current_end_factor<R = unknown, P0 = unknown, P1 = string, P2 = string, P3 = number>(_growBuffer: P0, _current: P1, _end: P2, _factor: P3): R;
    processKeyword_option_keyTran_arg_argTran_quotedArg<R = unknown, P0 = string, P1 = string, P2 = string, P3 = string, P4 = string, P5 = boolean>(_processKeyword: P0, _option: P1, _keyTran: P2, _arg: P3, _argTran: P4, _quotedArg: P5): R;
    delegate<R = unknown>(): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
  }
  namespace NSPPDParse {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPPDParse>(): R;
      new: <R = NSPPDParse>() => R;
      findPPDFileName<R = unknown, P0 = unknown>(_findPPDFileName: P0): R;
      availablePPDTypeFiles<R = unknown>(): R;
      unixToTypeName<R = unknown, P0 = unknown>(_unixToTypeName: P0): R;
      typeToUnixName<R = unknown, P0 = unknown>(_typeToUnixName: P0): R;
    }
  }
}

declare const NSPPDParse: cocoa.NSPPDParse.CLASS;
