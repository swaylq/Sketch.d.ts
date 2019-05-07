/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface va_list<T0 = void, T1 = void, T2 = void> {}
  namespace va_list {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const va_list: cocoa.va_list.CLASS;
