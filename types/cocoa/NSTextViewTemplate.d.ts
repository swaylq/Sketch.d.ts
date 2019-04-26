/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextViewTemplate<T0 = void, T1 = void, T2 = void> extends NSViewTemplate {}
  namespace NSTextViewTemplate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewTemplate {
      alloc<R = NSTextViewTemplate>(): R;
      new: <R = NSTextViewTemplate>() => R;
    }
  }
}

declare const NSTextViewTemplate: cocoa.NSTextViewTemplate.CLASS;
