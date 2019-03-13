/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCFilterInfo<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    shouldIncludeNode<R = boolean, P0 = unknown>(_shouldIncludeNode: P0): R;
    filterTypeMatches<R = boolean, P0 = number>(_filterTypeMatches: P0): R;
    filterString<R = NSString>(): R;
    setFilterString<R = void, P0 = NSString>(_v: P0): R;
    filterTypeMask<R = number>(): R;
    setFilterTypeMask<R = void, P0 = number>(_v: P0): R;
    isActive<R = boolean>(): R;
  }
  namespace classes {
    export interface BCFilterInfo<T = any> extends NSObject {
      alloc<R = BCFilterInfo>(): R;
      new: <R = BCFilterInfo>() => R;
    }
  }
}

declare const BCFilterInfo: cocoa.classes.BCFilterInfo;