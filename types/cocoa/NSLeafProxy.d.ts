/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLeafProxy<T0 = void, T1 = void, T2 = void> {
    isProxy<R = boolean>(): R;
    dealloc<R = void>(): R;
    retainCount<R = number>(): R;
    autorelease<R = unknown>(): R;
    _isDeallocating<R = boolean>(): R;
    _tryRetain<R = boolean>(): R;
    release<R = void>(): R;
    retain<R = unknown>(): R;
    reallyDealloc<R = void>(): R;
    copy<R = unknown>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    initDir_file_docInfo<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initDir: P0, _file: P1, _docInfo: P2): R;
    methodSignatureForSelector<R = unknown, P0 = string>(_methodSignatureForSelector: P0): R;
    forwardInvocation<R = void, P0 = unknown>(_forwardInvocation: P0): R;
  }
  namespace NSLeafProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      alloc<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSLeafProxy: cocoa.NSLeafProxy.CLASS;
