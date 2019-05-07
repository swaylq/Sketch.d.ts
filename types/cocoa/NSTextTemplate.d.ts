/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextTemplate<T0 = void, T1 = void, T2 = void> extends NSViewTemplate {}
  namespace NSTextTemplate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewTemplate {
      alloc<R = NSTextTemplate>(): R;
      new: <R = NSTextTemplate>() => R;
    }
  }
}

declare const NSTextTemplate: cocoa.NSTextTemplate.CLASS;
